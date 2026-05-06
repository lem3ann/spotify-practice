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
  "aerosmith",
  "chicago",
  "eminem",
  "madonna",
  "abba",
  "drake",
  "radiohead",
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
let userInput = document.getElementsByClassName("form-control")[0];

let mainArr = JSON.parse(localStorage.getItem("shopList")) || [];
mainArr.forEach(element => {
  createElement(element.content);
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let value = userInput.value.trim();
  if (!value) {
    return;
  }
  let myObj = {
    id: Math.random(),
    content: value
  }
  mainArr.push(myObj);
  createElement(myObj)
  setLocalStorage();
  userInput.value = "";
});



// ------------------------------
// MAIN ARRAY DISPLAY FUNCTION
// ------------------------------
function createElement(text) {
  let myList = document.createElement("li");
  myList.classList.add("my-2");
  myList.setAttribute("data-id", text.id);
  myList.textContent = text.content;
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Delete";
  removeBtn.classList.add("remove-btn");
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit-btn");
  myList.append(removeBtn, editBtn);
  ulList.appendChild(myList);
  collectAllRemoveBtn();
}

function setLocalStorage() {
  localStorage.setItem("shopList", JSON.stringify(mainArr));
}

// -------------------DELETE FUNCİTON ---------------------------------
function collectAllRemoveBtn() {
  let allRemoveBtn = document.getElementsByClassName("remove-btn");

  for (let i = 0; i < allRemoveBtn.length; i++) {
    allRemoveBtn[i].addEventListener("click", function (event) {

      // klik olunan li
      let li = event.target.parentElement;

      // id-ni götür
      let id = li.getAttribute("data-id");

      // array-dən sil
      mainArr = mainArr.filter(item => item.id != id);

      // DOM-dan sil
      li.remove();

      // localStorage update
      setLocalStorage();
    });
  }

  // return allRemoveBtn;
}