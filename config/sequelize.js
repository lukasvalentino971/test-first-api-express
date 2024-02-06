const Sequelize = require('sequelize');

const sequelize = new Sequelize('testfirstexpress', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established succesfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;