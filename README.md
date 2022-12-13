# Know Your Music!

A music application built by Sada Pan-nord, Danny Bracht, Patrick Ruf, and Brennan Coats.

## Description

Know Your Music is a website that allows the user to search up any music artist and recieve relevant information about them.

When the user types an artist name into the input field and clicks submit
the artist information will appear on the screen including:

- Name of the artist
- A short bio of the artist with a link to Last.fm with more details
- An image of one of the artist albums
- The genres of the artist
- A button which links to the artist Wikipage
- A button which links to the artist youTube channel
- An ordered list of the arist top 5 songs
- A list of 5 similiar artists
- When the user clicks on the button of a similar artist their infomation will appear
- The page also features Search History so when the user clicks submit any artist entered will be saved to the page
- And the user can click on the artist button in Search History and their  information will appear

## Under the Hood

We used two APIs to fetch the information for arists: Last.fm and TasteDive.

The Last.FM API was utilized to fetch the artist name, bio, album image, genres and top 5 tracks.
The TasteDive API gives us the similar tracks. And, the Wikipedia and youTube links are href elements
built in two functions.

For CSS, we used the Materialize library, as well as style.css, and we used Google fonts.
For Javascript we utiilzed jQuery and Materialize libraries and our own script.js.

### Deployed Application
https://brachtco.github.io/know-your-music/

### Github Repo
https://github.com/brachtco/know-your-music


### Screenshot
![Screen Shot 2022-12-12 at 10 02 27 AM](https://user-images.githubusercontent.com/17559972/207107624-26fdd58d-4e5f-451e-942d-32e666aaec8a.png)

