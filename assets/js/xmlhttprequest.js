// https://www.theaudiodb.com/api/v1/json/2/search.php?s=scorpions
let genreName = document.querySelector(".genre-name");
let artistName = document.querySelector(".artist-name");
let member = document.querySelector(".member");
let country = document.querySelector(".country");
let bornYear = document.querySelector(".born-year");
let tableBody = document.querySelector("tbody");
let counter = 1;
// main request code
let request = new XMLHttpRequest();
request.open("GET", "https://www.theaudiodb.com/api/v1/json/2/search.php?s=dogma");
request.addEventListener("load", function () {
    let data = JSON.parse(request.responseText);
    // createTableRow(counter,
    //   data.artists[0].strGenre,
    //   data.artists[0].strArtist,
    //   data.artists[0].intMembers,
    //   data.artists[0].strCountry,
    //   data.artists[0].intBornYear
    // );
    data.artists.forEach(artist => {
        console.log(artist);
    })
});
request.send();


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