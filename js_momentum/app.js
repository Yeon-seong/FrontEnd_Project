/* 자바스크립트 데이터 타입 : true, false, null, undefined */


/* boolean 값 true, false : 사용자가 로그인 유무를 판단할 때 사용. */
const amICute1 = true;
const amICute2 = false;
console.log(amICute1);
console.log(amICute2);


/* null : 컴퓨터에 값이 의도적으로 없음을 알리기 위해 채워진 값.
해당 변수를 아무것도 없이 비어있는 상태로 채우며, 자연적으로 발생하지 않는다. */
const amICute3 = null;
console.log(amICute3);


/* undefined : 변수를 선언했지만 아무 값도 할당받지 않은 상태. */
/* undefined : 변수에 값을 지정하지 않으면
   메모리 상에 자리는 존재하지만 값이 채워지지 않은 채로 있다.*/
const apple = null;
let something; // 변수를 만들었지만, apple과 달리 값을 주고있지 않다.
console.log(something, apple);