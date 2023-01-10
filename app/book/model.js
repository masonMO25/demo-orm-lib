import { DataTypes } from "sequelize";
import sequelize from "../conn";

const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.INTEGER,
    },
    edition: {
      type: DataTypes.INTEGER,
    },
    isPaperback: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "Book",
  }
);

export default Book;
