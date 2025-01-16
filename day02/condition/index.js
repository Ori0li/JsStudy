// if문

// const username = prompt("이름이 뭐에요");
// if (username == "쫀득") {
//     alert("살아있따");
// }

// 0 보다 큰 숫자를 넣으면 알럿으로 양의 정수입니다
// const num = parseInt(prompt("숫자"));
// if (num > 0) {
//   alert("양의 정수");
// } else {
//   alert("음의 정수");
// }

// 어떤 정수를 입력해서 홀수 또는 짝수 알려주는 프로그램
// const num = Number(prompt("숫자"));
// if (num % 2) {
//   alert("홀수임");
// } else {
//   alert("짝수임");
// }

// const num = +prompt("숫자");
// if (num > 0) {
//   alert("양의 정수");
// } else if (num == 0) {
//   alert("0");
// } else {
//   alert("음의 정수");
// }

// 정수를 입력해서, 양의 홀수인지 양의 짝수인지 0 음의 홀수, 음의 짝수

// const num = +prompt("숫자");
// // 깔끔하게 하려면 조건을 변수로 다 담고서 주면 사람이 보기엔 편함
// if (num > 0 && num % 2) {
//   alert("양의 홀수");
// } else if (num > 0 && num % 2 == 0) {
//   alert("양의 짝수");
// } else if (num == 0) {
//   alert("0");
// } else if (num < 0 && num % 2 == -1) {
//   alert("음의 홀수");
// } else if (num < 0 && num % 2 == 0) {
//   alert("음의 짝수");
// } else {
//   const result = num == 0 ? "0입니다" : "에러입니다";
//   alert(result);
// }

const year = +prompt("몇년생임?");

if (year % 12 == 0) {
  alert("원숭이띠");
} else if (year % 12 == 1) {
  alert("닭띠");
} else if (year % 12 == 2) {
  alert("개띠");
} else if (year % 12 == 3) {
  alert("돼지띠");
} else if (year % 12 == 4) {
  alert("쥐띠");
} else if (year % 12 == 5) {
  alert("소띠");
} else if (year % 12 == 6) {
  alert("호랑이띠");
} else if (year % 12 == 7) {
  alert("토끼띠");
} else if (year % 12 == 8) {
  alert("용띠");
} else if (year % 12 == 9) {
  alert("뱀띠");
} else if (year % 12 == 10) {
  alert("말띠");
} else if (year % 12 == 11) {
  alert("양띠");
} else {
  alert("에러");
}
