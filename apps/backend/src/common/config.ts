export const CONFIG = {
  PORT: process.env.PORT || 3030,
  API: {
    PREFIX: '/api',
  },
  CORS: {
    ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
  DELETED_MESSAGE: 'Resource deleted successfully',
};
