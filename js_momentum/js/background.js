/*  배경 이미지 배열  */
const images = [
  "01_santori.png",
  "02_cappado.png",
  "03_pasabag.png",
  "04_maiden.png",
  "05_sea.png",
  "06_ruby.png",
  "07_rakot.png",
  "08_bloom.png",
  "09_snow.png",
  "10_seoul.png",
];



/*  images 배열에서 랜덤하게 한 가지 요소를 골라내기  
    Math.random()으로 랜덤하게 나온 숫자에 images 배열의 길이
    (images.length) 만큼 곱한 숫자를 Math.floor()로 내림해 정수로 만들기  */
const chosenImage = images[Math.floor(Math.random() * images.length)];

/*  JS에서 HTML 요소 생성하기 : document.createElement 메서드 사용  */
const backImage = document.createElement("img");



/*  backImage의 소스 설정하기 : 이미지를 선택하고 src로 img 폴더 뒤에 추가  */
backImage.src = `img/${chosenImage}`;



/*  backImage 요소를 body 요소 내부에 추가(append)하기 : appendChild() 메서드 사용  */
document.body.appendChild(backImage);