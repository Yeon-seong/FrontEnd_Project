/*  HTML 요소를 가져오기  */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


/*  반복해서 사용하는 문자(string)를 대문자 변수로 저장하기  */
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "userName";



/*  form의 제출/전송 이벤트(submit event)를 감지하는 함수 실행하기
    새로고침을 해도 로컬 스토리지에 사용자 이름을 저장해 입력 값이 사라지지 않게 하기  */
function onLoginSubmit(event) {
  event.preventDefault();                       // step1. 화면 새로고침 방지
  loginForm.classList.add(HIDDEN_CLASSNAME);    // step2. form을 다시 숨기기
  const userName = loginInput.value;            // step3. value를 userName이라는 key값으로 저장시켜준다.
                                                // userName은 사용자가 input에 입력한 유저명. 로컬 스토리지에 저장한다.
  localStorage.setItem(USERNAME_KEY, userName); // step4. userName을 로컬 스토리지에 저장한다.
  paintGreetings(userName);                     // step5. onLoginSubmit 함수에서는 사용자 정보가 input으로부터 오고 있다.
}



/*  greeting에 텍스트를 추가 후 hidden 클래스명을 지우고, h1을 화면에 띄우는 함수
    step5. 비어있는 h1 요소안에 `Hello username` 이라는 텍스트 추가 */
function paintGreetings(userName) {
  greeting.innerText = `안녕하세요 ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}



/*  유저 정보를 저장하는 savedUsername 변수를 선언하기
    step6. 앱이 시작되면 local storage에서 로컬 스토리지에서
    userName이라는 key를 가지고 savedUsername을 통해 사용자 정보 존재 여부를 찾는다  */
const savedUsername = localStorage.getItem(USERNAME_KEY);



/*  만약 로컬 스토리지에 유저 정보가 없어서 savedUsername 값이 null 이라면?
    step7. 처음에는 key랑 value가 null이므로 form이 submit 되면
    form의 hidden 클래스명을 지우고, form이 submit될 때만
    onLoginSubmit 함수를 실행시켜, form을 보여준다 */
if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  
/*  만약 로컬 스토리지에 유저 정보가 있다면 paintGreetings 함수를 호출하기
    paintGreetings 함수는 로컬 스트리지에 저장된 값 savedUsername를 인자로 가지며,
    오직 로컬 스토리지에서만 값을 불러온다. */
} else {
  paintGreetings(savedUsername);
}