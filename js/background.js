/*
const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img") // html에 <img>태그 생성

bgImage.src = `img/${chosenImage}`// <img src="img/1.jpg"> 

document.body.appendChild(bgImage) // document.body에 bgImage를 가장 아래에 넣는 것
// document.body.prepend(bgImage) 반대로 bgImage를 가장 위에 넣는 것
*/



const body = document.querySelector("body");

// 이미지 갯수
const IMG_NUMBER=3;

// 랜덤 숫자 생성
function genRandom(){
    return Math.ceil(Math.random()* IMG_NUMBER);
}

// 랜덤 이미지 출력
function paintImage(imgNumber) {
    const img = new Image();
    img.src = `img/${imgNumber}.jpg`;
    img.classList.add("bgImg");
    body.prepend(img);
}

// 랜덤 수 생성해서, 랜덤 이미지 출력하기
function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();