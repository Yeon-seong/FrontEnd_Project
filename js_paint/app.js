// ------------------------- 그림판 만들기 -------------------------


/*  HTML 요소 가져오기  */
const saveBtn = document.getElementById("save-btn");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const eraserBtn = document.getElementById("eraser-btn");
const destroyBtn = document.getElementById("destroy-btn");
const modeBtn = document.getElementById("mode-btn");

/*  colorOptions을 유사 객체 배열에서 배열로 생성하기 : Array.from 메서드 사용  */
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);

const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");



/*  캔버스의 가로, 세로 길이를 상수로 만들기  */
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT= 800;

/*  JS의 캔버스 해상도 크기 : 너비(가로)와 높이(세로) 설정하기  */
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

/*  HTML의 input 초깃값(value)을 5로 주기  */
ctx.lineWidth = lineWidth.value;

/*  선 끝 부분의 스타일을 둥글게 지정하기  */
ctx.lineCap="round";

/*  사용자가 그림을 그리는지 true/false로 확인하기  */
let isPainting = false;

/*  사용자가 모드를 바꾸는지 true/false로 확인하기  */
let isFilling = false;



// ------------------------- 함수 -------------------------


/*  마우스를 움직였을 때 함수
    isPainting이 true면 사용자의 마우스가 있는 곳으로
    브러시를 움직이고(lineTo), 선을 그려(stroke) 함수를 끝내기 */
function onMove(event) {
  if(isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);  
    ctx.stroke(); 
    return;
  }
  //  마우스를 누르고 움직일 때, 사용자가 있던 곳부터 움직이는 곳으로 선을 그리기
  ctx.moveTo(event.offsetX, event.offsetY);
}



/*  마우스를 누르고 있을 때 함수  */
function startPainting() {
  isPainting = true;
}



/*  마우스를 뗐을 때 함수
    사용자가 페인팅을 마치면 새로운 path 만들기  */
function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
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



/*  사용자가 색상을 클릭할 때마다 색상을 바꿔주는 함수
    해당 색상을 클릭하면 사용자가 선택한 색상으로 strokeStyle과
    fillStyle을 바꾸고, 어떤 색상이 클릭되었는지 사용자에게 알려주기  */
function onColorClick(event) {
  colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}



/*  사용자가 "modeBtn" 버튼을 누르면 모드를 바꾸는 함수
    그리기 모드일 때(isFilling이 아닐 때)는 버튼 텍스트를 "채우기"로 바꾸고,
    채우기 모드일 때(isFilling 일 때)는 버튼 텍스트를 "그리기"로 바꾸기  */
function onModeClick() {
  if(isFilling) {
    isFilling = false;  
    modeBtn.innerText = "채우기🧺";
  } else {
    isFilling = true;
    modeBtn.innerText = "그리기🎨";
  }
}



/*  캔버스를 클릭하면 캔버스를 채우는 함수
    isFilling일 때, 캔버스를 클릭하면
    캔버스 크기의 새로운 사각형을 만들고, 해당 색상으로 캔버스 전체를 채우기  */
function onCanvasClick() {      
  if(isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}



/*  캔버스를 초기화하는 함수
    초기화 버튼을 클릭하면 하얀색 사각형으로 캔버스 크기만큼 채우기  */
function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}



/*  캔버스 그림을 삭제해 지우는 함수
    채우기 모드일 때 삭제 버튼을 클릭하면 캔버스의 선 스타일을 하얀색으로 하고,
    그리기 모드로 다시 바꾸고, 버튼 텍스트를 '채우기'로 바꾸기  */
function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "채우기";
}



/*  사용자가 선택한 파일을 가져오는 함수  */
function onFileChange(event) {
  const file = event.target.files[0];     //  파일을 선택하면 업로드한 파일 가져오기
  const url = URL.createObjectURL(file);  //  브라우저의 메모리에게 해당 파일 URL 요청
  const image = new Image();              //  이미지 파일 생성
  image.src = url;                        //  브라우저의 메모리를 가리키는 URL 넣기
  
  /*  이미지를 그리는 함수 실행하기
      이미지가 로드되었을 때, 0,0 위치에 캔버스의 크기(너비, 높이)만큼
      이미지를 그릴 때 file input을 비워, '선택한 파일 없음'으로 표시하기  */
  image.onload = function() {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
    fileInput.value = null;
  };
}



/*  캔버스를 더블 클릭할 때 그 위치에 텍스트를 그리는 함수  */
function onDoubleClick(event) {
  const text = textInput.value;   //  textInut에서 값을 불러오기
  if(text !== "") {               //  텍스트 값이 비어있지 않다면
    ctx.save();                   //  현재 ctx 캔버스의 상태를 저장
    ctx.lineWidth = 1;            //  텍스트가 잘 보이도록 ctx의 선 굵기를 변경.
    ctx.font = "60px sans-serif"; //  ctx의 폰트 크기와 스타일 변경
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();                //  이전에 저장한 상태를 불러오기
  }
}



/*  캔버스 안에 있는 이미지를 저장하는 함수  */
function onSaveClick() {
  const url = canvas.toDataURL();       //  캔버스에 그린 그림 데이터를 URL로 변환하기
  const a = document.createElement("a");//  a 태그를 생성해 가짜 링크를 만들기
  a.href = url;                         //  링크의 href는 그림 URL로 설정하기
  a.download = "내그림.png";            //  '내그림'이라는 파일명으로 저장 설정하기
  a.click();                            //  이미저 저장을 클릭하면 다운로드 창 띄우기
}



// ------------------------- 이벤트 리스너 -------------------------


//  마우스를 움직이면 onMove 함수 호출
canvas.addEventListener("mousemove", onMove);

//  마우스를 누르고 있으면 startPainting 함수 호출
canvas.addEventListener("mousedown", startPainting);

//  마우스를 떼면 cancelPainting 함수 호출
canvas.addEventListener("mouseup", cancelPainting);

//  마우스가 캔버스를 떠나면 cancelPainting 함수 호출
canvas.addEventListener("mouseleave", cancelPainting);

//  마우스로 더블 클릭하면 onDoubleClick 함수 호출
canvas.addEventListener("dblclick", onDoubleClick);



//  사용자가 입력값을 바꿀 때, 선 굵기를 바꾸는 onLineWidthChange 함수 호출
lineWidth.addEventListener("change", onLineWidthChange);

//  사용자가 입력값을 바꿀 때, 선 색상을 바꾸는 onColorChange 함수 호출
color.addEventListener("change", onColorChange);

//  사용자가 이미지를 onFileChange에 넣었을 때, onFileChange 함수 호출
fileInput.addEventListener("change", onFileChange);



//  colorOptions에 있는 각각의 색상을 클릭하면 onColorClick 함수 호출
colorOptions.forEach((color) => 
color.addEventListener("click", onColorClick));

//  채우기 모드일 때 캔버스를 클릭하면 onCanvasClick 함수 호출
canvas.addEventListener("click", onCanvasClick);



//  모드 버튼을 클릭하면 onModeClick 함수 호출
modeBtn.addEventListener("click", onModeClick);

//  초기화 버튼을 클릭하면 Destroy 함수 호출
destroyBtn.addEventListener("click", onDestroyClick);

//  삭제 버튼을 클릭하면 onEraserClick 함수 호출
eraserBtn.addEventListener("click", onEraserClick);

//  저장 버튼을 클릭하면 onSaveClick 함수 호출
saveBtn.addEventListener("click", onSaveClick);