const productSchema = (table) => {
  table.increments("id");
  table.string("title").notNullable();
  table.string("description").notNullable();
  table.string("picture").notNullable();
}

module.exports = productSchema;