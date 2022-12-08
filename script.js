var fetchButton = document.getElementById('submit');
var wikiLink = document.getElementById('wikiLink');
var youtubeLink = document.getElementById('youtubeLink');
wikiLink.style.visibility='hidden';
youtubeLink.style.visibility='hidden';


function getApi(event) {
 event.preventDefault();
 fetchApi();
var searchBar = document.getElementById('searchArtist').value;
var linkBoxTitle = document.getElementById('linkBoxTitle');
    
    linkBoxTitle.textContent = searchBar;
    linkBoxTitle.dataset.lastSearch = searchBar;
    $('input[name="searchArtist"]').val('');
    
    youtubeLink.addEventListener('click', function(){
      travelToVideo(linkBoxTitle.dataset.lastSearch);
      });

    wikiLink.addEventListener('click',function(){
      travelToLink(linkBoxTitle.dataset.lastSearch);
      });
 var requestUrl = ` http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&format=json&artist=${searchBar}&api_key=6eb7995f9da6e507011787533014528f`;

 fetch(requestUrl)
   .then((response) => {
     return response.json();
   })
   .then(function (data) {
     var obj = JSON.parse(JSON.stringify(data));
     var description = document.getElementById('descriptionBox');
     description.textContent = obj.artist.bio.summary;
     wikiLink.style.visibility='visible';
     youtubeLink.style.visibility='visible';
   })


  // This function saves the users search history  
  function saveHistory(event) {
    // event.preventDefault();
    var searchHistory = $('#searchHistory')
    console.log("found")
    var searchHistoryE1 = $('<button class="searchHistoryResult">')
    searchHistoryE1.text(searchBar)
    searchHistory.append(searchHistoryE1)


  }
  saveHistory()


  // This function will call information from partners' inputs
  function savedArtists(event) { 
    var savedArtists = $('.searchHistoryResult');
    console.log (savedArtists)
    //add click event that runs everyones function when click on an artist name


  }
  savedArtists()
}


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

//get info from API and load description in box.
function fetchApi(event) {
  // event.preventDefault();
  var artist = document.getElementById("searchArtist").value;
  showAlbum(artist);
  showInfo(artist);
}


function travelToLink (searchBar) {
  window.location.href= `https://en.wikipedia.org/wiki/${searchBar}`;
  }

function travelToVideo (searchBar) {
  window.location.href= `https://www.youtube.com/results?search_query=${searchBar}`;
  }


fetchButton.addEventListener('click', getApi);