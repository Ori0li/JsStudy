// 화살표 함수로 구현하기

// 1. emoji 음식 이모지 넣으면 음식 이모지 피자가 나오는 함수

const emoji = (food) => `${food} 피자`;

const threeWord = (word) => word.repeat(3);

const wonToDollor = (won) => won / 1430 + "달러";

// console.log(emoji("🍤"));
// console.log(wordThree("🍤"));
// console.log(wonToDollor(14300000));

// goToAcademy 함수

const goToAcademy = (vehicle) => {
  console.log("집에서 출발");
  vehicle();
  console.log("학원 도착");
};

const taxi = () => console.log("택시 타요");
const bus = () => console.log("버스 타요");
const walk = () => console.log("걸어가요");
const bicycle = () => console.log("자전거 타요");
const car = () => console.log("차 타요");

const makeBeverage = (drink) => {
  console.log("주문 받기");
  drink();
  console.log("주문 완료");
};

const coffee = () => {
  const working = {
    1: "원두갈기",
    2: "평탄화 하기",
    3: "머신 넣기",
    4: "버튼 넣기",
    5: "커피 내리기",
    6: "음료 담기",
  };
  for (const key in working) {
    console.log(`${key} : ${working[key]}`);
  }
};

const smoothie = () => {
  const working = {
    1: "과일 넣기",
    2: "얼음 넣기",
    3: "한번에 갈기",
    4: "음료 담기",
  };
  for (const key in working) {
    console.log(`${key} : ${working[key]}`);
  }
};
const tea = () => {
  const working = {
    1: "티백 넣기",
    2: "뜨거운 물 넣기",
    3: "음료 담기",
  };
  for (const key in working) {
    console.log(`${key} : ${working[key]}`);
  }
};

makeBeverage(coffee);
