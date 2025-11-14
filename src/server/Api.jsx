

const BASE = "https://citisolve-smarter-complaint-resolution.onrender.com/api";

async function request(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const headers = options.headers || {};

  // Add Accept header ALWAYS
  headers["Accept"] = "application/json";

  // If body is NOT FormData → set Content-Type JSON
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = headers["Content-Type"] || "application/json";
  }

  // Add JWT token if available
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Make API request
  const res = await fetch(`${BASE}${endpoint}`, {
    ...options,
    headers,
  });

  // Safely parse JSON (prevents 204 / no-content crash)
  let data = {};
  const text = await res.text();

  try {
    data = text ? JSON.parse(text) : {};
  } catch (e) {
    data = {}; // ignore invalid or empty JSON
  }

  // Error handler
  if (!res.ok) {
    const msg = data?.message || `Request failed (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    err.payload = data;
    throw err;
  }

  return data;
}

/* ============================
      AUTH APIs
============================ */

export const authAPI = {
  register: (payload) =>
    request("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  login: (payload) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  me: () => request("/auth/me", { method: "GET" }),
};

/* ============================
     COMPLAINT APIs
============================ */

export const complaintAPI = {
  create: (data) => {
    // If image exists → send FormData
    if (data instanceof FormData) {
      return request("/complaints", {
        method: "POST",
        body: data,
      });
    }

    // Otherwise JSON
    return request("/complaints", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  list: () =>
    request("/complaints", {
      method: "GET",
    }),

  updateStatus: (id, payload) =>
    request(`/complaints/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),

  delete: (id) =>
    request(`/complaints/${id}`, {
      method: "DELETE",
    }),
};

export default { authAPI, complaintAPI };




