//openweathermap 가입 후 API KEY 획득

const WEA_API_KEY = "96831dc44eb3ecab74b013aa1c76c389";
const COORDS = "coords";

const weather = document.querySelector(".js-weather");

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEA_API_KEY}&units=metric`)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            const temper = json.main.temp;
            const place = json.name;
            weather.innerText = `${temper} @ ${place}`;
        });
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords == null) {
        // console.log("here");
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    //console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("can't access geo location");

}

function askForCoords() {
    //console.log("here");
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function init() {
    loadCoords();
}
init();