const STATUS = require("../../../utils/constant/status.constants");
const CustomError = require("../../../utils/customError.util");
const ProductDao = require("../../daos/collections/Product.dao");

class ProductRepository {
  constructor() {
    this.dao = {
      product: new ProductDao()
    }
  }

  async get({ id }) {
    if(id) {
      const response = await this.dao.product.getById(id);
      if(!response) 
        throw new CustomError(STATUS.NOT_FOUND, `The product with id: "${id}" does not exist in the database.`);
      return response;
    }
    return await this.dao.product.getAll();
  }

  async create({ title, description, picture }) {
    if(!title || !description || !picture) throw new CustomError(STATUS.BAD_REQUEST, "You must enter the keys correctly.");
    const newProduct = { title, description, picture }
    const idProduct = await this.dao.product.save(newProduct);
    return { ...newProduct, id: idProduct[0] }
  }

  async update(id, data) {
    const { title, description, picture } = data
    if(title || description || picture) {
      const product = await this.get({ id });
      const updatingProduct = { ...product, ...data }
      const updatedProduct = {
        id: updatingProduct.id,
        title: updatingProduct.title,
        description: updatingProduct.description,
        picture: updatingProduct.picture
      }
      await this.dao.product.updateById(id, updatedProduct);
      return "Product Updated!";
    }
    throw new CustomError(STATUS.BAD_REQUEST, "You can not enter if you do not enter a valid key");
  }

  async delete(id) {
    await this.get({ id });
    await this.dao.product.deleteById(id);
    return "Product Deleted!";
  }
}

module.exports = ProductRepository;