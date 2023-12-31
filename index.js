function getRandomMovie(callback) {
    const movies = [
      "The Shawshank Redemption",
      "Inception",
      "Pulp Fiction",
      "The Dark Knight",
      "Forrest Gump",
      "Jurassic Park",
      "The Matrix",
      "La La Land",
      "Gladiator",
      "The Godfather"
    ];
  
    const promise = new Promise((resolve, reject) => {
      // Simulating a delay (e.g., fetching from an API)
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        resolve(randomMovie);
      }, 2000); // Simulating a 2-second delay
    });
  
    // Using a callback function if provided
    if (callback && typeof callback === 'function') {
      promise.then(movie => callback(null, movie))
             .catch(error => callback(error, null));
    }
  
    return promise;
}

module.exports = {
    getRandomMovie,
};
