/*  HTML 요소 가져오기  */
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

/*  document가 아닌 toDoform 안에서 input을 찾기  */
const toDoInput = toDoForm.querySelector("input");



/*  paintToDo() 함수 : toDo를 그리기  */
function paintToDo(newTodo) {                   // newTodo라는 인자를 주기
  const li = document.createElement("li");      // html 내에 li태그를 생성
  const span = document.createElement("span");  // html 내에 span태그를 생성
  li.appendChild(span);                         // li 태그 안에 span이라는 자식을 추가
  span.innerText = newTodo; //  handleToDoSubmit에서 온 사용자가 form에서 준 newTodo 값이 span의 텍스트가 됨
  toDoList.appendChild(li); // 새로운 li를 리스트(toDoList)에 추가 : html의 ul 태그 안에 li를 속하게 함
}



/*  handleToDoSubmit() 함수
    enter를 누르면 toDoInput의 모든 입력값이 사라지도록 toDoInput의 값에 빈값("")을 넣기  */
function handleToDoSubmit(event) {  // newTodo : input의 value를 비우기 전 값을 나타내는 문자.
  event.preventDefault();           // 폼 제출 시 새로고침을 막음
  const newTodo = toDoInput.value;  // 제출하는 텍스트를 저장. input에서 value를 얻음
  toDoInput.value = "";             // 엔터를 누르면 텍스트 상자 안의 텍스트를 빈값으로 초기화
  paintToDo(newTodo);               // value를 얻어서 paintToDo 함수에 newTodo를 인자로 보냄
}



/*  handleToDoSubmit에 submit 이벤트가 발생했을 경우  */
toDoForm.addEventListener("submit", handleToDoSubmit)