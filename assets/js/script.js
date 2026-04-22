let genreName = document.querySelector(".genre-name");
let artistName = document.querySelector(".artist-name");
let member = document.querySelector(".member");
let country = document.querySelector(".country");
let bornYear = document.querySelector(".born-year");
let tableBody = document.querySelector("tbody");
let counter = 1;
const artistsArr = [
  "anathema",
  "scorpions",
  "metallica",
  "nirvana",
  "chicago",
  "aerosmith  ",
  "chicago",
  "eminem",
  "madonna",
  "abba",
  "drake",
  "adel",
  "radiohead",
  "tarkan",
  "bts",
  "beyonce",
  "shakira",
  "him",
  "pink",
  "blackpink",
  "lanadelrey"
]

function createTableRow(counter, a, b, c, d, e) {
  let tableRow = document.createElement("tr");
  let row1 = document.createElement("td");
  row1.classList.add("number");
  row1.innerHTML = `${counter}`;
  let row2 = document.createElement("td");
  row2.classList.add("genre-name");
  row2.innerHTML = `${a}`;
  let row3 = document.createElement("td");
  row3.classList.add("artist-name");
  row3.innerHTML = `${b}`;
  let row4 = document.createElement("td");
  row4.classList.add("member");
  row4.innerHTML = `${c}`;
  let row5 = document.createElement("td");
  row5.classList.add("country");
  row5.innerHTML = `${d}`;
  let row6 = document.createElement("td");
  row6.classList.add("born-year");
  row6.innerHTML = `${e}`;
  tableRow.append(row1, row2, row3, row4, row5, row6);
  tableBody.appendChild(tableRow);
  counter++;
}


artistsArr.forEach((element) => {
  fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${element}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      createTableRow(counter,
        data.artists[0].strGenre,
        data.artists[0].strArtist,
        data.artists[0].intMembers,
        data.artists[0].strCountry,
        data.artists[0].intFormedYear
      );
    })
    .catch((error) => {
      console.log(error)
    })
});