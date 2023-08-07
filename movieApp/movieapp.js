const APIURL = 'https://api.themoviedb.org/3/movie/popular?api_key=883e63248a182899d481d55b0376ca9d&append_to_response=videos,images'
// const IMGPATH = 'https://image.tmdb.org/t/p/w1280'

async function getMovies() {
    const resp = await fetch(APIURL)
    const respData = await resp.json()
    // console.log({ respData })

    respData.results.forEach((movie) => {
        const div = document.createElement('div')
        const slide = document.createElement('div')
        slide.classList.add('image-content')
        div.classList.add('card')
        div.innerHTML = `
     
                        <a href="/?id=${movie.id}">
                           ${
                               movie.poster_path
                                   ? ` <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}" 
                          />`
                                   : ` <img src="./image/card1.jpeg" class="card-img-top" alt="${movie.title}" />`
                           }
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">
                                <small class="text-muted">Release: ${movie.release_date}</small>
                            </p>
                        </div>`

        slide.innerHTML = `
                            <div class="card-image">
                                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}" 
                            </div>
                        </div>`
        document.querySelector('.grid').appendChild(div)
        document.querySelector('.card-slide').appendChild(slide)
    })
    return respData
}

getMovies()
