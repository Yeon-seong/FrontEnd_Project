/*  HTML 요소 가져오기  */
const canvas = document.querySelector("canvas");


/*  getContext() 메서드 호출  */
const ctx = canvas.getContext("2d");


/*  JS의 캔버스 : 너비(가로)와 높이(세로)는 캔버스의 해상도 설정  */
canvas.width = 2000;
canvas.height = 2000;


/*  정사각형 만들기 : rect 함수 사용  */
ctx.rect(50, 50, 100, 100);   // 왼쪽 위
ctx.rect(250, 50, 100, 100);  // 오른쪽 위
ctx.rect(150, 150, 100, 100); // 가운데
ctx.rect(50, 250, 100, 100);  // 왼쪽 아래
ctx.rect(250, 250, 100, 100); // 오른쪽 아래
ctx.fill();