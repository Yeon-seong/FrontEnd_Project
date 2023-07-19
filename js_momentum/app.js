/*  a+b 같은 실제적인 계산은 자바스크립트 코드에서 value(값)을 바로 얻을 수가 없다.
    리턴 대신 console.log를 실행해도 잘 작동하는 것처럼 콘솔에 표시되지만
    함수 외부에서 값을 제공받으려면 리턴을 사용해야 한다. */

/*  나중에 사용자의 위치에 따라 날씨 정보를 알고 싶을 때
    날씨 정보를 구한 다음. 그 값을 화면에 출력해야 한다.
    그래서 console.log 대신에 리턴(return)을 사용할 예정이다. */

// -------------------------------------------------------------------------------------

const calculator = {
  plus: function(a, b) {
    return a + b;   // 더하기.
  },
  miuns: function(a, b) {
    return a - b;   // 빼기
  },
  mult: function(a, b) {
    return a * b;   // 곱하기
  },
  divid: function(a, b) {
    return a / b;   // 나누기
  },
  squa: function(a, b) {
    console.log("hello"); // 리턴을 하기 전에는 코드가 작동한다.
    return a ** b;  // 제곱
    console.log("bye");   // 리턴하는 순간, 함수는 작동을 멈추고 결과값을 리턴하고 종료된다.
  }
};

/*  변수에 함수를 할당하면 plusResult 변수는 calculator 함수의 리턴 값을 가지게 된다.
    만약 함수를 const, let, var 변수에 할당하면 그 변수는 plus 함수의 결과 타입을 가지게 된다.

    이 뜻은 calculator.plus가 5를 리턴하면 plusResult는 5가 된다. 이는 리턴했을 때에만 가능하다. */
/*  리턴을 하지 않았을 때 plusResult의 결과값을 확인해보면 plusResult은 undefined다. */
    const plusResult = calculator.plus(2, 3);


// -------------------------------------------------------------------------------------


/*  대체하기(replacing)
    1. 호출되는 함수를 보고 plusResult의 마지막에 저장되는 값을 알고 싶다면 plus 함수를 보자.
    2. plus 함수는 a, b를 인자(매개변수)로 가지니까, a는 2, b는 3으로 대체된다.
    3. 리턴하는 a + b는 2 + 3이 되고, 5를 리턴한다.
    4. calculator.plus(2, 3)의 리턴 값이 5가 된다.
    5. 그래서 console.log(plusResult);를 하면 5가 나온다.
    6. 함수는 실행되고 나면 사라지고, 마지막에 결과를 남긴다. */

// const calculator = {
//   plus: function(2, 3) {
//     return 2 + 3;   // 더하기. 즉, 5를 리턴한다.
//   }
// };
// const plusResult = calculator.plus(2, 3);