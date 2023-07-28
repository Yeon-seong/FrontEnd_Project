/*  HTML 요소 가져오기  */
const clock = document.querySelector("h2#clock"); // h2와 clock id를 함께 가져오기


/*  new Date 객체로 현재 날짜, 시간, 분, 초에 대한 정보를 가져와 새로운 Date 객체를 만든다.  */
function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


/*  웹사이트가 load 되자마자 getClock() 함수를 즉시 호출해 실행하고,
    매 1초(1000ms)마다 getClock() 함수가 다시 실행되도록 만들기  */
getClock();
setInterval(getClock, 1000);