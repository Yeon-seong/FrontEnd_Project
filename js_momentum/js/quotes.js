/*  작가와 명언 10개를 인용한 배열  */
const quotes = [
  {
    quote: "준비하지 않은 자는 기회가 와도 소용없다.",
    author: "알렉시스 드 토크빌",
  },
  {
    quote: "잘 지낸 하루가 행복한 잠을 이루게 하는 것처럼 잘 보낸 인생은 행복한 최후를 가져온다.",
    author: "레오나르도 다 빈치",
  },
  {
    quote: "꿈을 추구할 용기만 있으면 모든 꿈은 반드시 이루어진다.",
    author: "월트 디즈니",
  },
  {
    quote: "당신이 포기할 때 나는 시작한다.",
    author: "엘론 머스크",
  },
  {
    quote: "내일이 곧 지금이다.",
    author: "엘리너 루즈벨트",
  },
  {
    quote: "모든 것은 내 자신에 달려 있다.",
    author: "백범 김구",
  },
  {
    quote: "나의 유일한 경쟁자는 어제의 나다.",
    author: "강수진",
  },
  {
    quote: "성공은 밤낮없이 거듭되었던 작고도 작은 노력들이 한데 모인 것이다.",
    author: "존 코멕넬",
  },
  {
    quote: "성공이라는 못을 받으러면 끈질김이라는 망치가 필요하다.",
    author: "존 메이슨",
  },
  {
    quote: "하나의 작은 꽃을 만드는 데도 오랜 세월의 노력이 필요하다.",
    author: "윌리엄 블레이크",
  },
];


/*  HTML에서 id="quote"인 요소의 첫 번째 span과 마지막 span을 가져오기  */
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
/*  배열의 길이만큼 숫자를 곱하고, quotes 배열의 요소 중 하나의 정수를 무작위로 뽑기  */
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


/*  명언과 작가를 화면에 보이기  */
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;