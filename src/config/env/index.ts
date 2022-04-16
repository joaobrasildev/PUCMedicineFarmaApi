export default () => ({
  application: {
    port: process.env.PORT || 3002,
    host: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    environment: process.env.NODE_ENV || 'development',
  }
});
