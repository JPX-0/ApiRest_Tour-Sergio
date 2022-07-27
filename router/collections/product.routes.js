const { Router } = require(`express`);
const Controller = require("../../api/controllers/index.controller");

const controller = new Controller();
const prouctRoutes = Router();

prouctRoutes.get(`/`, controller.product.get);

prouctRoutes.get(`/:id`, controller.product.get);

prouctRoutes.post(`/`, controller.product.post);

prouctRoutes.put(`/:id`, controller.product.put);

prouctRoutes.delete(`/:id`, controller.product.delete);

module.exports = prouctRoutes;