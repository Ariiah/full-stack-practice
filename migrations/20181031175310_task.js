
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task', function(table) {
    table.increments()
    table.string('ToDo', 255).notNullable().defaultTo('')
    table.string('Done', 255).notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('task')
};
