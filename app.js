const searchSongs =()=>{
    const searchSong = document.getElementById('search-field').value;
    document.getElementById('search-field').value =''
    // console.log(searchSong);
    const url =`https://api.lyrics.ovh/suggest/${searchSong}`
    fetch (url)
    .then(res => res.json())
    .then (json => displaySongs(json.data))
}

const displaySongs = songs =>{
    console.log(songs);
    const songContainer = document.getElementById('songContainer')
    songContainer.innerHTML = ''
    songs.forEach(song => {
        const songDiv = document.createElement('div')
        songDiv.className = 'single-result row align-items-center my-3 p-3'
        songDiv.innerHTML =`
                <div class="col-md-9">
                    <h3 class="lyrics-name">${song.title}</h3>
                    <p class="author lead">Album by <span>${song.artist.name}</span></p>
                </div>
                <audio controls>
                    <source src="${song.preview}" type="audio/ogg">  
                 </audio>

                 <div class="col-md-3 text-md-right text-center">
                      <button onclick="getLyric('${song.title}', '${song.artist.name}')" class="btn btn-success">Get Lyrics</button>
                </div>
                `
        songContainer.appendChild(songDiv)
    });
}

const getLyric =(artist, title) =>{
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => getLyrics(data))
}

const getLyrics =lyrics =>{
    const lyricsDiv = document.getElementById('getLyrics');
    console.log(lyricsDiv);
    lyricsDiv.innerText = lyrics;
}






















// const searchSongs = () =>{
//     const searchSong = document.getElementById('search-field').value;
//     const url = `https://api.lyrics.ovh/suggest/${searchSong}`
//     fetch (url)
//     .then (res =>res.json())
//     .then(json => displaySong(json.data));
// }

// const displaySong =songs=>{
//     console.log(songs);
//     const songContainer = document.getElementById('songContainer')
//     songContainer.innerHTML =''
//     songs.forEach(song => {
//         const songDiv = document.createElement('div')
//         songDiv.className ='single-result row align-items-center my-3 p-3'
//         songDiv.innerHTML = `
//                 <div class="col-md-9">
//                      <h3 class="lyrics-name">${song.title}</h3>
//                     <p class="author lead">Album by <span>${song.artist.name}</span></p>
//                     <audio controls>
//                         <source src="${song.preview}" type="audio/ogg">
//                     </audio>
//                 </div>
//                  <div class="col-md-3 text-md-right text-center">
//                     <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
//                 </div>`
//         songContainer.appendChild(songDiv);
//     });
// }

// const getLyric =(artist, title) =>{
//     const url =`https://api.lyrics.ovh/v1/${artist}/${title}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>getLyrics(data.lyrics))
// }

// const getLyrics = lyrics =>{
//     const lyricsDiv = document.getElementById('getLyrics')
//     console.log(lyricsDiv);
//     lyricsDiv.innerText = lyrics;
// }



























// const searchSongs = () => {
//     const searchSong = document.getElementById('search-field').value;
//     const url = `https://api.lyrics.ovh/suggest/${searchSong}`
//     fetch(url)
//         .then(res => res.json())
//         .then(json => displaySongs(json.data));

// }
// const displaySongs = songs =>{
//     console.log(songs);
//     const songContainer = document.getElementById('songContainer');

//     songs.forEach(song => {
//         const songDiv = document.createElement('div');
//         songDiv.className = 'single-result row align-items-center my-3 p-3';
//         songDiv.innerHTML = `<div class="col-md-9">
//                                 <h3 class="lyrics-name">${song.title}</h3>
//                                 <p class="author lead">Album by <span>${song.artist.name}</span></p>
//                             </div>
//                             <div class="col-md-3 text-md-right text-center">
//                                 <button class="btn btn-success">Get Lyrics</button>
//                             </div>`
        
//         songContainer.appendChild(songDiv);
//     });

// }












