/*  자바스크립트에서 HTML 요소를 가져오고 검색하기  */


/*  class hello를 가진 div 내부의 첫 번째 노드(first-child)인 h1을 찾아오기 */
//  CSS 선택자(selector)를 전달할 수 있다.
//  CSS 방식(.hello h1:first-child)으로 요소를 검색한다.
const title = document.querySelector(".hello:first-child h1");

console.log(title);

title.innerText = "Hello";

/*  h1 요소의 내부를 보고 싶을 때 사용 */
//  기본적으로 객체로 표시한 요소를 보여준다.
console.dir(title);