const inTheatersEl=document.getElementById('theaters');
async function inTheaters(){
    const fetchURL = `https://imdb-api.com/en/API/InTheaters/k_4767vl9u`
    try {
        const res = await fetch(fetchURL)
        if (res.status !== 200) throw new Error('Movie not found')
        const data = await res.json()
        console.log(data)
        renderedMovie(data);
    } catch (error) {
        // center.innerHTML=''
        // center.textContent=error.message
        // center.appendChild(h2)
        // form.search.value=''
    }
}
inTheaters();

const renderedMovie = ({
    items:[
        item1,
        item2,
        item3,
        item4,
        item5
    ]
}) => {
    inTheatersEl.innerHTML=`
    <div>
    <img src="${item1.image}">
    <div>
    <h2>${item1.title}</h2>
    <p>${item1.plot}</p>
    </div>
    </div>
    <div>
    <img src="${item2.image}">
    <div>
    <h2>${item2.title}</h2>
    <p>${item2.plot}</p>
    </div>
    </div>
    <div>
    <img src="${item3.image}">
    <div>
    <h2>${item3.title}</h2>
    <p>${item3.plot}</p>
    </div>
    </div>
    <div>
    <img src="${item4.image}">
    <div>
    <h2>${item4.title}</h2>
    <p>${item4.plot}</p>
    </div>
    </div>
    <div>
    <img src="${item5.image}">
    <div>
    <h2>${item5.title}</h2>
    <p>${item5.plot}</p>
    </div>
    </div>
    `
}