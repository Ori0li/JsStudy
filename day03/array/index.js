// 커피 메뉴 3개 선언
const coffee1 = "자바칩 프라푸치노";
const coffee2 = "바닐라 스타벅스 더블샷";
const coffee3 = "체리콕";

// ArrayType
const coffeeMenu = ["자바칩 프라푸치노", "바닐라 스타벅스 더블샷", "체리콕"];
const array = [100, true, "끄악", ["커피", "콜라", "아이스크림"], coffeeMenu];

const soccer = ["손흥민", "황희찬", "이강인", "김민재"];

// 배열 관련된 연산자

// 1. indexing 연산자 (= 꺼내기)
const test = [coffeeMenu, soccer];
// console.log(test[1][1]);
// console.log(test[0][1]);

// 2. Destructring 연산자 (= 분해시키기)
// ... 붙이면 배열 다 풀어져서 합쳐져서 나옴
const test1 = [...coffeeMenu, ...soccer];
// console.log(test1);

// 3. Rest 연산자
const [son, ...rest] = soccer;
console.log(son);
console.log(rest);

const [son1, chan] = soccer;
console.log(son1); //손흥민
console.log(chan); //황희찬

//4. add 및 update 연산자
soccer[4] = "박지성";
soccer[1] = "씨찬";
console.log(soccer[4]);

//5. delete 연산자 (= 삭제)
delete soccer[3];
console.log(soccer);
