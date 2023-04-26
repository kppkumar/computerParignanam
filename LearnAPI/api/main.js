const url = 'https://api.disneyapi.dev/character';

async function getDisneyData() {

    const responce = await fetch(url);
    const data = await responce.json();
    const characters = data.data;
    
    function putChar(charIndx, chars) {
        const char = chars[charIndx];
        var name = document.getElementById('char-name');
        name.innerText = char.name;
        var pic = document.getElementById('char-img');
        pic.src = char.imageUrl;
        var filmsUL = document.getElementById('films');
        var films = char.films;
        films.forEach(element => {
            let item = document.createElement('li');
            item.innerText = element;
            filmsUL.appendChild(item);
        });
        var shortFilmsUL = document.getElementById('short-films');
        var shortFilms = char.shortFilms;
        shortFilms.forEach(element => {
            let item = document.createElement('li');
            item.innerText = element;
            shortFilmsUL.appendChild(item);
        });
        var tvShowsUL = document.getElementById('tv-shows');
        var tvShows = char.tvShows;
        tvShows.forEach(element => {
            let item = document.createElement('li');
            item.innerText = element;
            tvShowsUL.appendChild(item);
        });
    }
    putChar(1,characters);
}
getDisneyData();