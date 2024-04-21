export type registrationPayload = {
  password: string;
  email: string;
  name: string;
  address: string;
  phone: string;
  description: string;
  type: string;
  lat: string;
  lng: string;
};

export const registerNgo = async (body: registrationPayload) => {
  try {
    const res = await fetch("/ngos/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify(body),
    });
    const data: registrationPayload = await res.json();
    return {
      result: true,
      data,
    };
  } catch (e) {
    return {
      result: false,
      data: null,
    };
  }
};
