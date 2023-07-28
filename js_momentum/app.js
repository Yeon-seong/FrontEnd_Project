/*  HTML 요소를 가져오기  */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = 'hidden';

/*  form의 제출/전송 이벤트(submit event)를 감지하는 함수 실행하기
    새로고침을 해도 입력 값이 사라지지 않도록 로컬 스토리지에 유저 이름 저장하기  */
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem("username", userName);
  greeting.innerText = `안녕하세요 ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


/*  서브밋 이벤트가 발생한다면 onLoginSubmit 함수를 실행하기  */
loginForm.addEventListener("submit", onLoginSubmit);