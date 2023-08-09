/*  HTML 요소 가져오기  */
const canvas = document.querySelector("canvas");


/*  getContext() 메서드 호출  */
const ctx = canvas.getContext("2d");


/*  JS의 캔버스 : 너비(가로)와 높이(세로)는 캔버스의 해상도 설정  */
canvas.width = 700;
canvas.height = 700;
ctx.lineWidth = 2;


/*	그림판 프로토타입 만들기
		마우스로 보드를 클릭할 때마다 선 그리기	*/

function onClick(event) {
	ctx.moveTo(0, 0);
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();
}

canvas.addEventListener("click", onClick)