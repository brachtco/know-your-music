var fetchButton = document.getElementById('submit');

  fetchButton.addEventListener('click', function() {
    topTracks.search();
  });

  let topTracks = {
    fetchTopTracks: function() {
        var searchBar = document.getElementById('searchArtist').value;
        fetch(
            ` http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks
                &artist=${searchBar}
                    &api_key=6eb7995f9da6e507011787533014528f
                        &format=json `
        )
            .then((response) => response.json())
            .then((data) => this.displayTopTracks(data));
    },
    displayTopTracks: function(dataTopTracks) {
        let index = 1;
        for (let i=0; i < dataTopTracks.list.length; i++) {
            if (dataTopTracks.list[i] <= 5) {
                let data = dataTopTracks.list[i]
                const { name } = data.track;
                console.log(name);
                document.querySelector("#day" + index).innerText= name;
                index += 1
            }
        }
    },
    search: function () {
        this.fetchTopTracks(document.querySelector('#submit').value)
    }
  };