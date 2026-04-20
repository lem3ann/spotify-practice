// https://openwhyd.org/hot/electro?format=json\
let trackName = document.querySelector(".track-name");
let artistName = document.querySelector(".artist-name");

let request = new XMLHttpRequest();
request.open("GET", "https://openwhyd.org/hot/electro?format=json");
request.send();
request.addEventListener("load", function () {
  const data = this;
  console.log(data);
});
