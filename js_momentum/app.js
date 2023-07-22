/*  자바스크립트에서 HTML 요소를 가져오고 검색하기  */




/*  getElementById 함수를 사용해 HTML에 있는 id="first"로 요소를 가져오기 */
//  자바스크립트에서 innerText 항목 수정하기
const OneID = document.getElementById("first");
console.log(OneID);
first.innerText = "이름이 같은 id는 중복으로 사용할 수 없다.";



/*  getElementsByClassName 함수로 HTML에 있는 class="second"로 요소를 가져오기 */
//  배열을 가져오기 때문에 first.innerText 방법처럼 자바스크립트로 가져와 항목을 수정할 수 없다.
const TwoCLASS = document.getElementsByClassName("second");
console.log(TwoCLASS);



/*  getElementsByTagName 함수로 HTML에 있는 모든 h3을 가져오기  */
//  태그 이름을 가지고 요소들을 가져와 배열로 리턴한다.
const ThirdCLASS = document.getElementsByTagName("h3");
console.log(ThirdCLASS);



/*  querySelector 함수로 HTML에 있는 fourth class 내부에 있는 h4 하나만 가져오기 */
//  CSS 선택자(selector)를 사용하여 CSS 방식(.hello h1:first-child)으로 요소를 검색한다.
const FourthCLASS = document.querySelector(".fourth h4");
console.log(FourthCLASS);



/*  hello class 내부에 있는 h4를 가져오기 */
//  자바스크립트에서 hello class의 innerText를 "안녕!"으로 바꾸기
const HelloCLASS = document.querySelector(".hello h4");
console.log(HelloCLASS);
HelloCLASS.innerText="안녕!";



/*  querySelector 함수로 HTML에 있는 Last id 내부에 있는 h4 하나만 가져오기  */
//  querySelector는 첫 번째로 검색된 하나의 요소를 리턴한다.
const LastID = document.querySelector("#last h4");
console.log(LastID);



/*  querySelectorAll 함수로 fifth class 내부에 있는 h5를 모두 가져오기 */
//  선택자 안의 조건에 부합하는 모든 요소를 가져와 배열로 리턴한다.
const FifthCLASS = document.querySelectorAll(".fifth h5");
console.log(FifthCLASS);



/*  getElementsByName 함수로 Sixth class 내부에 있는 h6을 모두 가져오기  */
//  태그의 이름(name) 속성값으로 노드에 접근해, 요소를 배열로 리턴한다.
const SixthCLASS = document.getElementsByName("sixth");
console.log(SixthCLASS);