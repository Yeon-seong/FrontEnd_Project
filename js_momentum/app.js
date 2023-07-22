/*	자바스크립트로 HTML 요소 가져오기



/*	자바스크립트로 id="title"을 가진 <h1>태그를 가져오기	*/
		const title = document.getElementById("title");


/*	<h1> title 하나에서 가져올 수 있는 속성들을 확인하기 : 'h1#title'을 클릭	*/
		console.dir(title);

		
/*	자바스크립트에서 html 요소 변경 : innerText 항목을 수정해 h1 태그 내용을 변경하기
		<h1>태그에 들어가는 텍스트를 Grab me!에서 "Got you!로 수정하기
		<h1>태그에 id를 추가하고, title 요소를 getElementById 함수로 가져왔기에 가능하다. */
		title.innerText = "Got you!";


		// HTML의 id인 title을 콘솔에 표시
		console.log(title.id);


		// HTML의 class인 TITLE을 콘솔에 표시
		console.log(title.className);