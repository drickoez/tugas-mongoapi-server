const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/db_products";
const client = new MongoClient(url);

async () => {
  try {
    await client.connect();
    console.log("Connected Succesfully!");
  } catch (error) {
    console.log(error);
  }
};

const db = client.db("db_products");

module.exports = db;
