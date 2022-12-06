var apiKey = "6eb7995f9da6e507011787533014528f";

console.log("hello");

var fetchButton = document.getElementById("submit");

//get info from API and load decription in box.
function getApi(event) {
  event.preventDefault();
  var searchBar = document.getElementById("").value;
  //var requestUrl =  'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&format=json&artist=${searchBar}&api_key=6eb7995f9da6e507011787533014528f`;
  // var genreUrl = 'http://musicbrainz.org/ws/2/genre/f66d7266-eb3d-4ef3-b4d8-b7cd992f918b';

  var imageUrl =
    'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist${searchBar}=&api_key=6eb7995f9da6e507011787533014528f&format=json';

  fetch(imageUrl)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      var obj = JSON.parse(JSON.stringify(data));
      var image = document.getElementById("imageCard");
      image.textContent = obj.artist.imagesize("small");
    });
}

fetchButton.addEventListener("click", getApi);
