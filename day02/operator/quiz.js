// // 1
// const height = prompt("키는?");
// window.alert(Number(height) <= 140 ? "탑승금지" : "탑승가능");

// // 2
// const num = prompt("숫자");
// window.alert(
//   Number(num) != 0
//     ? Number(num) % 2 == 0
//       ? "짝수"
//       : "홀수"
//     : "1이상의 숫자를 적어주세요"
// );

// // 3
// const year = prompt("태어난 년도");
// const age = 2026 - Number(year);
// console.log(Number(age) >= 20 ? "성인" : "미성년자");

//4
const time = prompt("몇초?");
const minute = Math.floor(Number(time) / 60);
const sec = Math.floor(Number(time) % 60);

// console.log(Number(sec) % 60 == 0 ? `${minute}분` : `${minute}분 ${sec}초`);

console.log(
  Number(sec) % 60 == 0
    ? (parseInt(time) / 60)`분`
    : (parseInt(time) / 60)`분`(parseInt(time) % 60)`초`
);

// //5
// const num1 = prompt("첫번째 숫자");
// const num2 = prompt("두번째 숫자");
// console.log(Number(num1) > Number(num2) ? Number(num1) : Number(num2));
