import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

interface DonationFormProps {
  onClose: () => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return; // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.log("Card element not found!");
      return;
    }

    try {
      const {
        data: { clientSecret },
      } = await axios.post("/api/donations/create-payment-intent", {
        amount: parseInt(amount, 10) * 100,
      });

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        console.log("[error]", result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log("Donation successful!");
          onClose(); // Close the dialog upon successful donation
        }
      }
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Donate
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Donation Amount ($)"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <CardElement />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={!stripe}
            style={{ margin: "20px 0" }}
          >
            Donate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;
