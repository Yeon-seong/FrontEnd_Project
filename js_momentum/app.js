/*  로그인 폼
    HTML 요소인 login-form id를 가져오고, login-form id 안에 있는 input과 button을 찾기 */
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


/*  사용자가 loginButton을 클릭할 때 감지하는 함수 실행하기 */
function onLoginClick() {
  const userName = loginInput.value;
  console.log(userName);
}


/*  클릭 이벤트를 loginButton에 연결해, onLoginClick 함수가 click을 감지하도록 만들기  */
loginButton.addEventListener("click", onLoginClick);