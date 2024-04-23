const USER_TOKEN_NAME = "Token";

export type loginPayload = {
  email: string;
  password: string;
};

export const login = async (payload: loginPayload) => {
  try {
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      // Handling non-2xx status codes
      const errorData = await res.json(); // Assuming the server responds with JSON for errors
      console.error("Login failed:", errorData.msg);
      throw new Error(errorData.msg || "Login failed due to server error");
    }

    const data = await res.json();
    console.log("data ", data);

    if (data && data.token) {
      console.log("Login successful");
      // Storing the token in localStorage
      localStorage.setItem(USER_TOKEN_NAME, data.token);
    } else {
      console.log(data);
      throw new Error("msg");
    }

    return {
      // result,
      // msg,
      // data,
    };
  } catch (error) {
    console.error("An error occurred during login:", error);
    throw error; // Re-throwing the error after logging it, to handle it further up the call chain
  }
};
