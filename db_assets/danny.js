var apiKey = "6eb7995f9da6e507011787533014528";
var fetchButton = document.getElementById("submit");
var artistUrl = `https://tastedive.com/api/similar?q=${searchBar}&k=445472-KnowYour-SHRH2F95&format=json`;
var searchBar = document.getElementById("searchArtist").value;

//From the album image arrary use the pop method to grab last image in the index and print to the screen
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

//Use the map method to create a list of strings(genres)
function showInfo(artist) {
  var url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=6eb7995f9da6e507011787533014528f&format=json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log({ data });
      const genres = data.artist.tags.tag.map((genre) => genre.name).join(", ");
      document.getElementById("genreCard").textContent = genres;
    });
}

//Take the value input(artist name) and call the showAlbum amd showInfo functions
//to show the albums and genres on the screen
function fetchApi(event) {
  event.preventDefault();
  var artist = document.getElementById("searchArtist").value;
  console.log({ artist });
  showAlbum(artist);
  showInfo(artist);
}
console.log("hello");


fetchButton.addEventListener("click", function() {

    localStorage.getItem("searchBar");
    localStorage.setItem("searchBar");
  
  
});

//445472-KnowYour-SHRH2F95
