module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/game1"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};