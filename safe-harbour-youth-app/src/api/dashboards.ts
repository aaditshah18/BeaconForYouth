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
