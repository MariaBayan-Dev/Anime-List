//CARGAR HTML AL JS

const listAnime = document.getElementById('list-anime')

//FUNCION API

const fetchAnimes = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime")

    const data = await response.json()
    console.log(data)

    data.data.forEach((anime) => {
        console.log(listAnime)

        const generosHTML = anime.genres.map((genero) => `<span>${genero.name}</span>`).join("")

        const cardHTML = `

        <li class="anime-card">
        <img src="${anime.images.jpg.image_url}">

            <div class="card-info">
                <h2>${anime.title}</h2>
                ${generosHTML}
            </div>
        </li>
        `

        listAnime.insertAdjacentHTML('beforeend', cardHTML)
    })
}

fetchAnimes()

