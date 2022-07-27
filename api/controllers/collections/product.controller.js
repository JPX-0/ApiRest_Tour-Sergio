const Repository = require("../../../model/repository/index.repository");
const STATUS = require("../../../utils/constant/status.constants");

const repoProduct = new Repository().product;

class ProductController {
  async get(req, res, next) {
    const { id } = req.params;
    const { code: status } = STATUS.OK;
    try {
      if(id) {
        const response = await repoProduct.get({ id });
        return res.status(status).json(response);
      }
      const response = await repoProduct.get({});
      res.status(status).json(response);
    } catch (error) { next(error); }
  }

  async post(req, res, next) {
    const { title, description, picture } = req.body;
    const { code: status } = STATUS.CREATED;
    try {
      const response = await repoProduct.create({ title, description, picture });
      res.status(status).json(response);
    } catch (error) { next(error); }
  }

  async put(req, res, next) {
    const { body: { title, description, picture }, params: { id } } = req;
    const { code: status } = STATUS.ACEPTED;
    try {
      const response = await repoProduct.update(id, { title, description, picture });
      res.status(status).json(response);
    } catch (error) { next(error); }
  }

  async delete(req, res, next) {
    const {  id } = req.params;
    const { code: status } = STATUS.ACEPTED;
    try {
      const response = await repoProduct.delete(id);
      res.status(status).json(response);
    } catch (error) { next(error); }
  }
}

module.exports = ProductController;