const database = require("./database-connection");

module.exports = {
    list() {
        return database('game');
    },
    read(id) {
        return database('game').where('id', id).first();

    },
    create(game) {
        return database('game').insert(game, '*').then(record => record[0]);

    },
    update(id, game) {
        return database('game').where('id', id).update(game, '*');

    },
    delete(id) {
        return database('game').where('id', id).del();

    }
};