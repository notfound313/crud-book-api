import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Book = sequelize.define("authentication", {  
  token: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique:true,
  },
  
});

export default Book;
