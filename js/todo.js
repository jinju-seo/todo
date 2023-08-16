/*
const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = []

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) // toDos를 문자열로 바꾸고 저장
}

function deleteToDo(event){
    const li = event.target.parentElement// 'X'버튼을 클릭하면 버튼과 그 버튼 객체의 부모인 li까지 지움 target만 지웠다면 버튼만 사라졌겠지만 부모 li를 지우는 것이기 때문에 전체가 지워짐
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)) // toD의 id가 li의 id와 다른 것만 남기기 (X누른 거 삭제), li.id
    saveToDos()
}

function paintToDo(newTodo){
    const li = document.createElement("li") //html에 <li>태그 생성
    li.id = newTodo.id // <li id="1690791965835">...</li>
    const span = document.createElement("span")
    span.innerText = newTodo.text // <span>hello</span> hello는 입력한 텍스트
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click",deleteToDo)
    li.appendChild(span) // li는 span이라는 자식 가짐(li 안에 span 만듦)
    li.appendChild(button) // li 안에 button 만들기 
    toDoList.appendChild(li) // ul태그 안에 li를 속하게 함
}

function handleToDoSubmit(event){
    event.preventDefault() // 새로고침 막기 
    const newTodo = toDoInput.value // input값 저장
    toDoInput.value = "" // 쓰고나면 지우기 
    const newToDoObj = {
        text: newTodo,
        id: Date.now(), // 랜덤한 값 생성
    }
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos) // 문자열을 객체로 바꿈
    toDos = parsedToDos // 전에 쓴 투두 저장
    parsedToDos.forEach(paintToDo) // parsedToDos에 있는 것들을 하나씪 paintToDo로 보냄. paintToDo를 parsedToDos배열의 요소마다 실행
}
*/












// // document에서 html 태그로 js-toDoForm의 input과 js-toDoList 가져오기
// const toDoForm = document.querySelector(".js-toDoForm")
// const toDoInput = toDoForm.querySelector("input")
// const toDoList = document.querySelector(".js-toDoList");

// // toDo list
// const TODOS_LS = 'writeToDo';

// // toDo를 추가,삭제(변경) 해줘야 하기 때문에 let으로 선언
// let toDos = [];


// // todo 삭제
// function deleteToDo(event){
//     const li = event.target.parentElement // 'X'버튼을 클릭하면 버튼과 그 버튼 객체의 부모인 li까지 지움. 
//     li.remove()                           // target만 지웠다면 버튼만 사라졌겠지만 부모 li를 지우는 것이기 때문에 전체가 지워짐
//     toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)) // toDo의 id가 li의 id와 다른 것만 남기기 (X누른 거 삭제), localStorage에서도 삭제
//     saveToDos()
// }


// // todo localStorage에 저장하기
// function saveToDos(){
//     localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // localStorage에는 문자열밖에 저장을 못하기  때문에 toDos를 문자열로 바꾸고 저장
// }


// // localStorage 에서 todo 불러오기
// function loadToDos(){
//     const toDosLoaded = localStorage.getItem(TODOS_LS);
//     if(toDosLoaded !== null){
//         const parsedToDos = JSON.parse(toDosLoaded);
//         parsedToDos.forEach(function(toDo) {
//             paintToDo(toDo.text);
//         });
//     }
// }





// // todo list 생성 및 출력하기
// function paintToDo(text){
//     const li = document.createElement("li");
//     const delBtn = document.createElement("button");
//     delBtn.innerHTML = "❌";
//     delBtn.addEventListener("click", deleteToDo);
//     const span = document.createElement("span");
//     const newid = toDos.length +1;
//     li.id = newid;
//     span.innerText = text;
//     li.appendChild(span);
//     li.appendChild(delBtn);
//     toDoList.appendChild(li);


//     const toDoObj = {
//         text: text,
//         id: newid
//     };
//     toDos.push(toDoObj);
//     saveToDos();
// }




// // toDoForm 을 제출하면, 값을 받아와서 리스트로 만들기
// function handleSubmit(event){
//     event.preventDefault();
//     const currentValue = toDoInput.value;
//     paintToDo(currentValue);
//     toDoInput.value = "";
// }


// // 페이지 로드 시 저장된 걸 불러오고, 이벤트를 처리함
// function init(){
//     loadToDos();
//     toDoForm.addEventListener("submit", handleSubmit);
// }

// init();



// document에서 html 태그로 js-toDoForm의 input과 js-toDoList 가져오기
const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-toDoList")

// toDo list
const TODOS_LS = 'toDos'

// toDo를 추가 삭제 해줘야 하기때문에 let으로 선언
let toDos = []

// todo 삭제하기
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

// todo localStorage에 저장하기
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// localStorage 에서 todo 불러오기
function loadToDos(){
    const toDosLoaded = localStorage.getItem(TODOS_LS);
    if(toDosLoaded !== null){
        const parsedToDos = JSON.parse(toDosLoaded);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

// todo list 생성 및 출력하기
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newid = toDos.length +1;
    li.id = newid;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newid
    };
    toDos.push(toDoObj);
    saveToDos();
}

// toDoForm 을 제출하면, 값을 받아와서 리스트로 만들기
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// 페이지 로드 시 저장된 걸 불러오고, 이벤트를 처리함
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();