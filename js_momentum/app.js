/*  calculator 객체 안의 함수를 사용하여 사칙연산, 제곱를 계산하는 계산기 만들기
    이전에는 console.log를 사용해 계산 결과를 콘솔에서 볼 수 있도록 만들었다.
    하지만 console.log는 콘솔에 결과를 표시할 뿐, 함수로부터 결과를 제공받을 수는 없다.
    함수 안에 console.log를 사용하지 않고 리턴(return)을 써서 작업의 결과를 알 수 있다. */

/*  리턴하는 것의 포인트는 함수 내부에서 console.log 하는 것이 아니라
    (콘솔이 아닌) 화면에 결과값을 보여주는 것이다. */

// -------------------------------------------------------------------------------------

/*  아래에 있는 변수들은 값이 있다. 결과 값을 리턴하면 그냥 console.log 했을 때와는 달리,
    plusResult, miunsResult, multResult, dividResult, squaResult에 접근할 수 있다. */

const calculator = {
  plus: function(a, b) {
    return a + b;   // 더하기
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
    return a ** b;  // 제곱
  }
};


/*  연산결과 자체가 변수에게 주어지는 상호의존적인 코드를 만들기
    계산기 안에서 값을 콘솔로 보내는 것이 아니라 리턴을 통해 함수를 호출한
    변수에게 다시 주어서 그걸 갖고 또 다른 함수를 호출하는데 쓴다.
    앞선 연산의 값이 뒤의 연산과 연관되고 체인처럼 서로 얽혀 연결된 코드를 만들었다.
    이처럼 값의 대체를 할 수 있고, 변수 자체가 함수의 리턴 값 */

const plusResult = calculator.plus(2, 3);
const miunsResult = calculator.miuns(plusResult, 10);
const multResult = calculator.mult(10, miunsResult);
const dividResult = calculator.divid(multResult, plusResult);
const squaResult = calculator.squa(dividResult, miunsResult);

/*  calculator가 calculator.plus(2, 3) 작업의 결과를 준다.
    plusResult에 결과를 가지고 있다.
    plus 함수가 무언가를 리턴하기 때문에 이 함수를 호출하는 코드가 그 함수의 리턴 값이 된다.
    plusResult는 calculator.plus(2, 3)의 결과랑 같다.
    calculator.plus은 plus 함수에 2와 3을 보내고, 리턴 값은 5가 되어, plusResult는 5가 된다. */