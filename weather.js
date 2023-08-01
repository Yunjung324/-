const API_KEY = process.env.API_KEY;

// 위치를 정상적으로 잘 받아온 경우
function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(
        ".current-weather span:first-child"
      );
      const city = document.querySelector(".current-weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //js가 url부르게 함
}

// 위치를 불러오지 못한 경우
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
