const form = document.getElementById('movie-form');
const center=document.getElementById('center');
const errorEl=document.getElementById('error')

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userQuery=form.movietitle.value
    const nameCleaned = userQuery.replace(/\s/g, '+')
    console.log(nameCleaned);
    if (!userQuery) return
    const fetchURL = `https://www.omdbapi.com/?t=${nameCleaned}&apikey=502c8ecb`
    try {
        const res = await fetch(fetchURL)
        if (res.status !== 200) throw new Error('Movie not found')
        const data = await res.json()
        localStorage.setItem("film", JSON.stringify(data))
        location = "film.html"
    } catch (error) {
        filmInfo.innerHTML=`
        <h2>${error.message}</h2>`
    }
})



