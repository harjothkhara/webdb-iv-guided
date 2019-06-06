module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/lambda.db3', // the folder will be created when we run the migrations
    },
    migrations: { //putting migrations into the data folder and not on the root
      directory: `./data/migrations`
    },
    seeds: { //putting seeds into the data folder and not on the root
      directory: `./data/seeds`
    },

    // gotcha: SQLite does not enforce ForeignKeys by default!!
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done);
//if you connect to the database using this particular configuration your 
// going to have foreign keys constraints enforced inside of the database.
      },
    },
  },

  testing: {

  },

  production: {

  }
 
};

//if the configuration is all that changes then we only need to change this file
