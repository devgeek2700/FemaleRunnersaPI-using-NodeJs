const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/runnerapidb')
  .then(() => console.log('Database Connected!'))
  .catch(() => console.log("Error in Database Connection!"))