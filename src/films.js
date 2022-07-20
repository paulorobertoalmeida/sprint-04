

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
	let result = array.map(movie => movie.director);

	// console.log('Ex. 1 ->', result);

	return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = [];
  for (const movie of array) {
    if(movie.director == director)
      result.push(movie);
  }
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(movies){
  let result = 0;
  for (const movie of movies) {
    result += movie.score;
  }
  return Math.round(100*result/movies.length)/100;
}

function moviesAverageOfDirector(array, director) {
  const movies = getMoviesFromDirector(array, director);
  return moviesAverage(movies);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const result = [];
  const movies = [...array]; // Clone array

  // Sort movies
  movies.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  // Format output
  let size = (movies.length > 20) ? 20 : movies.length;
  for(let i=0; i < size; i++){
    result.push(movies[i].title);
  }

  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const movies = [...array]; // Clone array

  // Sort movies
  return movies.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const movies = [];
  for(const movie of array){
    if(movie.genre.includes(category) && movie.score != ''){
      movies.push(movie);
    }
  }
  return moviesAverage(movies);
}

// Exercise 7: Modify the duration of movies to minutes
function stringHoursToMin(sh = ""){
  let hour = 0;
  let min = 0;
  // Find hours
  if(sh.includes('h')){
    hour = parseFloat(sh.slice(0, sh.indexOf('h')));
  }
  if(sh.includes('min')){
    if(sh.includes('h'))
      min = parseFloat(sh.slice(sh.indexOf('h')+2, -3));
    else
      min = parseFloat(sh.slice(0, -3));
  }
  return 60 * hour + min;
}
function hoursToMinutes(array) {
  const movies = [];
  for(const movie of array){
    const aux = {...movie};
    aux.duration = stringHoursToMin(movie.duration);
    movies.push(aux);
  }
  return movies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const movies = [];

  for(const movie of array){
    if(movie.year == year)
      movies.push(movie);
  }

  movies.sort(function (a, b) {
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  return [movies[0]];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}