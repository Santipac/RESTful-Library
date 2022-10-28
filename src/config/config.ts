export default {
  PORT: process.env.PORT || 2003,
  URI:
    process.env.DATABASE_URL ||
    'postgresql://postgres:sincontraseña@localhost:5432/postgres',
};
