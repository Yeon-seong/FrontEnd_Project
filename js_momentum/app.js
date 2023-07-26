//  HTML 요소 가져오기---------------------------------------------------------------


/*  HTML 요소 h1Ele(h1 요소의 약자)를 자바스크립트로 가지고 오기
    class hello를 가진 div 내부의 첫 번째 노드(first-child)인 h1을 찾아오기 */
    const h1Ele = document.querySelector("div.hello:first-child h1");


//  함수 정의하기--------------------------------------------------------------------


/*  사용자가 h1Ele(h1 요소)를 click 했을 때 클래스 이름을 추가/제거하는 함수를 정의하기
		모든 class name들을 교체하지 않도록 자바스크립트가 특정한 class name만 변경한다.
		(1) classList가 clicked를 포함하고 있는지만을 확인한다.
		(2) clickedClass가 h1Ele의 classList에 포함되어 있다면 clickedClass를 제거한다.
		(3) 만약에 clickedClass가 classList에 포함되어 있지 않다면 clickedClass를 제거한다.
		결과 : 요소를 클릭하면 love-font class는 그대로 남아 있고, clicked class만 추가된다.
		한 번 더 클릭해 clicked class를 제거하더라도 love-font class는 그대로 남아 있다.	*/
    function handleTitleClick() {
			const clickedClass = "clicked";
			if (h1Ele.classList.contains(clickedClass)) {	// (1)
				h1Ele.classList.remove(clickedClass);				// (2)
			} else {
				h1Ele.classList.add(clickedClass);					// (3)
			}
    }


//  이벤트 리스너 호출하기------------------------------------------------------------


//  HTML의 h1 태그에서 발생한 이벤트
/*  h1Ele의 click event에 대해서 listen 하는 이벤트 리스너 호출하기
    사용자가 h1Ele을 click하면 handleTitleClick 함수가 동작한다. */
    h1Ele.addEventListener("click", handleTitleClick);