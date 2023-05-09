const db = require('mongoose');

db.connect('mongodb://localhost:27017/yjrfp9', { useNewUrlParser: true });

module.exports = db;