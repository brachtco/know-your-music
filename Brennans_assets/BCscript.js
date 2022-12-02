var fetchButton = document.getElementById('submit');
var artists = document.getElementById('descriptionBox');
var searchBar = document.getElementById('searchArtist').value;


function getApi(event) {
    event.preventDefault();
    console.log(artists);
    console.log(searchBar);
    var requestUrl = ` http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${searchBar}&api_key=6eb7995f9da6e507011787533014528f&format=json`;
    console.log(requestUrl);
    fetch(requestUrl)
      .then(function (response) {
        console.log(artists);
        return response.json();
        
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('span');
          listItem.textContent = data[i].html_url;
          artists.appendChild(listItem);
        }
      });
  }




  fetchButton.addEventListener('click', getApi);