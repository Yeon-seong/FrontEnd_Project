/*  HTML 요소를 가져오기  */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");



/*  반복해서 사용하는 문자(string)를 대문자 변수로 저장하기  */
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "userName";



/*  form의 제출/전송 이벤트(submit event)를 감지하는 함수 실행하기
    새로고침을 해도 입력 값이 사라지지 않도록 로컬 스토리지에 유저 이름 저장하기  */
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}



/*  greeting에 텍스트를 추가 후 hidden 클래스명을 지우는 함수 만들기
    코드에서 반복되는 부분을 함수로 만들었고, userName을 인자로 받는다.  */
function paintGreetings(userName) {
  greeting.innerText = `안녕하세요 ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}



/*  유저 정보를 저장하는 savedUsername 변수를 선언하기
    새로고침을 해도 localStorage에 유저 정보가 저장되어 있다.  */
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(USERNAME_KEY);
console.log(savedUsername);



/*  만약 로컬 스토리지에 유저 정보가 없어서 savedUsername 값이 null 이라면?
    form이 submit 되면 form의 hidden 클래스명을 지우고, form을 보여주기  */
/*  만약 로컬 스토리지에 유저 정보가 있다면 paintGreetings 함수를 호출하기
    paintGreetings 함수는 savedUsername를 인자로 가진다. */
if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}