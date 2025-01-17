const fruits = ["딸기", "블루베리", "배", "사과", "바나나"];

//1. 딸기, 블루베리, 나머지 변수

const [strawB, blueB, ...rest] = fruits;
console.log(strawB);
console.log(blueB);
console.log(rest);

//2. 딸기

console.log(fruits[0], fruits[2]);
