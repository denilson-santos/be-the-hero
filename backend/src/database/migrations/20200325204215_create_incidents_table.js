exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
      table.increments();
      table.string('ongs_id').notNullable();
      table.string('title').notNullable();  
      table.string('description').notNullable();  
      table.decimal('value').notNullable();  

      table.foreign('ongs_id').references('id').inTable('ongs');
    });
  };
  
  exports.down = function(knex) {
    knex.schema.dropTable('incidents');
  };
  