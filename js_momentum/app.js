/*	자바스크립트를 사용하는 이유 : HTML과 상호작용하기 위해서.
		1. 자바스크립트가 HTML에 이미 연결되어 있다.
		2. 자바스크립트는 HTML에 접근하고 읽을 수 있게 설정되어 있다.
		3. HTMl의 객체(엘리먼트)들을 자바스크립트를 통해 변경하고, 읽을 수 있다. */


/*	문서(document) 객체 : 우리가 만드는 웹사이트를 의미.
		문서에서 접근할 수 있는 HTML을 가리키는 브라우저의 핵심 객체다.
		document 객체는 콘솔에서 document의 HTML을 보여주고, 작성한 HTML을 가져올 수 있다.
		콘솔(F12)에서 document를 입력하면 브라우저에 이미 정의된 document 객체를 볼 수 있다.
		이는 document가 이미 브라우저에 존재하는 객체(object)이기 때문이다.
		

/*	console.dir 메서드
		document를 호출해 보면 document 안에 많은 객체 속성이 저장되어 있다. */
		console.dir(document);


/*	document.title
		문서의 제목을 나타내는 속성.
		document 객체의 속성 중 document.title에 HTML 파일에 정의한 제목이 쓰여 있다.
		title 항목은 내가 HTML에 정의한 항목이기 때문에
		자바스크립트에서 title을 정의한 적이 없어도
		document가 HTML 코드를 자바스크립트의 관점으로 보여준다.
		자바스크립트에서 HTML document 객체로부터 title을 가져다 쓸 수 있다. */

		
/*	콘솔에 document.title을 호출해 HTML에 적은 title의 값을 가져오기
		자바스크립트는 HTML을 자동적으로 읽어오기에
		HTML 파일에서 title을 변경하면 바뀐 코드로 반영된다. */
		document.title


/*	title 항목을 다른 이름으로 변경하기
		객체(object)에서 속성(properties)을 가져와 속성 값을 바꿀 수 있다.
		document.title = "Hi"를 입력하면 브라우저에 보여지는 타이틀을 Hi로 바꾼다.
		새로고침 하면 title이 원래 제목으로 돌아간다. */
		document.title = "Hi";


/*	document의 title 항목에 새로운 값을 저장하기
		자바스크립트로 HTML을 변경할 수 있다. */
		document.title = "Hello! From JS!";


/*	document.body 항목을 호출하면 HTML 문서의 body 항목만 가져온다.
		자바스크립트에서 HTML의 항목들을 읽어올 수 있다. */
		document.body


/*	document.location 항목을 호출하면 객체(object)를 하나 리턴해준다.
		이 객체는 우리가 어디에 위치하고 있는지 알려준다. */
		document.location