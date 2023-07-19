/* 함수 안에서 console.log를 사용하지 않고, calculator 객체 안의 함수를 사용하여 계산기 만들기
   더하기, 빼기, 곱하기, 나누기, 제곱을 하고 그 결과를 콘솔에서 볼 수 있지만
   console.log는 콘솔에 결과를 표시할 뿐, 함수로부터 결과를 제공받을 수는 없다. */

const calculator = {
  plus: function(a, b) {
    console.log(a + b);   // 더하기
  }
 };

/* 계산의 결과를 가지고 아무것도 하지 않은 상태다.
   때문에 plus를 실행을 완료하고 난 다음,
   plus의 실제 값은 2가 아니라 undefined(정의되지 않음)이 출력된다. */
   console.log(calculator.plus(1, 1));


// -------------------------------------------------------------------------------------


/* (console.log를 사용하지 않고) 외국인의 한국 나이를 계산하는 함수 만들기
   calculateKrAge는 외국 나이(ageOfForeigner)를 매개 변수로 받는다. */
/* console.log(krAge)를 했을 때 24가 뜨는 이유
   1. 함수 안에서 무언가를 리턴하면
      alculateKrAge(age) 부분을 ageOfForeigner + 2의 결과로 대체한다.
   2. calculateKrAge를 실행시키면 22라는 인수가 age 자리로 대체 된다.
   3. 22가 alculateKrAge(age)의 age 자리로 가고, 22+2를 리턴한다.
   4. ageOfForeigner + 2는 22 + 2 즉, 24가 된다.
   5. 리턴을 함으로써, 함수를 호출하는 코드가 24가 된다. */
const age = 22;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2; // 한국 나이
}

// krAge는 calculateKrAge의 결과와 같다.
/* calculateKrAge 함수가 작동을 완료했을 때
   calculateKrAge 함수를 호출한 코드는 함수의 리턴 값이 된다.
   이 뜻은 krAge는 calculateKrAge의 반환 값이 된다. */
// 함수에서 console.log가 아니라 함수의 반환 값과 같은 변수를 console.log하고 있다.
const krAge = calculateKrAge(age);
console.log(krAge);


/* calculateKrAge 함수는 ageOfForeigner + 2를 리턴한다.
   calculateKrAge 함수가 무언가를 리턴하기 때문에
   이 함수를 호출하는 const krAge = calculateKrAge(age) 코드의
   calculateKrAge(age)가 그 함수의 리턴 값(반환 값)이 된다.
   함수를 호출하고 함수가 반환 값이 있다면 함수를 실행했을 때
   무언가를 실행하고 끝났을 때 리턴 값을 준다. */


// -------------------------------------------------------------------------------------


/* 반환(return)
   함수를 통해 결과를 코드로 받으려면 리턴(return) 키워드를 사용해야 한다.
   리턴(return) 키워드는 함수가 종료됐다는 의미로 함수 내의 변수나 어떤 값을 돌려주는 역할이다.
   해당 함수의 변수값을 지정해주면 해당 코드를 안에서 실행해서
   그 결과값을 해당 함수의 변수값을 선언한 변수한테 돌려준다. */


/* return을 사용하는 이유
   1. 결과를 (콘솔이 아닌) 화면에 출력하거나 데이터를 받아서 사용하기를 원할 때.
   2. 함수 밖에서 결과값을 원하고, 함수가 계산의 결과를 제공하는 것을 원할 때.
   3. 어떤 작업을 하고 그 결과를 리턴하기 위해 함수를 사용한다.
   4. 작업의 결과를 알려주는 함수를 원할 때 그 기능을 리턴이 수행한다. */


/* return을 쓸 때의 주의사항
   1. 리턴 앞에 작업을 해야 출력된다. 
   2. 한 번 리턴을 하면 해당 함수는 끝나기 때문에 리턴 뒤에 작업을 한다면 출력되지 않는다 */


// 함수는 어떤 일을 수행하고 그 결과를 알려주는 것이다.
// 무언가를 리턴하면 계산을 담당하는 함수의 코드는 그 함수가 리턴하는 값과 같아진다.
// 함수는 계속 남아있지 않고, 실행되고 나면 사라진다. 마지막엔 결과를 남긴다.