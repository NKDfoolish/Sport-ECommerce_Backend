const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('ecom1', process.env.DB_USERNAME, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,

});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;