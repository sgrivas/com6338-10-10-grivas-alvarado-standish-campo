const filmInfo=document.getElementById('film-info'); //from film page

const renderedMovie = ({
    Title,
    Poster,
    Year,
    Director,
    Country,

}) => {
    filmInfo.innerHTML=`
    <h2>${Title}</h2>
    <img src="${Poster}"/> `
}


const data = JSON.parse(localStorage.getItem("film"))
renderedMovie(data);
console.log(data)

