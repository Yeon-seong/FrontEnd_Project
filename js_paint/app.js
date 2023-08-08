/*  HTML 요소 가져오기  */
const canvas = document.querySelector("canvas");


/*  getContext() 메서드 호출  */
const ctx = canvas.getContext("2d");


/*  JS의 캔버스 : 너비(가로)와 높이(세로)는 캔버스의 해상도 설정  */
canvas.width = 600;
canvas.height = 600;


/*  shortcut function rect를 사용하지 않고, 선으로 정사각형 만들기
    moveTo 함수, lineTo 함수를 조합해서 사용하기  */

ctx.moveTo(50, 50);     // 기본 (0, 0)인 브러시 좌표를 x:50, y:50으로 이동
ctx.lineTo(150, 50);    // x축 50에서 150으로 선을 그림, y축은 50으로 고정
ctx.lineTo(150, 150);   // y축 50에서 150으로 선을 그림, x축은 150으로 고정
ctx.lineTo(50, 150);    // x축 150에서 50으로 선을 그림, y축은 150으로 고정
ctx.lineTo(50, 50);     // y축 150에서 50으로 선을 그림, x축은 50으로 고정
ctx.stroke();
ctx.fillStyle = "#FFD5E5";
ctx.fill();