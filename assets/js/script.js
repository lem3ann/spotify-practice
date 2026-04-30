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
  "lanadelrey",
];

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
      createTableRow(
        counter,
        data.artists[0].strGenre,
        data.artists[0].strArtist,
        data.artists[0].intMembers,
        data.artists[0].strCountry,
        data.artists[0].intFormedYear,
      );
    })
    .catch((error) => {
      console.log(error);
    });
});

// !SECOND PAGE ELEMENT ADD FUNCTIONALTY  ------------------------------------------------------------JS
let ulList = document.getElementsByClassName("shopping-list")[0];
let form = document.getElementsByTagName("form")[0];
// for example
const myElement = [
  { id: 1, content: "list-1" },
  { id: 2, content: "list-2" },
  { id: 3, content: "list-3" },
];

function newListElement(arr) {
  for (const x of arr) {
    createListElement(x.content);
  }
}

function createListElement(element) {
  // create li element and details
  let newLi = document.createElement("li");
  newLi.textContent = element;
  newLi.classList.add("py-2");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  newLi.append(deleteBtn, editBtn);
  ulList.appendChild(newLi);
}
let plusButton = document.getElementsByClassName("plus")[0];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  newListElement(myElement);
});
