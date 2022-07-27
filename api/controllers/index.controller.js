const ProductController = require("./collections/product.controller");

class Controller {
  get product() {
    return new ProductController();
  }
}

module.exports = Controller;