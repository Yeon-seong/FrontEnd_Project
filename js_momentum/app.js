/*  로그인 폼
    HTML 요소인 login-form id와 login-form id 안에 있는 input을 찾아 가져오기 */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


const link = document.querySelector("a");


/*  form의 제출/전송 이벤트(submit event)를 감지하는 함수 실행하기
    preventDefault 함수를 호출해, 폼을 submit 할 때 새로고침 되는 브라우저 기본 동작 막기  */
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

/*  preventDefault 함수를 호출해, a 태그를 cilck 했을 때 
    href 링크로 이동하지 않게 브라우저 기본 동작 막기  */
function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  alert("클릭했습니다!");
}


/*  서브밋 이벤트가 발생한다면 onLoginSubmit 함수를 실행시킨다.  */
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);