//  ------------------------- 그림판 만들기 -------------------------


/*  HTML 요소 가져오기  */
const canvas = document.querySelector("canvas");
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");


/*  Array.from 메서드로 colorOptions을 유사 객체 배열에서 배열로 생성  */
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);


/*  getContext() 메서드 호출  */
const ctx = canvas.getContext("2d");


/*  캔버스의 가로, 세로 길이를 상수로 만들기  */
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT= 1000;


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
    isPainting이 false면 브러시를 마우스가 있는 쪽으로 움직이기	*/
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


/*  color를 바꿔주는 함수
    사용자가 해당 color를 클릭할 때마다 호출,
    strokeStyle과 fillStyle을 한 번에 바꾸기  */
function onColorClick(event) {
  colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue
  ctx.fillStyle = colorValue;
  color.value = colorValue; // 사용자에게 어떤 색상이 클릭되었는지 알려주기 위해 추가
}


/*  모드를 바꾸는 함수
    isFilling이 아닐 때 버튼을 누르면 채우기 모드로 바꾸고, 버튼 텍스트를 '그리기'로 바꾸기  */
function onModeClick() {
  if(isFilling) {
    isFilling = false;
    modeBtn.innerText = "채우기";
  } else {
    isFilling = true;
    modeBtn.innerText = "그리기";
  }
}


/*  캔버스를 채우는 함수
    isFilling일 때, 캔버스를 클릭(mousedown 후 mouseup)하면
    캔버스 크기의 새로운 사각형을 만들고, 해당 색상으로 캔버스 전체를 채우기  */
function onCanvasClick() {
  if(isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}


/*  캔버스를 초기화하는 함수
    초기화 버튼(Destroy)을 클릭하면 캔버스를 하얀색 사각형으로 채워, 백지 상태로 만들기  */
function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}


/*  배경색과 같은 색으로 페인팅해서 그림을 지우는 함수
    채우기 모드(Fill)일 때 삭제(erase)를 클릭하면
    그리기 모드로 다시 바꾸고, 버튼 텍스트를 '채우기'로 바꾸기  */
function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "채우기";
}


/*  파일 삽입 이벤트 리스너 : 사용자가 어떤 이미지를 선택했는지 확인하는 함수 호출  */
function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);	// 브라우저의 메모리에서 해당 파일의 URL 얻어오기
  console.log(url);
}



/*  마우스 이벤트 리스너  */
canvas.addEventListener("mousemove", onMove);           // 마우스를 움직이면 onMove 함수 호출
canvas.addEventListener("mousedown", startPainting);    // 마우스를 누르고 있으면 startPainting 함수 호출
canvas.addEventListener("mouseup", cancelPainting);     // 마우스를 떼면 cancelPainting 함수 호출
canvas.addEventListener("mouseleave", cancelPainting);  // 마우스가 캔버스를 떠나면 cancelPainting 함수 호출



/*  선 굵기 이벤트 리스너 : 사용자가 입력 값을 바꿀 때 선 굵기를 바꾸는 함수 호출  */
lineWidth.addEventListener("change", onLineWidthChange);

/*  선 색상 이벤트 리스너 : 사용자가 입력 값을 바꿀 때 선 색상을 바꾸는 함수 호출  */
color.addEventListener("change", onColorChange);

/*  이미지 파일을 onFileChange에 넣었을 때 일어나는 일 확인  */
fileInput.addEventListener("change", onFileChange);



/*  각 color마다 이벤트 리스너 추가  */
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
/*  채우기 이벤트 리스너 : 채우기 모드일 때 캔버스를 클릭하면 onCanvasClick 함수 호출  */
canvas.addEventListener("click", onCanvasClick);



/*  모드 버튼 이벤트 리스너 : 모드 버튼을 클릭하면 onModeClick 함수 호출  */
modeBtn.addEventListener("click", onModeClick);

/*  초기화 버튼 이벤트 리스너 : 초기화 버튼을 클릭하면 Destroy 함수 호출  */
destroyBtn.addEventListener("click", onDestroyClick);

/*  삭제 버튼 이벤트 리스너 : 삭제 버튼을 클릭하면 onEraserClick 함수 호출  */
eraserBtn.addEventListener("click", onEraserClick);