/**
 * Module: authService
 * Description: This module provides functions related to user authentication.
 * It includes a method for user login.
 */

// Name of the user token stored in localStorage
const USER_TOKEN_NAME = "Token";

// Payload structure for user login
export type loginPayload = {
  email: string;
  password: string;
};

/**
 * Function: login
 * Description: Logs in the user by sending login credentials to the server.
 * Parameters:
 *   - payload: Object containing user email and password for login.
 * Returns: Promise that resolves when the login is successful.
 */
export const login = async (payload: loginPayload) => {
  try {
    // Make a POST request to login endpoint with login credentials
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Check if the response is successful
    if (!res.ok) {
      // Handling non-2xx status codes
      const errorData = await res.json(); // Assuming the server responds with JSON for errors
      console.error("Login failed:", errorData.msg);
      throw new Error(errorData.msg || "Login failed due to server error");
    }

    // Parse response data
    const data = await res.json();

    // Check if token is present in response data
    if (data && data.token) {
      console.log("Login successful");
      // Store the token in localStorage
      localStorage.setItem(USER_TOKEN_NAME, data.token);
    } else {
      console.log(data);
      throw new Error("Invalid response from server");
    }

    // Return success message
    return {
      // result,
      // msg,
      // data,
    };
  } catch (error) {
    // Log and rethrow any errors that occur during login
    console.error("An error occurred during login:", error);
    throw error; // Re-throw the error to handle it further up the call chain
  }
};
