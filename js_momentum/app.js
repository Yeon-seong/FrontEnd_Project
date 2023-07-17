/* object(객체) */
// 1. 중괄호 {}를 사용하며 변수명에 대한 property(특성)을 작성한다.
// 2. 객체 안에서 선언된 이름과 값으로 이루어진 한 쌍
// (property)를 가진 데이터를 저장하도록 해준다.
// 3. 객체 안에서는 '='을 사용하지 않고 ':'을 사용한다.
const player = {
  name: "YeonSeong",
  point: 100,
  cute: true,
};


/* 객체 내부 프로퍼티에 접근하는 방법 */
// 점 표기법(dot notation)으로 player의 name에 접근하기
console.log(player.name);


// 괄호 표기법(bracket notation)으로 player의 point에 접근하기
console.log(player["point"]);


/* 객체 업데이트 및 새로운 객체 프로퍼티 추가하기 */
// const는 let과 다르게 업데이트가 안되지만
// 리스트의 경우 전체를 변경하는 게 아니라 속성값을 수정 or 추가하는 경우에는 업데이트가 가능하다.
// property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능하다.
console.log(player);  // player 객체의 프로퍼티 변경 전
player.cute = false;  // player 객체의 프로퍼티 cute: true를 cute: false로 업데이트하기
player.lastName = 'pororo';  // player 객체에 새로운 프로퍼티를 추가하기
player.point = player.point + 400;   // player 객체의 프로퍼티 point에 400을 더하기
console.log(player);  // player 객체의 프로퍼티 변경 후
console.log(player.point);