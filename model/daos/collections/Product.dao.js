const knex = require("knex");
const ContainerDao = require("../container.dao");
const productSchema = require("../../schema/product.schema");
const connectionConfig = require("../../../utils/config/connection.config");

const knexLib = knex(connectionConfig.mariaDB);
const collection = "product";

class ProductDao extends ContainerDao {
  static #instance;
  constructor() {
    if(!ProductDao.#instance) {
      super(connectionConfig.mariaDB, collection);
      console.log(`verifying table ${collection}...`);
      knexLib.schema.hasTable(collection)
        .then(existTable => {
          if(!existTable) {
            knexLib.schema.createTable(collection, table => productSchema(table))
            .then(() => console.log(`${collection} table created!`));
            ;
          } else console.log(`skipping creation ${collection}...`);
        })
        .catch(error => console.log(`Error al conectar [${collection}]: `, error))
        .finally(() => knexLib.destroy())
      ProductDao.#instance = this;
      return this;
    } return ProductDao.#instance;
  }
}

module.exports = ProductDao;