import axios from "axios";

// Function to create a payment intent manually using Stripe's API
export const createPaymentIntentManual = async (amount) => {
  try {
    const response = await axios.post(
      "https://localhost:3000/donation",
      {
        amount: amount,
        currency: "usd",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating payment intent:", error);
    throw error; // Properly handle the error or re-throw it
  }
};
