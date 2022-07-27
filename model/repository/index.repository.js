const ProductRepository = require("./collections/product.repository");

class Repository {
  get product() {
    return new ProductRepository();
  }
}

module.exports = Repository;