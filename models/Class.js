import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

 const Class = sequelize.define("Class",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    }
})




sequelize.sync({alter: true})
.then(() => {
    console.log("class model created");
})
.catch(err => {
    console.error("Error creating class model", err);
});

export default Class;
