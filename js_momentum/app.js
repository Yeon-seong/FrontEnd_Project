/*	step1 : element 찾기
		step2 : event를 listen 하기
		step3	: event에 반응하기	*/

//  HTML 요소 가져오기 --------------------------------------------------------------


/*  HTML 요소 h1Ele(h1 요소의 약자)를 자바스크립트로 가지고 오기
    class hello를 가진 div 내부의 첫 번째 노드(first-child)인 h1을 찾아오기 */
    const h1Ele = document.querySelector("div.hello:first-child h1");


//  함수 정의하기--------------------------------------------------------------------


/*  사용자가 h1Ele 요소를 click 했을 때 h1Ele의 글자 색을 바꾸는 함수를 정의하기
    만약 currentColor가 blue라면, newColor는 tomato 변경, blue가 아니라면 blue로 변경하기	*/
    function handleTitleClick() {
			const currentColor = h1Ele.style.color;
			let newColor;
			if(currentColor === "blue") {
				newColor = "tomato";
			} else {
				newColor = "blue";
			}
			h1Ele.style.color = newColor;
    }


//  이벤트 리스너 호출하기------------------------------------------------------------


//  HTML의 h1 태그에서 발생한 이벤트
/*  h1Ele의 click event에 대해서 listen 하는 이벤트 리스너 호출하기
    사용자가 h1Ele을 click하면 handleTitleClick 함수가 동작한다. */
    h1Ele.addEventListener("click", handleTitleClick);