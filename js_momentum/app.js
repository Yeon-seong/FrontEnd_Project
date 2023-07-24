/*  이벤트 리스너(event listener) 사용하기
    클릭 이벤트(click event)
    마우스 엔터 이벤트(mouse enter event)
    마우스 리브 이벤트(mouse leave event)  */    
//  --------------------------------------------------------------------------------



/*  HTML 요소를 자바스크립트로 가지고 오기
    class hello를 가진 div 내부의 첫 번째 노드(first-child)인 h1을 찾아오기 */
    const title = document.querySelector("div.hello:first-child h1");


/*  기본적으로 객체로 표시한 요소를 보는 방법
    요소의 내부를 보고 싶을 때 사용, 내부의 항목들은 전부 자바스크립트 객체다. */
    console.dir(title);



/*  사용자가 title 요소를 click 했을 때 title의 글자 색을 바꾸는 함수를 정의하기
    click 이벤트가 발생할 때 실행할 함수를 addEventListener 함수의 두 번째 인수로 전달하기  */
    function handleTitleClick() {
        title.style.color = "#FBDB48";
    }

/*  사용자가 마우스를 title 요소에 올렸을 때 반응해 함수를 정의하기  
    마우스가 title 요소 위에 올라왔을 때 반응해 title 내용이 바뀐다. */
    function handleMouseEnter() {
        title.innerText = "마우스가 타이틀에 올라와 있습니다.";
    }

/*  사용자가 마우스를 title 요소 안에서 바깥으로 옮겼을 때 반응하는 함수를 정의하기
    마우스가 title 요소 위에서 벗어났을 때 title 내용이 바뀐다. */
    function handleMouseLeave() {
        title.innerText = "마우스가 타이틀에서 내려갔습니다.";
    }


//  (on 이벤트 이름) oneventname 속성에 이벤트 리스너를 할당해 이벤트를 사용하기
/*  title의 click event에 대해서 listen 하는 이벤트 리스너 호출하기
    사용자가 title을 click하면 handleTitleClick 함수가 동작한다.  */
    title.onclick = (handleTitleClick);

/*  title의 mouse enter event에 대해서 listen하는 이벤트 리스너 호출하기
    사용자가 마우스를 title에 올리면 handleMouseEnter 함수가 동작한다.  */
    title.onmouseenter = (handleMouseEnter);

/*  title의 mouse leave event에 대해서 listen 하는 이벤트 리스너 호출하기
    사용자가 마우스를 title 밖으로 내보내면 handleMouseLeave 함수가 동작한다.  */
    title.onmouseleave = (handleMouseLeave);