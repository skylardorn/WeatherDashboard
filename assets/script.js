var weatherAPIKey = `http://api.openweathermap.org/geo/1.0/direct?q=chandler=5&appid=021731c1a46d4a6a1084046d26880531`;
var weatherInputValue = document.getElementById("weatherInputValue").value;
var btn = document.querySelector(".btn");

// fetch API
function weatherAPI() {
  fetch(weatherAPIKey)
    .then((x) => x.text())
    .then((y) => myDisplay(y));
}

console.log(weatherAPIKey);

btn.addEventListener("click", weatherAPI);

var weatherAPI = function (user) {
  var apiUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=chandler=5&appid=021731c1a46d4a6a1084046d26880531";
console.log(apiUrl)
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to GitHub");
    });
};

