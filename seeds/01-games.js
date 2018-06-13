const games = require('../games');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert(games);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE game_id_seq RESTART WITH 4;");
    });
};