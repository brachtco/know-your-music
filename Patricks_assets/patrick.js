// var fetchButton = document.getElementById('submit');

//   let topTracks = {
//     fetchTopTracks: function (artist) {
//         // var artist = document.getElementById('searchArtist').value;

//         console.log(artist)
//         fetch(
//             `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=6eb7995f9da6e507011787533014528f&format=json`
//         )
//             .then((response) => response.json())
//             .then((data) => console.log(data))
//     },
//     displayTopTracks: function(dataTopTracks) {
//         console.log(dataTopTracks);
//         let index = 1;
//         for (let i=0; i < 5; i++) {
//             // if (dataTopTracks.track[i] <= 5) {
//                 let data = dataTopTracks.track[i]
//                 const { name } = data.track;
//                 console.log(name);
//                 document.querySelector("#day" + index).innerText= name;
//                 index += 1
//             // }
//         }
//     },
//     search: function () {
//         this.fetchTopTracks(document.querySelector('#submit').value)
//     }
//   };

//   document.getElementById('submit').addEventListener('click', function() {
//     topTracks.search();
//     topTracks.displayTopTracks();
//   });

var fetchButton = document.getElementById('submit');

function getApi(event) {
    event.preventDefault()
    var artist = document.getElementById('searchArtist').value;
    requestUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=6eb7995f9da6e507011787533014528f&format=json`
    console.log(artist)
    fetch(requestUrl)
        .then((response) => {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var obj = JSON.parse(JSON.stringify(data));
            // var topSongsList = document.querySelector('.song-list')
            let index = 1;
            for (let i=0; i < 5; i++) {
                // topSongsList.textContent = obj.artist.name
                document.querySelector("#day" + index).textContent = obj.track.name;
                index += 1
            }
            // topSongsList.textContent = obj.artist.track.name;
        })
}

fetchButton.addEventListener('click', getApi);
