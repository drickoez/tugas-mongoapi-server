const Products = require("../../api/v1/products/model");
const { BadRequestError, NotFoundError } = require("../../errors");

const getAllProducts = async () => {
  const result = await Products.find();

  return result;
};

const createProducts = async (req) => {
  const { name, price, stocks, status } = req.body;

  const check = await Products.findOne({ name });

  if (check) throw new BadRequestError("kategori nama duplikat");

  const result = await Products.create({ name, price, stocks, status });

  return result;
};

const getOneProducts = async (req) => {
  const { id } = req.params;

  const result = await Products.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada Product dengan id :  ${id}`);

  return result;
};

const updateProducts = async (req) => {
  const { id } = req.params;
  const { name, price, stocks, status } = req.body;

  const check = await Products.findOne({
    name,
    _id: { $ne: id },
  });

  if (check) throw new BadRequestError("kategori nama duplikat");

  const result = await Products.findOneAndUpdate(
    { _id: id },
    { name, price, stocks, status },
    { new: true, runValidators: true }
  );

  if (!result) throw new NotFoundError(`Tidak ada Product dengan id :  ${id}`);

  return result;
};

const deleteProducts = async (req) => {
  const { id } = req.params;

  const result = await Products.findOneAndDelete({
    _id: id,
  });

  if (!result) throw new NotFoundError(`Tidak ada Product dengan id :  ${id}`);

  return result;
};

module.exports = {
  getAllProducts,
  createProducts,
  getOneProducts,
  updateProducts,
  deleteProducts,
};
