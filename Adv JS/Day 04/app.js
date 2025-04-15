const TOPMOVIES_APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const parentRow = document.querySelector("#parentRow");
const myinp = document.querySelector("#myinp");

const getMovies = async (API) => {
    const response = await fetch(API);
    const data = await response.json()
    ShowMovies(data.results)
    console.log(data.results)
}

getMovies(TOPMOVIES_APIURL)

const ShowMovies = (movies) => {
    parentRow.innerHTML = ""
    movies.map(
        (data, index) => {
            // console.log(data)
            const card = document.createElement("div");
            card.classList.add("mycol");
            card.innerHTML = `<img src=${IMGPATH + data.poster_path} width="100%" height="100%"
                    alt="">
                <div class="overlay">
                    <div>
                        <h4>${data.title}</h4>
                        <span>6.1 </span>
                    </div>
                    <p>
                        <b>Overview</b> <br>
                       ${data.overview}
                    </p>
                    <h6>Release Date: ${data.release_date} </h6>

                </div>`
            parentRow.appendChild(card)
        }
    )

}

myinp.addEventListener(
    "keyup",
    (e) => {
        if (myinp.value == "") {
            getMovies(TOPMOVIES_APIURL)

        } else {
            getMovies(SEARCHAPI + e.target.value)

        }

    }
)



