/* console: log() 메소드 : 브라우저 콘솔에 log 또는 print한다. */
console.log("LOVE");
console.log('love');
console.log(12);


/*
  숫자, 문자를 가지는 변수 만들기
  숫자 5를 일일이 바꾸지 않고 변수(variable)를 사용해
  변수 선언을 통해 코드를 간결하게 만들 수 있다.
  변수는 값을 저장하거나 유지하는 역할을 한다.
  const는 constant(상수), 바뀌지 않은 값이라 계속 유지된다.
*/
const myName = "dabin";     // 자바스크립트에서 주로 쓰는 camelCase 방식
const lovename = "davi";    // 틀린 코드는 아니지만 가독성이 나쁘다.
const your_Name = "daong";  // 파이썬에서 주로 쓰는 snake_case 방식

const A = 5;
const B = 2;
console.log(A + B);
console.log(A - B);
console.log(A / B);
console.log("hello " + myName);