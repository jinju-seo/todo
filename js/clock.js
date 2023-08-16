// js-clock class의 h1 가져오기
const clockTitle = document.querySelector(".js-clock h1");


// 시간을 받아서 h1의 innerText에 업데이트
function getClock() {
    const date = new Date() // 호출하는 당시의 날짜, 시간 알려줌
    const hours = String(date.getHours()).padStart(2,"0") // 문자열 앞에 "0"을 추가해서 길이가 2가 되게 함
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`
}

// 1초마다 getClock()실행
getClock() // 웹사이트가 로드되자마자 getClock()을 실행하고
setInterval(getClock, 1000)// 매초마다 계속 실행