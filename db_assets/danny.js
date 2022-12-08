var apiKey = "6eb7995f9da6e507011787533014528";
var fetchButton = document.getElementById("submit");

function showAlbum(artist) {
  var url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=6eb7995f9da6e507011787533014528f&format=json`;
  var image = document.getElementById("imageCard");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl =data.topalbums.album[0].image.pop()["#text"];
      image.innerHTML = `<img src="${imageUrl}" />`;
    });
}

function showInfo(artist) {
  var url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=6eb7995f9da6e507011787533014528f&format=json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const genres = data.artist.tags.tag.map((genre) => genre.name).join(", ");
      document.getElementById("genreCard").textContent = genres;
    });
}

//get info from API and load decription in box.
function fetchApi(event) {
  event.preventDefault();
  var artist = document.getElementById("searchArtist").value;
  showAlbum(artist);
  showInfo(artist);
}

fetchButton.addEventListener("click", fetchApi);


// var genreUrl = 'http://musicbrainz.org/ws/2/genre/f66d7266-eb3d-4ef3-b4d8-b7cd992f918';

//var genreUrl2 = 'https://musicbrainz.org/ws/2/release-group/3bd76d40-7f0e-36b7-9348-91a33afee20e?inc=genres+user-genres&fmt=json';
