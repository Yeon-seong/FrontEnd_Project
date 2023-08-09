/*  HTML 요소 가져오기  */
const canvas = document.querySelector("canvas");


/*  getContext() 메서드 호출  */
const ctx = canvas.getContext("2d");


/*  JS의 캔버스 : 너비(가로)와 높이(세로)는 캔버스의 해상도 설정  */
canvas.width = 700;
canvas.height = 700;
ctx.lineWidth = 2;


/*	그림판 프로토타입 만들기
		선을 그릴 때마다 색을 다르게 만들기	*/

		// 색 배열
		const colors = [
			"#ff3838",
			"#ffb8b8",
			"#c56cf0",
			"#ff9f1a",
			"#fff200",
			"#32ff7e",
			"#7efff5",
			"#18dcff",
			"#7d5fff",
		];
		

		/*	무작위로 색을 하나 가져오기
				Math.random(), Math.floor() 사용	*/
		function onClick(event) {
			ctx.beginPath();
			ctx.moveTo(350, 350);
			const color = colors[Math.floor(Math.random() * colors.length)];
		
			ctx.strokeStyle = color;
			ctx.lineTo(event.offsetX, event.offsetY);
			ctx.stroke();
		}
		
		canvas.addEventListener("mousemove", onClick)