/*  이벤트 리스너(event listener)를 사용해 이벤트가 발생하면 감지하고 반응하기
    클릭 이벤트(click event)
    마우스 엔터 이벤트(mouse enter event)
    마우스 리브 이벤트(mouse leave event)
    윈도우 리사이즈 이벤트(window resize event)
    클립보드 복사 이벤트(clipboard copy event)
    와이파이 온라인/오프라인 이벤트(connection wifi online/offline event)  */    
//  --------------------------------------------------------------------------------


/*  HTML 요소 h1Ele(h1 요소의 약자)를 자바스크립트로 가지고 오기
    class hello를 가진 div 내부의 첫 번째 노드(first-child)인 h1을 찾아오기 */
    const h1Ele = document.querySelector("div.hello:first-child h1");


/*  기본적으로 객체로 표시한 요소를 보는 방법
    요소의 내부를 보고 싶을 때 사용, 내부의 항목들은 전부 자바스크립트 객체다. */
    console.dir(h1Ele);


//  함수 정의하기--------------------------------------------------------------------


/*  사용자가 h1Ele 요소를 click 했을 때 h1Ele의 글자 색을 바꾸는 함수를 정의하기
    click 이벤트가 발생할 때 실행할 함수를 addEventListener 함수의 두 번째 인수로 전달하기  */
    function handleTitleClick() {
        h1Ele.style.color = "#FBDB48";
    }

/*  사용자가 마우스를 h1Ele 요소에 올렸을 때 반응해 함수를 정의하기  
    마우스가 h1Ele 요소 위에 올라왔을 때 반응해 h1Ele 내용이 바뀐다. */
    function handleMouseEnter() {
        h1Ele.innerText = "마우스가 타이틀에 올라와 있습니다.";
    }

/*  사용자가 마우스를 h1Ele 요소 안에서 바깥으로 옮겼을 때 반응하는 함수를 정의하기
    마우스가 h1Ele 요소 위에서 벗어났을 때 hh1 내용이 바뀐다. */
    function handleMouseLeave() {
        h1Ele.innerText = "마우스가 타이틀에서 내려갔습니다.";
    }



/*  window의 브라우저 화면 크기가 바뀌게(resize) 될 때 반응하는 함수를 정의하기
    브라우저 창의 크기가 변화하면 handleMouseLeave 함수가 body의 backgroundColor를 변경한다. */
    function handleWindowResize() {
        document.body.style.backgroundColor = "tomato";
    }

/*  사용자가 복사(copy)를 하면 alert 창이 뜨며 반응하는 함수를 정의하기
    ctrl+c를 누르거나 마우스 우클릭으로 복사하기를 눌러도 똑같이 이벤트가 일어난다. */
    function handleWindowCopy() {
        alert("복사했습니다!");
    }

/*  브라우저가 오프라인이면 alert 창이 뜨며 반응하는 함수를 정의하기  */
    function handleWindowOffline() {
        alert("오프라인 상태입니다. 온라인으로 전환하려면 와이파이를 켜주세요.");
    }

/*  브라우저가 온라인이면 alert 창이 뜨며 반응하는 함수를 정의하기  */
    function handleWindowOnline() {
        alert("온라인 상태입니다.");
    }

//  이벤트 리스너 호출하기------------------------------------------------------------


//  HTML의 h1 태그에서 발생한 이벤트

/*  h1Ele의 click event에 대해서 listen 하는 이벤트 리스너 호출하기
    사용자가 h1Ele을 click하면 handleTitleClick 함수가 동작한다. */
    h1Ele.addEventListener("click", handleTitleClick);

/*  h1Ele의 mouse enter event에 대해서 listen 하는 이벤트 리스너 호출하기
    사용자가 마우스를 h1Ele에 올리면 handleMouseEnter 함수가 동작한다. */
    h1Ele.addEventListener("mouseenter", handleMouseEnter);

/*  h1Ele의 mouse leave event에 대해서 listen 하는 이벤트 리스너 호출하기
    사용자가 마우스를 title 밖으로 내보내면 handleMouseLeave 함수가 동작한다. */
    h1Ele.addEventListener("mouseleave", handleMouseLeave);



//  window에서 발생한 이벤트

/*  window의 resize event를 listen 하는 이벤트 리스너 호출하기
    브라우저 창 크기가 변화하면 body의 배경색을 변경하는 handleMouseLeave 함수가 동작한다.
    addEventListener 함수나, window.onresize 함수를 통해 이벤트를 지정할 수 있다. */
    window.addEventListener("resize", handleWindowResize);

/*  window의 copy event를 listen 하는 이벤트 리스너 호출하기
    사용자가 브라우저에서 복사(copy) 기능을 사용하면 handleWindowCopy 함수가 동작한다.  */
    window.addEventListener("copy", handleWindowCopy);

/*  window의 offline event를 listen 하는 이벤트 리스너 호출하기
    브라우저의 와이파이가 오프라인이면 handleWindowoffline 함수가 동작한다.  */
    window.addEventListener("offline", handleWindowOffline);

/*  window의 online event를 listen 하는 이벤트 리스너 호출하기
    브라우저의 와이파이가 온라인이면 handleWindowonline 함수가 동작한다.  */
    window.addEventListener("online", handleWindowOnline);