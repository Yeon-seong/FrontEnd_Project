/*  HTML 요소 가져오기  */
const canvas = document.querySelector("canvas");


/*  getContext() 메서드 호출  */
const ctx = canvas.getContext("2d");


/*  JS의 캔버스 : 너비(가로)와 높이(세로)는 캔버스의 해상도 설정  */
canvas.width = 600;
canvas.height = 600;


/*  캔버스로 집 만들기  */

//  벽
ctx.fillStyle = "#30A2FF";
ctx.fillRect(150, 250, 50, 200);   // 왼쪽 벽 x: 150, y: 250, 너비: 50, 높이: 200
ctx.fillRect(400, 250, 50, 200);   // 오른쪽 벽 x: 400, y: 200, 너비: 50, 높이: 200
ctx.lineWidth = 5;


//  문
ctx.fillRect(250, 350, 100, 100);  // x: 250, y: 350, 너비: 100, 높이: 100


//  천장
ctx.fillRect(200, 250, 200, 50)    // x: 200, y: 250, 너비: 200, 높이: 50


//  지붕
ctx.moveTo(150, 250);
ctx.lineTo(300, 130);
ctx.lineTo(450, 250);
ctx.fill();