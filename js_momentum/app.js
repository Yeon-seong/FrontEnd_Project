/*  로그인 폼
    HTML 요소인 login-form id와 login-form id 안에 있는 input을 찾아 가져오기 */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");



/*  form의 제출/전송 이벤트(submit event)를 감지하는 함수 실행하기
    유저가 이름을 폼을 통해 제출했을 때 새로고침을 막고, 폼이 사라지게 하고, 입력 값을 기록하기  */
function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add("hidden");
  console.log(userName);
}



/*  서브밋 이벤트가 발생한다면 onLoginSubmit 함수를 실행시킨다.  */
loginForm.addEventListener("submit", onLoginSubmit);