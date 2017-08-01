const routeNotes = require('./note_routes');

function routes(app, db) {
  routeNotes(app, db);
}

module.exports = routes;