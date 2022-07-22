const theaterEl= document.getElementById('theaters')

async function theaterMovies(){
    const fetchURL='https://imdb-api.com/en/API/InTheaters/k_4767vl9u'
    try {
        const res = await fetch(fetchURL)
        if (res.status !== 200) throw new Error('Movie not found')
        const data = await res.json()
        renderedTheater(data)

    } catch (error) {
        
    }
}

theaterMovies();

const renderedTheater= ({
    items: [
        item1,
        item2,
        item3,
        item4,
        item5
    ]
}
) =>{
    console.log(item1, item2);
    theaterEl.innerHTML=`
    <h1>In Theathers</h1>
    <div>
    <img src="${item1.image}">
    <h2>${item1.title}</h2>
    <p>${item1.plot}</p>
    <img src="${item2.image}">
    <h2>${item2.title}</h2>
    <p>${item2.plot}</p>
    <img src="${item3.image}">
    <h2>${item3.title}</h2>
    <p>${item3.plot}</p>
    <img src="${item4.image}">
    <h2>${item4.title}</h2>
    <p>${item4.plot}</p>
    <img src="${item5.image}">
    <h2>${item5.title}</h2>
    <p>${item5.plot}</p>
    </div>
    `
}

