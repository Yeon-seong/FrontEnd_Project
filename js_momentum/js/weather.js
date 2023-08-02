/*  사용자 위치(geolocation) 알아내기  */
function onGeoOk(position) {
  const lat = position.coords.latitude;		// 위도(latitude)
  const lng = position.coords.longitude;	// 경도(longitude)
  console.log("당신은 잘 지내고 있군요!", lat, lng);
}
function onGeoError() {
  alert("날씨 위치를 찾을 수 없습니다.");
}

/*  위치 받는 데 성공하면 onGeoOk 함수 실행, 실패하면 onGeoError 함수 실행  */
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);