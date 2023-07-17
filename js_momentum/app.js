/* 데이터를 리스트로 그룹화 : 데이터로 이루어진 배열 만들기 */
// 배열의 목적은 하나의 변수 안에 데이터 리스트를 가지는 것
const a = "apple";
const b = "banana";
const c = "cola";
const d = "donut";
const food = [a, b, c, d];
console.log(food);
console.log(food[1]);


// nonsense 배열
// 배열에는 숫자, 문자, 불린 값, null, undefined, 변수 등을 넣을 수 있다.
const nonsense = [12, "hello", true, false, null, undefined];
console.log(nonsense);


// dayOfWeek 배열 : 7개의 엘리먼트로 이루어진 항목을 나열하는 배열
// 컴퓨터는 0부터 숫자를 센다.
// 인덱스는 0부터 시작한다.(0, 1, 2, 3, 4, 5)
const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];


/* 배열(array) 안에서 항목을 받아오기 */
// 한 요일, 한 주의 몇 번째 날을 알고싶을 때 방법
// dayOfWeek array에서 1번째 element를 알고 싶을 때
// console.log(dayOfWeek[0]);
console.log(dayOfWeek); // "sun" 추가 전, 엘리먼트(요소)가 6개


/* 배열(array) 안에 요일 더 추가하기 */
// 배열이름.push("추가 항목") : 항목 하나를 array 안에 추가하고 싶을 때 사용
dayOfWeek.push("sun");  // dayOfWeek 배열 안에 "sun"을 추가
console.log(dayOfWeek); // "sun" 추가 후, sun을 포함한 엘리먼트(요소)가 7개