// 1
const name = window.prompt("이름");
const age = window.prompt("나이");
const favorite_color = window.prompt("좋아하는 색");
console.log(
  `제 이름은 ${name}, 나이는 ${age}살이고, 좋아하는 색은 ${favorite_color}입니다`
);

// 2
const day = new Date().toDateString();
const plan = window.prompt("일정이?");
window.alert(`오늘은 ${day}, 계획하신 일정은 ${plan}입니다.`);

// 3
const num1 = window.prompt("첫번째 숫자");
const num2 = window.prompt("두번째 숫자");
const sum = Number(num1) + Number(num2);
const diff = Number(num1) - Number(num2);
window.alert(`두수의 합은 ${sum}이고 차는 ${diff}임`);

// 4
const price = window.prompt("음식 가격");
const count = window.prompt("몇개 살꺼임?");
const total = Number(price) * Number(count);
window.alert(`총 ${total}원 임`);

// 5
const temp_C = window.prompt("섭씨온도 몇임?");
const temp_F = Number(temp_C) * 1.8 + 32;
window.alert(`화씨온도 ${temp_F}임`);

// 6
const variable = window.prompt("한변의 길이는?");
const squareWidth = Number(variable) * Number(variable);
window.alert(`정사각형 넓이는 ${squareWidth}임`);
