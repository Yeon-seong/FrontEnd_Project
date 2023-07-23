/*  이벤트 리스너(event listener)로 웹사이트에서 클릭 이벤트(click event) 감지하기
    HTML 요소를 가져와서, addEventListener 함수를 실행시킨다.
    사용자가 요소에 해당 이벤트를 했을 때 어떤 함수를 실행할지 정해야 한다.
    자바스크립트에 호출할 함수(handleTitleClick)를 전달하고,
    이벤트가 발생할 때 실행할 함수의 실행버튼을 눌러선 안된다.  */
//  --------------------------------------------------------------------------------



/*  1. HTML 요소를 자바스크립트로 가지고 오기
    class hello를 가진 div 내부의 첫 번째 노드(first-child)인 h1을 찾아오기 */
    const title = document.querySelector("div.hello:first-child h1");



/*  기본적으로 객체로 표시한 요소를 보는 방법
    요소의 내부를 보고 싶을 때 사용, 내부의 항목들은 전부 자바스크립트 객체다. */
    console.dir(title);



/*  3. 사용자가 title을 click을 했을 때 title의 글자색을 바꾸는 함수를 정의하기
    click 이벤트가 발생할 때 실행할 함수를 addEventListener 함수의 두 번째 인수로 전달하기 */
    function handleTitleClick() {
      title.style.color = "#FBDB48";
    }



/*  2. title에 click event에 대해서 listen하는 이벤트 리스너를 호출하기
    사용자가 title을 click하면 handleTitleClick 함수가 동작한다.
    이때 자바스크립트가 대신 handleTitleClick 함수 실행 버튼을 누른다.  */
    title.addEventListener("click", handleTitleClick);