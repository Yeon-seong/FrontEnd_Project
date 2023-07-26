//  HTML 요소 가져오기---------------------------------------------------------------


/*  HTML 요소 h1Ele(h1 요소의 약자)를 자바스크립트로 가지고 오기
    class hello를 가진 div 내부의 첫 번째 노드(first-child)인 h1을 찾아오기 */
    const h1Ele = document.querySelector("div.hello:first-child h1");


//  함수 정의하기--------------------------------------------------------------------


/*  사용자가 h1Ele(h1 요소)를 click 했을 때 클래스 이름을 추가/제거하는 함수를 정의하기
		모든 class name들을 교체하지 않도록 자바스크립트가 특정한 class name만 변경한다.
		class name이 존재하는지 확인하는 토글 함수(toggle function)를 사용하기
		toggle은 h1Ele의 classList에 clicked class가 이미 있는지 확인한다.
		clicked class가 있다면 clciked를 제거하고, 없다면 clciked를 classList에 추가한다.	*/
    function handleTitleClick() {
			h1Ele.classList.toggle("clicked");
    }


//  이벤트 리스너 호출하기------------------------------------------------------------


//  HTML의 h1 태그에서 발생한 이벤트
/*  h1Ele의 click event에 대해서 listen 하는 이벤트 리스너 호출하기
    사용자가 h1Ele을 click하면 handleTitleClick 함수가 동작한다. */
    h1Ele.addEventListener("click", handleTitleClick);