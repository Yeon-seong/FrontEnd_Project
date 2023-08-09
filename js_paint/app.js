/*  HTML 요소 가져오기  */
const canvas = document.querySelector("canvas");


/*  getContext() 메서드 호출  */
const ctx = canvas.getContext("2d");


/*  JS의 캔버스 : 너비(가로)와 높이(세로)는 캔버스의 해상도 설정  */
canvas.width = 700;
canvas.height = 700;


/*  사람 만들기
    canvas arc() 메소드 사용 : 캔버스에서 원 그리기  */

//  색상
ctx.fillStyle = "#0099FF";


//  팔

ctx.fillRect(220, 250, 90, 20);
ctx.fillRect(390, 250, 90, 20);


//  몸통
ctx.fillRect(310, 250, 80, 150);


//  다리
ctx.fillRect(310, 400, 20, 100);
ctx.fillRect(370, 400, 20, 100);


//  머리
ctx.arc(350, 200, 50, 0, 2 * Math.PI);
ctx.fill();


//  눈
ctx.beginPath();
ctx.fillStyle = "#FFFFFF";
ctx.arc(330, 200, 7, 0, 2 * Math.PI);
ctx.arc(370, 200, 7, 0, 2 * Math.PI);
ctx.fill();


// 입
ctx.beginPath();
ctx.arc(350, 220, 10, 0, 1 * Math.PI);
ctx.fill();