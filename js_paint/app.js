//  ------------------------- 그림판 만들기 -------------------------


/*  HTML 요소 가져오기  */
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");

/*  colorOptions을 유사 객체 배열에서 배열로 생성하기 : Array.from 메서드 사용  */
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);

const ctx = canvas.getContext("2d"); //  getContext() 메서드 호출
const canvas = document.querySelector("canvas");
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");



/*  캔버스의 가로, 세로 길이를 상수로 만들기  */
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT= 1000;


/*  JS의 캔버스 해상도 : 너비(가로)와 높이(세로) 설정하기  */
canvas.width = 1000;
canvas.height = 1000;


/*  사용자가 그림을 그리는지 확인하기  */
let isPainting = false;

/*  사용자가 모드를 바꾸는지 확인하기  */
let isFilling = false;

/*  HTML의 input 초깃값(value)을 5로 주기  */
ctx.lineWidth = lineWidth.value;



/*  마우스를 움직였을 때 함수  */
function onMove(event) {  //  캔버스 위에 마우스를 올리고,
  if(isPainting) {        // isPainting이 true면
    ctx.lineTo(event.offsetX, event.offsetY);  //  사용자의 마우스가 있는 곳으로 브러시를 움직이기
    ctx.stroke();                              //  마우스가 있는 쪽으로 선을 그려 함수를 끝내고,
    return;
  }
  //  마우스를 누르고 움직일 때 사용자가 있던 곳부터 움직이는 곳으로 선을 그리기
  ctx.moveTo(event.offsetX, event.offsetY);
}


/*  마우스를 누르고 있을 때 함수  */
function startPainting() {
  isPainting = true;
}


/*  마우스를 뗐을 때 함수  */
function cancelPainting() {
  isPainting = false;
  ctx.beginPath();    //  사용자가 페인팅을 마치면 새로운 path를 만들기
}


/*  사용자 입력값에 따른 선 굵기 함수  */
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}


/*  사용자 입력값에 따른 색상 함수  */
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}


/*  사용자가 색상을 클릭할 때마다 색상을 바꿔주는 함수  */
function onColorClick(event) {             //  사용자가 해당 색상을 클릭하면
  colorValue = event.target.dataset.color; //  사용자가 선택한 색상으로
  ctx.strokeStyle = colorValue             //  strokeStyle 바꾸기
  ctx.fillStyle = colorValue;              //  fillStyle 바꾸기
  color.value = colorValue;                //  어떤 색상이 클릭되었는지 사용자에게 알려주기
}


/*  사용자가 "modeBtn" 버튼을 누르면 모드를 바꾸는 함수  */
function onModeClick() {
  if(isFilling) {
    isFilling = false;            //  그리기 모드일 때(isFilling이 아닐 때),
    modeBtn.innerText = "채우기";  //  버튼 텍스트를 "채우기"로 바꾸기
  } else {
    isFilling = true;             //  채우기 모드일 때(isFilling 일 때),
    modeBtn.innerText = "그리기";  //  버튼 텍스트를 "그리기"로 바꾸기
  }
}


/*  캔버스를 클릭하면 캔버스를 채우는 함수  */
function onCanvasClick() {      
  if(isFilling) {
    //  isFilling일 때, 캔버스를 클릭(mousedown 후 mouseup)하면
    //  캔버스 크기의 새로운 사각형을 만들고, 해당 색상으로 캔버스 전체를 채우기
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}


/*  캔버스를 초기화하는 함수  */
function onDestroyClick() {     //  초기화 버튼(Destroy)을 클릭하면
  ctx.fillStyle = "white";      //  배경색과 같은 하얀색으로,
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);  //  캔버스 크기만큼의 사각형으로 채우기
}


/*  캔버스 그림을 지우는 함수  */
function onEraserClick() {      //  채우기 모드일 때 삭제 버튼(erase)을 클릭하면
  ctx.strokeStyle = "white";    //  캔버스의 선 스타일을 하얀색으로 하고,
  isFilling = false;            //  그리기 모드로 다시 바꾸고,
  modeBtn.innerText = "채우기";  //  버튼 텍스트를 '채우기'로 바꾸기
}


/*  파일을 삽입하는 함수  */
function onFileChange(event) {
  const file = event.target.files[0];    //  파일을 선택하면 업로드한 파일을 가져오기
  const url = URL.createObjectURL(file); //  브라우저 메모리에서 해당 파일을 가리키는 URL 요청
  const image = new Image();
  image.src = url;                       //  브라우저의 메모리를 가리키는 URL 넣기
  image.onload = function() {            //  0,0 위치에 너비와 높이를 캔버스만큼 이미지 그리기
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
    fileInput.value = null;              //  이미지를 그릴 때 file input 비우기
  };
}



/*  마우스 이벤트 리스너  */
canvas.addEventListener("mousemove", onMove);           //  마우스를 움직이면 onMove 함수 호출
canvas.addEventListener("mousedown", startPainting);    //  마우스를 누르고 있으면 startPainting 함수 호출
canvas.addEventListener("mouseup", cancelPainting);     //  마우스를 떼면 cancelPainting 함수 호출
canvas.addEventListener("mouseleave", cancelPainting);  //  마우스가 캔버스를 떠나면 cancelPainting 함수 호출



/*  사용자가 입력값을 바꿀 때, 선 굵기를 바꾸는 onLineWidthChange 함수를 호출하는 이벤트 리스너  */
lineWidth.addEventListener("change", onLineWidthChange);
/*  사용자가 입력값을 바꿀 때, 선 색상을 바꾸는 onColorChange 함수를 호출하는 이벤트 리스너  */
color.addEventListener("change", onColorChange);
/*  사용자가 이미지를 onFileChange에 넣었을 때, onFileChange 함수를 호출하는 이벤트 리스너  */
fileInput.addEventListener("change", onFileChange);



/*  colorOptions에 있는 각각의 색상을 클릭하면 onColorClick 함수를 호출하는 이벤트 리스너  */
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
/*  채우기 모드일 때 캔버스를 클릭하면 onCanvasClick 함수를 호출하는 이벤트 리스너  */
canvas.addEventListener("click", onCanvasClick);



/*  모드 버튼을 클릭하면 onModeClick 함수를 호출하는 이벤트 리스너  */
modeBtn.addEventListener("click", onModeClick);
/*  초기화 버튼을 클릭하면 Destroy 함수를 호출하는 이벤트 리스너  */
destroyBtn.addEventListener("click", onDestroyClick);
/*  삭제 버튼을 클릭하면 onEraserClick 함수를 호출하는 이벤트 리스너  */
eraserBtn.addEventListener("click", onEraserClick);