const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/crud';

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
     .then(db => console.log('Database connect'))
     .catch(err => console.error('Error connect database'));

module.exports = mongoose;