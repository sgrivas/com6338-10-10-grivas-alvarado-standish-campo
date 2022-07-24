const filmInfo=document.getElementById('film-info'); //from film page

const renderedMovie = ({
    Title,
    Poster,
    Year,
    Director,
    Actors,
    Plot,
    Country

}) => {
    filmInfo.innerHTML=`
    <h2>${Title}</h2>
    <img src="${Poster}"/> 
    <p>Year Released: ${Year}</p>
    <p>Director: ${Director}</p>
    <p>Actors: ${Actors}</p>
    <p>Plot: ${Plot}</p>
    <p>Country Released: ${Country}</p>`

}


const data = JSON.parse(localStorage.getItem("film"))
renderedMovie(data);
console.log(data)

