const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "123456789",
    {
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.sync();

(async ()=>{
    try{
        await sequelize.authenticate();
        console.log("CONNECTION SUCCESSFUL WITH DATABASE!");
    } catch (err) {
        console.error("OOPS! UNABLE TO CONNECT WITH DATABASE!");
    }
})();

module.exports = sequelize;