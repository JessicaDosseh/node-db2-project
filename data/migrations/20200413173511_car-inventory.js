
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    // Car ID
    tbl.increments();

    // Critical information
    tbl.text('CarVIN', 128).unique().notNullable(); // Vehicle Identification Number
    tbl.text('CarMake', 128).notNullable(); 
    tbl.text('CarModel', 128).notNullable(); 
    tbl.integer('CarMileage').notNullable(); 

    // Not immediately known
    tbl.text('CarType', 128);
    tbl.text('CarStatus', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars'); 
};
