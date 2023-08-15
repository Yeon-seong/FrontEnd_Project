//  ------------------------- 그림판 만들기 -------------------------


/*  HTML 요소 가져오기  */
const canvas = document.querySelector("canvas");
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const modeBtn = document.getElementById("mode-btn");


/*  Array.from 메서드로 colorOptions을 유사 객체 배열에서 배열로 생성  */
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);


/*  getContext() 메서드 호출  */
const ctx = canvas.getContext("2d");


/*  JS의 캔버스 : 너비(가로)와 높이(세로)는 캔버스의 해상도 설정  */
canvas.width = 1000;
canvas.height = 1000;


/*  true/false로 사용자가 그림을 그리는지 확인하기  */
let isPainting = false;


/*  true/false로 사용자가 모드를 바꾸는지 확인하기  */
let isFilling = false;


/*  HTML의 input 초기 값(value)을 5로 주기  */
ctx.lineWidth = lineWidth.value;



/*  마우스를 움직였을 때(onMove)
    캔버스 위에 마우스를 올리면 사용자의 마우스가 있는 곳으로 브러시를 움직이기
    마우스를 누르고 움직일 때 사용자가 있던 곳부터 움직이는 곳으로 선을 그리기
    isPainting이 true면 마우스가 있는 쪽으로 선을 그려 함수를 끝내고,
    isPainting이 false면 브러시를 마우스가 있는 쪽으로 움직인다.	*/
function onMove(event) {
  if(isPainting) {		
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}


/*  마우스를 누르고 있을 때(startPainting)  */
function startPainting() {
  isPainting = true;
}


/*  마우스를 뗐을 때(cancelPainting)
    사용자가 페인팅을 마치면 새로운 path를 만들기  */
function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}


/*  사용자 입력 값에 따른 선 굵기  */
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}


/*  사용자 입력 값에 따른 선 색상  */
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}


/*  strokeStyle과 fillStyle을 한 번에 바꿔, color를 바꿔주는 함수
    사용자가 해당 color를 클릭할 때마다 호출  */
function onColorClick(event) {
  colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue
  ctx.fillStyle = colorValue;
  color.value = colorValue; // 사용자에게 어떤 색상이 클릭되었는지 알려주기 위해 추가
}


/*  모드를 바꾸는 함수
    만약 isFilling이 true면 false로 바꾸고, 모드 버튼의 innerText를 "Fill"로 바꾸기
    isFilling이 false면 true로 바꾸고, 모드 버튼의 innerText를 "Draw"로 바꾸기  */
function onModeClick() {
  if(isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}


/*  마우스 이벤트 리스너  */
canvas.addEventListener("mousemove", onMove);           // 마우스를 움직이면 onMove 함수 호출
canvas.addEventListener("mousedown", startPainting);    // 마우스를 누르고 있으면 startPainting 함수 호출
canvas.addEventListener("mouseup", cancelPainting);     // 마우스를 떼면 cancelPainting 함수 호출
canvas.addEventListener("mouseleave", cancelPainting);  // 마우스가 캔버스를 떠나면 cancelPainting 함수 호출


/*  선 굵기 이벤트 리스너  */
lineWidth.addEventListener("change", onLineWidthChange);// 사용자가 입력 값을 바꿀 때 선 굵기 바꾸기


/*  선 색상 이벤트 리스너  */
color.addEventListener("change", onColorChange);


/*  각 color마다 이벤트 리스너 추가  */
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));


/*  모드 버튼 이벤트 리스너  */
modeBtn.addEventListener("click", onModeClick);