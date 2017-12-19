module.exports = function(req, res, next) {
  if (!session.user) {
    session.user = { messages:[] };
  }
  next();
}