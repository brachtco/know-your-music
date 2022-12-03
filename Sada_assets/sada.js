var fetchButton = document.getElementById('submit');


function getApi(event) {
    event.preventDefault();
    var searchBar = document.getElementById('searchArtist').value;
    $('input[name="searchArtist"]').val('');
    var requestUrl = ` http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&format=json&artist=${searchBar}&api_key=6eb7995f9da6e507011787533014528f`;
    
    fetch(requestUrl)
    .then((response) => {
       return response.json();
      })
      .then(function(data){
        var obj = JSON.parse(JSON.stringify(data));
        var description = document.getElementById('descriptionBox');
        description.textContent = obj.artist.bio.summary;
      })
  
    function saveHistory(event){
        // event.preventDefault();
        var searchHistory=$('#searchHistory')
        console.log("found")
        var searchHistoryE1 =$('<li class="searchHistoryResult">')
        searchHistoryE1.text(searchBar)
        searchHistory.append(searchHistoryE1)
        

    }
    saveHistory()
    }



  fetchButton.addEventListener('click', getApi);







