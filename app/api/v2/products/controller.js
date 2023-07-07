const db = require("../../../services/mongodb/config");

const index = (req, res) => {
  db.collection("products")
    .find()
    .toArray()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const view = (req, res) => {
  const { id } = req.params;
  db.collection("products")
    .findOne({ _id: ObjectId(id) })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};
const store = (req, res) => {
  const { name, price, stock, status } = req.body;
  db.collection("products")
    .insertOneOne({ name, price, stock, status })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

module.exports = { index, view, store };
