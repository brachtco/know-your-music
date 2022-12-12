var apiKey = "6eb7995f9da6e507011787533014528";
var fetchButton = document.getElementById("submit");

//Use the pop method to show the album image
function showAlbum(artist) {
  var url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=6eb7995f9da6e507011787533014528f&format=json`;
  var image = document.getElementById("imageCard");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.topalbums.album[0].image.pop()["#text"];
      image.innerHTML = `<img src="${imageUrl}" />`;
    });
}

//Use the map method to print the genres to tyhe scre
function showInfo(artist) {
  var url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=6eb7995f9da6e507011787533014528f&format=json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const genres = data.artist.tags.tag.map((genre) => genre.name).join(", ");
      document.getElementById("genreCard").textContent = genres;
    });
}

//fetch function the input value and call the functions to show the ablum image and the genres
function fetchApi(event) {
  event.preventDefault();
  var artist = document.getElementById("searchArtist").value;
  showAlbum(artist);
  showInfo(artist);
}

fetchButton.addEventListener("click", fetchApi);

// var genreUrl = 'http://musicbrainz.org/ws/2/genre/f66d7266-eb3d-4ef3-b4d8-b7cd992f918';

//var genreUrl2 = 'https://musicbrainz.org/ws/2/release-group/3bd76d40-7f0e-36b7-9348-91a33afee20e?inc=genres+user-genres&fmt=json';
