const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('swiftmoneydb', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL');
    } catch (err) {
        console.log('Error connecting to MySQL:', err);
    }
};

module.exports = {
    connectDB,
    sequelize
};