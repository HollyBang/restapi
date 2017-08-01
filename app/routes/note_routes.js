function routeNotes(app, db) {
  app.post('/notes', function (req, res) {

    console.log(req.body)
    res.send('this is a notes!');
  });
}

module.exports = routeNotes;