const express = require('express');
const app = express();
const data = require('./Pokedex_1/pokemonData.json'); 

app.get('./pokemonData', (req, res) => {
  res.json(data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
