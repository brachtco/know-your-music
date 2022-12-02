var fetchButton = document.getElementById('submit');
var artists = document.getElementById('descriptionBox');
var searchBar = document.getElementById('searchArtist').value;
var apiKey = "6eb7995f9da6e507011787533014528f";




//Attempting to assign artists value
function handleFormSubmit(event) {
  event.preventDefault();
  var artist = $('input[name="searchArtist"]').val();

  if (!artist) {
    console.log('Nothing input');
    return;
  }
  console.log(artist)

//   var artistValueGrab = $(
//     '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
//   );
//   shoppingListItemEl.text(shoppingItem);

}
handleFormSubmit()

//grabbing LastFM API
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
  }




  fetchButton.addEventListener('click', getApi);


