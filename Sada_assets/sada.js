var fetchButton = document.getElementById('submit');
var wikiLink = document.getElementById('wikiLink');
var youtubeLink = document.getElementById('youtubeLink');
wikiLink.style.visibility = 'hidden';
youtubeLink.style.visibility = 'hidden';
var searchBar = "";

var similarArtists1 = document.getElementById('similarArtists1');
var similarArtists2 = document.getElementById('similarArtists2');
var similarArtists3 = document.getElementById('similarArtists3');
var similarArtists4 = document.getElementById('similarArtists4');
var similarArtists5 = document.getElementById('similarArtists5');
similarArtists1.style.visibility = 'hidden';
similarArtists2.style.visibility = 'hidden';
similarArtists3.style.visibility = 'hidden';
similarArtists4.style.visibility = 'hidden';
similarArtists5.style.visibility = 'hidden';



function getApiAgain(searchBar, event) {
  // event.preventDefault();
  fetchApi(searchBar);
  var linkBoxTitle = document.getElementById('linkBoxTitle');
  linkBoxTitle.dataset.lastSearch = searchBar;
  youtubeLink.addEventListener('click', function () {
    travelToVideo(linkBoxTitle.dataset.lastSearch);
  });

  wikiLink.addEventListener('click', function () {
    travelToLink(linkBoxTitle.dataset.lastSearch);
  });
  var requestUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&format=json&artist=${searchBar}&api_key=6eb7995f9da6e507011787533014528f`;
  fetch(requestUrl)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      var obj = JSON.parse(JSON.stringify(data));
      var description = document.getElementById('descriptionBox');
      description.innerHTML = obj.artist.bio.summary;
      wikiLink.style.visibility = 'visible';
      youtubeLink.style.visibility = 'visible';
    })
    
  // This function saves the users search history  
  function saveHistory(searchBar) {
    // event.preventDefault();
    var searchHistory = document.getElementById('searchHistory');
    var searchHistoryE1 = document.createElement("button");
    searchHistoryE1.innerHTML = searchBar;
    searchHistoryE1.dataset.name = searchBar;
    // searchHistory.appendChild(searchHistoryE1);
    searchHistoryE1.addEventListener('click', function () {
      getApiAgain(searchBar);
      getSimilarArtists(searchBar);
    })
  }
  saveHistory(searchBar)

  function showAlbum(searchBar) {
    var url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${searchBar}&api_key=6eb7995f9da6e507011787533014528f&format=json`;
    var image = document.getElementById("imageCard");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.topalbums.album[0].image.pop()["#text"];
        image.innerHTML = `<img src="${imageUrl}" />`;
      });
  }

  function showInfo(searchBar) {
    var url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${searchBar}&api_key=6eb7995f9da6e507011787533014528f&format=json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const genres = data.artist.tags.tag.map((genre) => genre.name).join(", ");
        document.getElementById("genreCard").textContent = genres;
      });
  }

  //get info from API and load description in box.
  function fetchApi(searchBar) {
    showAlbum(searchBar);
    showInfo(searchBar);
  }

  function getTopTracks(searchBar) {
    var linkBoxTitle = document.getElementById('linkBoxTitle');
    linkBoxTitle.dataset.lastSearch = searchBar;
    requestUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${searchBar}&api_key=6eb7995f9da6e507011787533014528f&format=json`
    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then(function (data) {

        let index = 1;
        for (let i = 0; i < 5; i++) {
          document.querySelector("#song" + index).textContent = data.toptracks.track[i].name;
          index += 1
        }
      })
  }
  getTopTracks(searchBar);
}


function getApi(event) {
  event.preventDefault();
  fetchApi();
  var searchBar = document.getElementById('searchArtist').value;
  var linkBoxTitle = document.getElementById('linkBoxTitle');


  linkBoxTitle.dataset.lastSearch = searchBar;

  youtubeLink.addEventListener('click', function () {
    travelToVideo(linkBoxTitle.dataset.lastSearch);
  });

  wikiLink.addEventListener('click', function () {
    travelToLink(linkBoxTitle.dataset.lastSearch);
  });
  var requestUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&format=json&artist=${searchBar}&api_key=6eb7995f9da6e507011787533014528f`;

  fetch(requestUrl)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      var obj = JSON.parse(JSON.stringify(data));


      var description = document.getElementById('descriptionBox');
      description.innerHTML = obj.artist.bio.summary;
      wikiLink.style.visibility = 'visible';
      youtubeLink.style.visibility = 'visible';
    })


  // This function saves the users search history  
  function saveHistory(event) {
    // event.preventDefault();
    var searchHistory = document.getElementById('searchHistory');
    var searchHistoryE1 = document.createElement("button");
    searchHistoryE1.innerHTML = searchBar;
    searchHistoryE1.dataset.name = searchBar;
    searchHistory.appendChild(searchHistoryE1);
    searchHistoryE1.addEventListener('click', function () {
      getApiAgain(searchBar);
    })



  }
  saveHistory()


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

  function getTopTracks(event) {
    var artist = document.getElementById('searchArtist').value;
    var linkBoxTitle = document.getElementById('linkBoxTitle');


    linkBoxTitle.dataset.lastSearch = artist;

    requestUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=6eb7995f9da6e507011787533014528f&format=json`

    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then(function (data) {

        let index = 1;
        for (let i = 0; i < 5; i++) {
          document.querySelector("#song" + index).textContent = data.toptracks.track[i].name;
          index += 1
        }
      })
  }
  getTopTracks();

  // $('input[name="searchArtist"]').val('');
}


function travelToLink(searchBar) {
  window.location.href = `https://en.wikipedia.org/wiki/${searchBar}`;
}

function travelToVideo(searchBar) {
  window.location.href = `https://www.youtube.com/results?search_query=${searchBar}`;
}


fetchButton.addEventListener('click', getApi);