/*  HTML 요소 가져오기  */
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");  // toDoform 안에서 input을 찾기


/*  반복해서 사용하는 문자(todos)를 대문자 변수로 저장하기  */
const TODOS_KEY = "todos";


/*  toDos : toDo에 들어오는 텍스트를 배열로 묶어 보관하기
    toDos 배열을 시작할 때 로컬 스토리지에서 발견되는 이전의 toDo들을 넣기  */
let toDos = [];        // const를 let으로 바꿔서 업데이트가 가능하도록 만들기


/*  saveToDos : toDos 배열의 내용을 로컬 스토리지에 넣어 저장하는 함수
    JSON.stringify 메서드로 toDos 배열을 문자로 바꾸기 → 로컬 스토리지는 문자열만 저장 가능  */
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


/*  deleteToDo : toDo를 삭제하는 함수  */
function deleteToDo (event) {
  const li = event.target.parentElement; // 삭제하고 싶은 li
  console.log(li.id);                    // 화면에서 삭제하기 전에 li의 id를 얻기
  li.remove();                           // button의 부모인 li를 제거.
}


/*  paintToDo : toDo를 그리는 함수  */
function paintToDo(newTodo) {                      // newTodo라는 인자를 주기
  const li = document.createElement("li");         // html 내에 li태그를 생성
  li.id = newTodo.id;
  const span = document.createElement("span");     // html 내에 span태그를 생성
  span.innerText = newTodo.text;                   // span의 텍스트를 사용자가 form에서 준 newTodo 값으로 변경
  const button = document.createElement("button"); // html 내에 button태그를 생성
  button.innerText = "삭제";                       // button의 텍스트를 "삭제"로 변경
  button.addEventListener("click", deleteToDo);    // 에서 클릭이 발생하면 deleteToDo 함수 실행
  li.appendChild(span);     // span이라는 자식을 li 태그 안에 추가 
  li.appendChild(button);   // button이라는 자식을 li 태그 안에 추가
  toDoList.appendChild(li); // 새로운 li를 리스트(toDoList)에 추가
}


/*  handleToDoSubmit() 함수
    enter를 누르면 toDoInput의 모든 입력값이 사라지도록 toDoInput의 값에 빈값("")을 넣기  */
function handleToDoSubmit(event) {  // newTodo : input의 value를 비우기 전 값을 나타내는 문자.
  event.preventDefault();           // 사용자가 폼 제출 시 새로고침을 막음
  const newTodo = toDoInput.value;  // 제출하는 텍스트를 저장. input에서 value를 얻음
  toDoInput.value = "";             // 사용자가 폼 제출 시 input 안의 텍스트를 빈값으로 초기화
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObject);        // toDos 배열에 텍스트를 저장하지 않고, 객체를 저장함
  paintToDo(newTodoObject);         // paintToDo에 newTodoObject를 인자로 보내 화면에 toDo를 그림
  saveToDos(toDos);                 // toDo들을 저장하기
}


/*  handleToDoSubmit에 submit event가 발생했을 경우  */
toDoForm.addEventListener("submit", handleToDoSubmit)



/*  로컬 스토리지에서 item인 TODOS_KEY(todos)을 변수명 savedToDos로 가져오기  */
const savedToDos = localStorage.getItem(TODOS_KEY);


/*  savedToDos가 로컬 스토리지에 존재하면
    로컬 스토리지에서 온 JSON 문자열인 savedToDos를 JS 객체로 변환  */
if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //  배열에 있는 각각의 item들을 화면에 출력하기
}