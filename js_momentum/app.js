/* function(함수)에 데이터를 보낸 후 보내진 데이터를 받는 방법 학습하기 */
// 인수를 보내고, function 함수명()의 괄호()에 데이터를 추가하면 데이터를 받을 수 있다.
// 함수는 2개의 인수를 받을 수도 있다.


// sayHello로 보내진 첫 번째 데이터가 nameOfPrerson이라는 변수로 가게 된다.
// 첫 번째 인수로 데이터가 들어오면 nameOfPrerson이라는 변수 이름을 쓴다.
// nameOfPrerson과 age는 sayHello 함수의 body 안에서만 존재한다.
function sayHello(nameOfPerson, age) {
  console.log(
    "안녕! 내 이름은 " + nameOfPerson + "고, " + age + "살이야. " + "만나서 반가워!"
  );
}

/* 인수를 함수에 보내기 : 함수를 실행하면서 동시에 데이터를 보내기 */
sayHello("Alice", 13);
sayHello("Belua", 12);
sayHello("Chole", 11);
sayHello("Daisy", 10);

// -------------------------------------------------------------------------------------

/* 계산기 만들기 */
// plus 함수는 firstNumber, secondNumber 두 개의 인수를 가진다.
// 첫 번째 변수인 firstNumber에는 첫 번째 인수의 데이터 '10'이 전달되고,
// 두 번째 변수인 secondNumber는 두 번째 인수인 2를 가져간다.
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

// firstNumber와 secondNumber는 plus 함수 안에서만 존재하며, 블록 밖에서 존재할 수 없다.
// plus 함수 밖에서는 참조 오류(Uncaught ReferenceError)가 난다.
// console.log(firstNumber + secondNumber);


// a와 b도 divide 함수 안에서만 존재한다.
function divide(a, b) {
  console.log(a / b);
}


// 실행 버튼을 눌러야 하기에 괄호()를 써야 한다.
// plus 함수의 실행버튼 누르기
plus(10, 2);

// divide 함수의 실행버튼 누르기
divide(33, 11);


// -------------------------------------------------------------------------------------

/* 객체(object) 안에서 매개 변수가 인수를 얻는 방법 학습하기 */

/* player object(객체) */
// 문자, 숫자, boolean 같은 데이터 타입을 넣어주는 대신에 sayHello는 함수와 같다고 한다.
// sayHello라는 player 객체 안의 함수를 부를 때
const player = {
  name: "YeonSeong",
  sayHello: function(otherPersonName) {
    console.log("hello! " + otherPersonName + " nice to meet you!");
  },
};


// sayHello에게 바깥으로부터 인수를 받도록 한다.
// sayHello 함수는 "Amand"라는 첫 번째 인수를 받고, 그게 otherPersonName으로 간다.
// player.sayHello() 안에 값을 넣으면 console.log처럼 출력한다.
console.log(player.name);
player.sayHello("Amand");
player.sayHello("Emily");


/* 함수에게 정보를 보내고 받는 방법 */
function heart(c, d) {  // (c, d)는 매개변수로 함수가 보내진 정보를 받는다.
  console.log(c + d);
}

heart(5, 5);  // 데이터(인수)를 함수 안으로 보낸다.