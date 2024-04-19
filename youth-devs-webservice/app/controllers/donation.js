// ES Module import statements
import Stripe from 'stripe';
import express from 'express';
import { createPaymentIntentManual } from '../services/stripeService.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (req, res) => {
    const { amount } = req.body; // Assume amount is passed in the smallest currency unit (e.g., cents)
    console.log("Amount:", amount);
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.log("Error creating payment intent:", error);
        res.status(500).send({ error: error.message });
    }
};

const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount } = req.body;
        const paymentIntent = await createPaymentIntentManual(amount);
        res.json(paymentIntent);
    } catch (error) {
        console.error('Failed to create payment intent:', error);
        res.status(500).send({ message: 'Error processing payment', error: error.toString() });
    }
});

export default router;