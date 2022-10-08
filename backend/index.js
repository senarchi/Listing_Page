const express = require('express');
const mongoose = require('mongoose');
const users = require('./list');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(
  'mongodb+srv://ListingProject:ArchiSen@project2.aoespbs.mongodb.net/Listing?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get('/', (req, res) => {
  users
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/user', (req, res) => {
  console.log('Archi');
  console.log(req.body);
  const user = {
    Name: req.body.Name,
    User: req.body.User,
    Date: req.body.Date,
  };
  users.create(user, (err, res) => {
    if (err) {
      throw err;
    }
  });
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`${PORT} running`);
});