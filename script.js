const { getRandomMovie } = require("movie-selector");

getRandomMovie()
  .then(movie => {
    console.log('Todays movie is:', movie);
  })
  .catch(error => {
    console.error('Error fetching quote:', error.message);
  });