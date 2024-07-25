module.exports = {
    host: "localhost",
    dialect: "postgres",
    url: "postgresql://postgres:ibHsXczKstXQDkNZnIDJIUxcaPoNrkdO@viaduct.proxy.rlwy.net:19794/railway",
    define: {
        timestamps: "true",
        underscored: "true",
        underscoredAll: "true"
    },
}

const { Sequelize, sequelizeErrors } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    if (err instanceof sequelizeErrors.ConnectionError) {
      console.error('Unable to connect to the database:', err);
     
      return Promise.reject(new sequelizeErrors.ConnectionError(err));
    } else {
      
      return Promise.reject(err);
    }
  }
}

connectToDatabase()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

