/* function(함수) */
// 함수는 계속 반복해서 사용할 수 있는 코드 조각이다.
// 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 한다.(코드의 반복↓)


/* 함수를 만드는 방법 */
// funtion 함수명() {
//   실행 코드 작성(중괄호{} 안에 작성하는 코드가 실행버튼을 누를 때마다 실행된다.)
// }


/* 함수의 실행버튼을 누르는 방법 */
// console.log(), Array.push(), alert()처럼 괄호()가 함수를 실행하는 방법이다.
// function 함수명()의 괄호가 실행버튼이다. 괄호()를 쓴 것이 실행버튼을 누른 것.


/* 함수 괄호()를 비우기 */
// 이전에 alert()를 사용할 때 ()안에 있는 정보를 함수에게 보냈었다.
// 만약 괄호()를 비우고 alert()를 실행하면 내용 없이 비어있는 alert가 뜬다.
alert();


// log로 정보를 보내려면 console.log()의 괄호()안에 정보를 넣는다.
// 실행버튼을 눌렀지만 아무런 정보도 보내지 않았기 때문에 아무것도 출력하지 않는다.
console.log();


/* 우리가 넘겨주는 어떠한 이름이든 Hello를 해주는 함수를 작성하기 */
// sayHello의 실행을 누를 때마다 console.log("Hello! my name is C")가 실행된다.
// Hello my name is C의 C에 다른 값(ex : 여러 사람 이름)을 쓰기 위해서는 인수를 보내야 한다.
// argument(인수)는 함수를 실행하는 동안 어떤 정보를 함수에게 보낼 수 있는 방법을 말한다.
function sayHello() {
  console.log("Hello! my name is C");
}


/* 함수를 실행하면서(함수 실행버튼을 누르면서) 동시에 데이터를 보내기 */
// 함수를 실행 : 함수명();
sayHello("Alice");  // 실행버튼을 누르고 "Alice"라는 데이터를 sayHello에 보내기
sayHello("Bella");  // 실행버튼을 누르고 "Bella"라는 데이터를 sayHello에 보내기
sayHello("Chloe");  // 실행버튼을 누르고 "Chloe"라는 데이터를 sayHello에 보내기


// 함수에 값이나 데이터를 보내는 방법을 학습했다.
// console.log의 경우 console.log("Alice")을 그대로 인쇄하지만
// sayHello 함수의 경우에는 "Hello! my name is"와 우리가 보낸 데이터를 출력해야 한다.