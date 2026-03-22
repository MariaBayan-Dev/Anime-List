//CARGAR HTML AL JS

const listAnime = document.getElementById('list-anime')

//FUNCION API

const fetchAnimes = async () => {
    try{
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
                    <strong>⭐ ${anime.score}</strong>
                    ${generosHTML}
                </div>
            </li>
            `

            listAnime.insertAdjacentHTML('beforeend', cardHTML)
        })
    }catch (error){
        //Se ejecuta este código solo si algo falla
        console.error("Error al cargar la lista de animes:", error)
        listAnime.innerHTML = "<p>Vaya, algo ha salido mal cargando la lista de animes. Inténtalo de nuevo más tarde.</p>"
    }
}

fetchAnimes()

