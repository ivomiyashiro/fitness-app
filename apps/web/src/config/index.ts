export const CONFIG = {
  API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3030/api",
  API: {
    LIMIT: 20,
    OFFSET: 0,
  },
};
