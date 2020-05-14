const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/index');

const app = express();
const PORT = 3001;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', router);

mongoose.connect("mongodb+srv://admin2:admin2@mongoDB@nodeapi-yeamq.mongodb.net/noteable?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('connected to mongodb'); })
  .catch(err => console.log('==> db network failure', err));


mongoose.connection.once('open', function () {
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function (error) {
  console.log('Mongoose Connection Error : ' + error);
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});