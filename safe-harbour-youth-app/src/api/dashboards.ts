const USER_TOKEN_NAME = "Token";

export type dashboardResponse = {
  totalComplaints: number;
  totalPending: number;
  totalCompleted: number;
  totalInProgress: number;
};

export const fetchAllDashboards = async () => {
  try {
    const userToken = localStorage.getItem(USER_TOKEN_NAME);

    const res = await fetch("/admin/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${userToken}`,
      },
    });
    const data: dashboardResponse = await res.json();
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

export const fetchAllNgoDashboards = async (ngoId: string) => {
  try {
    const userToken = localStorage.getItem(USER_TOKEN_NAME);

    // Ensure the URL is constructed with the NGO ID
    const url = `/api/v1/ngos/${ngoId}/complaints/dashboard/`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Make sure to use the correct Authorization header scheme (Bearer is more common with JWT)
        Authorization: `JWT ${userToken}`,
      },
    });

    // Check if the request was successful
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return {
      result: true,
      data,
    };
  } catch (e) {
    console.error("Fetching NGO Dashboard Data Failed: ", e);
    return {
      result: false,
      data: null,
      message: e instanceof Error ? e.message : "An error occurred",
    };
  }
};
