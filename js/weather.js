/*
const API_KEY = "3065bbd6978962d19bb8e017c765c32a"

function onGedOK(position){
    const lat = position.coords.latitude // 위도
    const lon = position.coords.longitude // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(Response => Response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGedError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGedOK, onGedError) // 내 위치 가져옴
*/

const tem= document.querySelector(".js-temp");
const pla= document.querySelector(".js-place");
const API_KEY = "3065bbd6978962d19bb8e017c765c32a";
const COORDS = 'coords';

// API 에서 위도 경도를 가지로 날씨와 장소 받아오기
function getWeather(lat, lng){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url) // fetch 함수 사용하여 API로 날씨 정보 요청
        .then(Response => Response.json()) // fetch 호출결과인 Response 객체를 가져와서 JSON 형식으로 변환
        .then((data) => {
            const temperture = data.main.temp;
            const place = data.name;
            tem.innerText = `${temperture}°`;
            pla.innerText = place;
        });
}

// 위도 경도 저장하기
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj)); // localStorage에 문자열만 저장 가능
}


// 위치청보를 얻어왔을 때 위도경도 저장하고, 날씨 가져오기
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, latitude);
    
}

// 위치정보 얻는거 실패했을 때 
function handleGeoFail(positon){
    console.log("Can't find you. No weather for you.");
}


// 내 위치 가져옴
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail); 
}


// 위치정보 저장된거 불러오기
function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    // 저장된 위치정보가 없으면 가져오기
    if(loadCoords === null){
        askForCoords();
    }else {
        // 있으면 날씨 가져오기
        const parseCoords = JSON.parse(loadCoords); // 문자열을 다시 JavaScript 객체로 변환해야 위치 정보를 사용할 수 있음
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();

