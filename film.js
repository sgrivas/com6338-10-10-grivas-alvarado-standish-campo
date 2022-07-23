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
    <p>${Year}</p>
    <p>${Director}</p>
    <p>${Actors}</p>
    <p>${Plot}</p>
    <p>${Country}</p>`

}


const data = JSON.parse(localStorage.getItem("film"))
renderedMovie(data);
console.log(data)

