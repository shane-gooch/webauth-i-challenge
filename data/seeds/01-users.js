exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("users").insert([{ username: "Shane", password: "test1" }]);
};
