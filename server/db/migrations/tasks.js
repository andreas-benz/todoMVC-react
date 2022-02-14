exports.up = function(knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('t_id').primary()
    table.string('title')
    table.string('description')
    table.string('priority')
    table.string('category')
    table.string('status')
    table.date('expiry')
    table.timestamp('created_at').default(knex.fn.now())
    table.integer('created_by').references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};