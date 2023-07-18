/* calculator 객체 안의 함수를 사용하여 계산기 만들기 */

const calculator = {
  plus: function(a, b) {
    console.log(a + b);   // 더하기
  },
  miuns: function(c, d) {
    console.log(c - d);   // 빼기
  },
  mult: function(e, f) {
    console.log(e * f);   // 곱하기
  },
  divid: function(g, h) {
    console.log(g / h);   // 나누기
  },
  squa: function(i, j) {
    console.log(i ** j);  // 제곱
  }
};

calculator.plus(1, 1);
calculator.miuns(7, 3);
calculator.mult(2, 4);
calculator.divid(7, 8);
calculator.squa(5, 6);