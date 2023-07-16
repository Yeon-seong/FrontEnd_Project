let myName = "dabin";
const yourName = "daong";


/* let을 쓰지 않고 기존 변수 myName 값을 업데이트 하기 */
// let으로 변수를 선언하면 변수명만 써서 업데이트 할 수 있다.
myName = "Lee Dabin";
console.log("hello! my name is " + myName);
console.log("your new name is " + yourName);


/* const와 let의 차이점 */
// const는 constant(상수). 바뀌지 않고 고정되는 값을 선언할 때 사용한다.
// let은 변수값을 새로운 값으로 업데이트 할 때 사용한다.
// const를 기본적으로 사용하고, 변수를 업데이트 하고 싶을 때 let을 쓴다.


/* var 변수 선언의 규칙과 const, let을 만든 이유 */
// const와 let가 없던 과거에는 var로만 변수를 선언했다.
// var는 원한다면 어디서든 값을 업데이트 할 수 있지만
// 실수로 값을 업데이트해도, 오류 메시지를 표시하지 않는다.
// 때문에, 값이 바뀌지 않는 코드인지 아닌지 알기 어렵다.