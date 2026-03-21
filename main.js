//CARGAR HTML AL JS

const listAnime = document.getElementById('list-anime')

//FUNCION API

const fetchAnimes = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime")

    const data = await response.json()
    console.log(data)

    data.data.forEach((listAnime) => {
        console.log(listAnime)
    })
}

fetchAnimes()