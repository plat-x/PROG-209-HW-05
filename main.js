
document.getElementById('displayArea').style.display = 'none';

document.getElementById('addMovieButton').addEventListener('click', addMovie);
document.getElementById('showMoviesButton').addEventListener('click', showMovies);

let movieArray = [];

function addMovie() {
    let movie = new MovieRating(
        document.getElementById('titleInput').value,
        document.getElementById('ratingInput').value
    );
    if (!movie.isValid()) {
        alert('Error: Data was not good.')
    } else {
        movieArray.push(movie);
    };
    document.getElementById("titleInput").select();
}

function showMovies(){
    document.getElementById('displayArea').style.display = 'block';
    document.getElementById('myUl').innerHTML = "";
    for (let i in movieArray) {
        let myLi = document.createElement('li');
        document.getElementById('myUl').appendChild(myLi);
        myLi.innerHTML = movieArray[i].toString();
    };
    document.getElementById("titleInput").select();
}