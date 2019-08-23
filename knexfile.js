// Update with your config settings.
const locallPg = {
  host: "localhost",
  database: "users",
  user: "student",
  password: "hired"
};
const productionDBbConnection = process.env.DATABASE_URL || locallPg;

module.exports = {
  development: {
    client: "pg",
    connection: {
      filename: "./data/users.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); // turns on the FK enforcement
      }
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: productionDBbConnection,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
