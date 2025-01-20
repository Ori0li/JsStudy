// function[함수]
// 입력 :
// 출력 :

function plus100(x) {
  return x + 100;
}

// plus100 [함수 이름]
const a = plus100(500);
console.log(a); // 600

function twice(x) {
  return x * 2;
}

console.log(twice(2));

function luckybiky(x) {
  return x + " 러키비키자나😋";
}

console.log(luckybiky("월요일이라니"));

function sniff(num) {
  return num % 2 ? "홀수" : "짝수";
}

// 1이 True고 0이 False 니까 으음.. 음음 ㅇㅋ 알았음

console.log(sniff(2));
console.log(sniff(3));
