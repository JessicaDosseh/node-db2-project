
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          CarVIN: "1HGBH41JXMN109186",
          CarMake: "Honda",
          CarModel: "Civic",
          CarMileage: 12000
        },
        {
          CarVIN: "1HGBH41JXMN109184",
          CarMake: "Jeep",
          CarModel: "Wrangler",
          CarMileage: 12000
        }
      ]);
    });
};
