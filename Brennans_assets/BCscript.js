var fetchButton = document.getElementById('submit');
var wikiLink = document.getElementById('wikiLink');
var youtubeLink = document.getElementById('youtubeLink');
wikiLink.style.visibility='hidden';
youtubeLink.style.visibility='hidden';

//get info from API and load decription in box.
function getApi(event) {
    event.preventDefault();
    var searchBar = document.getElementById('searchArtist').value;
    var requestUrl = ` http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&format=json&artist=${searchBar}&api_key=6eb7995f9da6e507011787533014528f`;
    fetch(requestUrl)
    .then((response) => {
       return response.json();
      })
      .then(function(data){
        var obj = JSON.parse(JSON.stringify(data));
        var description = document.getElementById('descriptionBox');
        description.textContent = obj.artist.bio.summary;
        wikiLink.style.visibility='visible';
        youtubeLink.style.visibility='visible';
      })
    }

function travelToLink (event) {
    event.preventDefault();
    var searchBar = document.getElementById('searchArtist').value;
    window.location.href= `https://en.wikipedia.org/wiki/${searchBar}`;
    }

function travelToVideo (event) {
    event.preventDefault();
    var searchBar = document.getElementById('searchArtist').value;
    window.location.href= `https://www.youtube.com/results?search_query=${searchBar}`;
    }

  youtubeLink.addEventListener('click', travelToVideo);
  wikiLink.addEventListener('click', travelToLink);
  fetchButton.addEventListener('click', getApi);

