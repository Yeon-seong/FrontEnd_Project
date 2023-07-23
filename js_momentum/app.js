/*  자바스크립트 객체 내부에 있는 속성들의 값을 변경하기  */



/*  class hello를 가진 div 내부의 첫 번째 노드(first-child)인 h1을 찾아오기 */
const title = document.querySelector("div.hello:first-child h1");


/*  h1의 style을 자바스크립트에서 변경하기 */
//  hello라는 class를 가진 첫 번째 h1의 글자색을 파란색으로 바꾸기
title.style.color = "blue";