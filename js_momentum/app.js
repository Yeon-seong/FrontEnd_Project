/*  나이 계산기 만들기 Part2 → isNaN 함수, 조건문(if문, if-else문) 사용 */
// -------------------------------------------------------------------------------------


/*  음주가 가능한 나이인지 아닌지를 알려주는 나이 계산기 만들기 Part2-2 */
/*  조건문(conditional statements)  */
//  조건식은 boolean(참 또는 거짓)으로 판별할 수 있어야 한다.
//  isNaN(age) 함수가 true를 리턴하면 age는 NaN이고, false를 리턴하면 age는 숫자 타입이다.


/*  조건문이 작동하는 순서
    1. prompt 함수에서 문자(string)을 받는다. (숫자를 입력해도 문자 타입으로 받아진다)
    2. parseInt 함수에서 문자를 숫자로 바뀌기 위해 변환을 시도한다.
    3. 만약 숫자가 아닌 값을 입력하면 parseInt는 parseInt("문자")를 숫자로 변환하지 못한다.
    // 이 경우에는 NaN으로 변환해 숫자가 아님을 알려준다. → const age = NaN
    4. 그래서 isNaN 함수를 사용해 age가 NaN인지 아닌지를 판별한다.
    5. isNaN 함수를 호출하고 첫 번째 인자는 숫자여야 하고, age 자리에 넣는다.
    6. 이 함수가 true가 아니면 false를 리턴. */


const age = parseInt( prompt("당신의 나이는 몇입니까?") );


// if문
if(isNaN(age)) {
    console.log("숫자를 입력해 주세요.");
}


// if-else문
// if 안에 isNaN을 사용하기 때문에 조건문이 true면 if문이 실행, false면 else문이 실행된다.  
if(isNaN(age)) {
    console.log("숫자로 나이를 입력해 주세요.");
} else {
    console.log("나이를 적어주셔서 감사합니다.");
}