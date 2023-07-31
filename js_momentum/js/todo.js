/*  HTML 요소 가져오기  */
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
/*  document가 아닌 toDoform 안에서 input을 찾기  */
const toDoInput = toDoForm.querySelector("input");


/*  enter를 누르면 toDoInput의 모든 입력 값이 사라지도록 toDoInput의 값에 빈 값("")을 넣기
    const newTodo = toDoInput.value → input의 현재 value를 새로운 변수에 복사하는 것  */
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  console.log(newTodo);
  toDoInput.value = "";
  console.log(newTodo, toDoInput.value);
}


/*  handleToDoSubmit에 submit 이벤트가 발생했을 경우  */
toDoForm.addEventListener("submit", handleToDoSubmit)