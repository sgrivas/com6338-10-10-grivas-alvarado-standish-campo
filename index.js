const form = document.getElementById('movie-form');
const center=document.getElementById('center');
const filmInfo=document.getElementById('film-info'); //from film page
const movieInfo=document.getElementById('movieinfo'); //from film page


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userQuery=form.movietitle.value
    const nameCleaned = userQuery.replace(/\s/g, '+')
    console.log(nameCleaned);
    if (!userQuery) return
    const fetchURL = `http://www.omdbapi.com/?t=${nameCleaned}&apikey=502c8ecb`
    try {
        const res = await fetch(fetchURL)
        if (res.status !== 200) throw new Error('Movie not found')
        const data = await res.json()
        renderedMovie(data);
    } catch (error) {
        // center.innerHTML=''
        // center.textContent=error.message
        // center.appendChild(h2)
        // form.search.value=''
    }
})

const renderedMovie = ({
    Title,
}) => {
    movieInfo.innerHTML=`
    <h2>${Title}</h2>
    `
}