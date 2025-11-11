const BASE_URL = "https://citisolve-smarter-complaint-resolution.onrender.com/api";

export const registerUserAPI = async (payload) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const loginUserAPI = async (payload) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const addComplaintAPI = async (token, formData) => {
  const res = await fetch(`${BASE_URL}/complaints`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  return res.json();
};
