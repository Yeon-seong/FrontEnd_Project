/*  HTML 요소를 가져오기  */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = 'hidden';

/*  로그인 시 유저에게 인사하기  */
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  greeting.innerText = `안녕하세요 ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


/*  서브밋 이벤트가 발생한다면 onLoginSubmit 함수를 실행하기  */
loginForm.addEventListener("submit", onLoginSubmit);