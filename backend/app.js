const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const port = 5000;

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.send('Hey wassup');
});

app.get('/movies', (req, res) => {
  fs.readFile('./statics/data.json', 'utf-8', (err, data) => {
    if (err) {
      console.log('error loading in file.', err);
      res.status(400).json({
        message: 'Error in loading data.',
      });
      return;
    }
    try {
      const jdata = JSON.parse(data);
      res.status(200).json({
        message: 'Data Loaded Successfully.',
        data: jdata.movies,
      });
    } catch (e) {
      res.status(500).json({
        message: 'Internal Server Error.',
      });
      console.log('error', e);
    }
  });
});

app.post('/movies', (req, res) => {
  var movie = req.body.movie_name;
  fs.readFile('./statics/data.json', 'utf-8', (err, data) => {
    if (err) {
      console.log('error loading in file.', err);
      res.status(400).json({
        message: 'Error in loading data.',
      });
      return;
    }
    try {
      const jdata = JSON.parse(data);
      if (movie) {
        if (jdata.movies.filter((ele) => ele.name === movie).lenght > 0) {
          res.status(400).json({
            message: 'Movie Found.',
            data: jdata.movies.filter((ele) => ele.name === movie),
          });
        } else {
          res.status(400).json({
            message: 'No Movie Found.',
          });
        }
      } else {
        res.status(400).json({
          message: 'No Movie Found.',
        });
      }
    } catch (e) {
      res.status(500).json({
        message: 'Internal Server Error.',
      });
      console.log('error', e);
    }
  });
});

app.listen(port, () => {
  console.log('Serve is running...');
});
