/*  HTML 요소 가져오기  */
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "66f43e92393509a81ee850a9885aafbe";



/*  사용자 위치(geolocation)와 날씨(weather) 알아내기  */
function onGeoOk(position) {
  const lat = position.coords.latitude;		// 위도(latitude)
  const lon = position.coords.longitude;	// 경도(longitude)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      city.innerText = data.name; // 사용자 위치의 도시 이름
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;  // 날씨이름 / 온도
    });
}
function onGeoError() {
  alert("날씨 위치를 찾을 수 없습니다.");
}



/*  위치 받는 데 성공하면 onGeoOk 함수 실행, 실패하면 onGeoError 함수 실행  */
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);