// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'postgres',
      user:     'postgres',
      password: '123456789'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/data/migrations',
    },
    seeds: { directory: './db/data/seeds' },
  },

  staging: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './db/data/migrations',
    },
    seeds: { directory: './db/data/seeds' },
  },

  production: {
    client: 'pg',
    // connection: process.env.DB_URL,
    connection: {
      connectionString: process.env.DB_URL,
      ssl: {rejectUnauthorized: false},
      host: process.env.DATABASE_HOST,
      port: 5432,
      user:     process.env.DATABASE_USER,
      password: process.env.DATABASE_PW,
      database: process.env.DATABASE_DB,
    },
    migrations: {
      directory: './db/data/migrations',
    },
    seeds: { directory: './db/data/seeds' },
  },

  
};


// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       host: "127.0.0.1",
//       database: 'postgres',
//       user:     'postgres',
//       password: '123456789'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       host: process.env.db_url,
//       database: 'postgres',
//       user:     'postgres',
//       password: '123456789'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
