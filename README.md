# Random Movie Selector

The provided code in 'index.js' is a Node.js application that functions as a random movie selector. It randomly picks a Hollywood movie from a predefined array and prints the result to the console. The script utilizes the `getRandomMovie` function defined in 'index.js'.

## Functionality:

### `getRandomMovie` Function:

- The `getRandomMovie` function generates a random Hollywood movie name from the `movies` array.
- It utilizes a `Promise` to handle the asynchronous operation, simulating a delay of 2 seconds for a more realistic scenario.
- The `resolve` function is invoked with the randomly selected movie when the asynchronous operation is successful.
- A `setTimeout` is used to simulate a delay, which can be useful in scenarios such as fetching data from an API.
- The function also supports an optional `callback` parameter. If a callback function is provided and is a valid function, it is called with the result (movie name) when the asynchronous operation completes. If an error occurs, the callback is called with the error.

### Exporting the Function:

- The `getRandomMovie` function is exported as part of the module using `module.exports`. This enables other files, such as 'script.js', to utilize the function by importing this module.

### Movies Array:

- The array `movies` contains a curated selection of Hollywood movie names.

