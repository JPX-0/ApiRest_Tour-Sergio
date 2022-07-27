class ContainerDao {
  constructor(config, collection) {
    this.knex = require("knex")(config);
    this.collection = collection;
  }
  
  async getAll() {
    return await this.knex.from(this.collection).select("*");
  }
  async getById(id) {
    return await this.knex.from(this.collection).select("*").where("id", "=", id);
  }
  async save(data) {
    return await this.knex.from(this.collection).insert(data);
  }
  async updateById(id, data) {
    return await this.knex.from(this.collection).where("id", "=", id).update(data);
  }
  async deleteById(id) {
    return await this.knex.from(this.collection).where("id", "=", id).del();
  }
}

module.exports = ContainerDao;