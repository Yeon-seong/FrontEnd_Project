/*  HTML 요소 가져오기  */
const canvas = document.querySelector("canvas");


/*  getContext() 메서드 호출  */
const ctx = canvas.getContext("2d");


/*  JS의 캔버스 : 너비(가로)와 높이(세로)는 캔버스의 해상도 설정  */
canvas.width = 1000;
canvas.height = 1000;



/*  그림판 만들기
    캔버스 위에 마우스를 올리면 사용자의 마우스가 있는 곳으로 브러시를 움직이기
    마우스를 누르고 움직일 때 사용자가 있던 곳부터 움직이는 곳으로 선을 그리기  */

ctx.lineWidth = 2;      // 선 굵기
let isPainting = false; // true/false로 사용자가 그림을 그리는지 확인


/*  마우스를 움직였을 때(onMove)
    isPainting이 true면 마우스가 있는 쪽으로 선을 그려 함수를 끝내고,
    isPainting이 false면 브러시를 마우스가 있는 쪽으로 움직인다.	*/
function onMove(event) {
  if(isPainting) {		
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
};


/*  마우스를 누르고 있을 때(startPainting)  */
function startPainting(event) {
  isPainting = true;
};


/*  마우스를 뗐을 때(cancelPainting)  */
function cancelPainting(event) {
  isPainting = false;
};


/*  마우스 이벤트 추가  */
canvas.addEventListener("mousemove", onMove);           // 마우스를 움직이면 onMove 함수 호출
canvas.addEventListener("mousedown", startPainting);    // 마우스를 누르고 있으면 startPainting 함수 호출
canvas.addEventListener("mouseup", cancelPainting);     // 마우스를 떼면 cancelPainting 함수 호출
canvas.addEventListener("mouseleave", cancelPainting);  // 마우스가 캔버스를 떠나면 cancelPainting 함수 호출