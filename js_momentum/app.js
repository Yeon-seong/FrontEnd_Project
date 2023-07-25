//  HTML 요소 가져오기---------------------------------------------------------------

/*  HTML 요소 h1Ele(h1 요소의 약자)를 자바스크립트로 가지고 오기
    class hello를 가진 div 내부의 첫 번째 노드(first-child)인 h1을 찾아오기 */
    const h1Ele = document.querySelector("div.hello:first-child h1");

//  함수 정의하기--------------------------------------------------------------------

/*  사용자가 h1Ele(h1 요소)를 click 했을 때 클래스 이름을 추가/제거하는 함수를 정의하기
		만약 h1Ele의 class name이 clickedClass라면, h1Ele.className을 비워 클래스 이름을 제거한다.
		만약 h1Ele의 class name이 clickedClass가 아니라면, 클래스 이름을 추가한다.
		재사용 되는 clicked(raw string)를 변수에 저장하면 에러 발생시 콘솔에서 추적할 수 있다.	*/
    function handleTitleClick() {
			const clickedClass = "clicked";
			if (h1Ele.className === clickedClass) {
				h1Ele.className = "";
			} else {
				h1Ele.className = clickedClass;
			}
    }

//  이벤트 리스너 호출하기------------------------------------------------------------

//  HTML의 h1 태그에서 발생한 이벤트
/*  h1Ele의 click event에 대해서 listen 하는 이벤트 리스너 호출하기
    사용자가 h1Ele을 click하면 handleTitleClick 함수가 동작한다. */
    h1Ele.addEventListener("click", handleTitleClick);