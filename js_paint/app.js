/*  HTML 요소 가져오기  */
const canvas = document.querySelector("canvas");


/*  getContext() 메서드 호출  */
const ctx = canvas.getContext("2d");


/*  JS의 캔버스 : 너비(가로)와 높이(세로)는 캔버스의 해상도 설정  */
canvas.width = 600;
canvas.height = 600;



/*  canvas 경로를 나누어 정사각형 만들기
    beginPath() 메서드, fillStyle 메서드 사용  */


// 첫 번째 줄 : 연분홍
ctx.rect(50, 50, 100, 100);
ctx.rect(250, 50, 100, 100);
ctx.rect(450, 50, 100, 100);
ctx.fillStyle = "#FFD5E5";  
ctx.fill();


// 두 번째 줄 : 연노랑
ctx.beginPath();              // beginPath() : 새 경로 만들기
ctx.rect(150, 150, 100, 100);
ctx.rect(350, 150, 100, 100);
ctx.fillStyle = "#FFFFDD";    // fillStyle : 도형 색상 채우기
ctx.fill();


// 세 번째 줄 : 연청록
ctx.beginPath();
ctx.rect(50, 250, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.rect(450, 250, 100, 100); 
ctx.fillStyle = "#A0FFE6";
ctx.fill();


// 네 번째 줄 : 연하늘
ctx.beginPath();
ctx.rect(150, 350, 100, 100);
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "#AEE2FF";
ctx.fill();


// 다섯 번째 줄 : 연보라
ctx.beginPath();
ctx.rect(50, 450, 100, 100);
ctx.rect(250, 450, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "#C4B0FF";
ctx.fill();