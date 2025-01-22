const menu = [
  {
    name: "부대찌개",
    price: 13000,
    kcal: 700,
    ingredients: ["햄", "라면", "파", "두부", "김치", "콩"],
  },
  { name: "죽", price: 4000, kcal: 200, ingredients: ["소고기", "밥", "물"] },
  {
    name: "샌드위치",
    price: 0,
    kcal: 400,
    ingredients: ["고구마", "참치", "빵", "치즈"],
  },
  {
    name: "해장국",
    price: 10000,
    kcal: 700,
    ingredients: ["뼈다귀", "시래기", "감자", "수제비"],
  },
];

//메뉴에서 가격이 10% 올린 배열을 콘솔로 나타내면 됨

//

const inflation = (x) => {
  x.price = parseInt(x.price * 1.1);
  return x;
};
const newPrice = menu.map(inflation);
// console.log(newPrice);

const addSuger = (x) => {
  x.ingredients.push("설탕");
  x.kcal += 100;
  return x;
};
const newAddSugar = menu.map(addSuger);
// console.log(newAddSugar);

const vegan = (x) => x.ingredients.every((v) => !(v == "햄" || v == "소고기"));
const aaa = menu.filter(vegan);
// console.log(aaa);

const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shots: 2,
    ingredients: ["커피콩", "물", "초코"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shots: 0,
    ingredients: ["레몬", "사이다", "시럽"],
  },
  { name: "아메리카노", price: 3000, shots: 2, ingredients: ["커피콩", "물"] },
  {
    name: "자몽허니블랙",
    price: 5500,
    shots: 0,
    ingredients: ["자몽", "꿀", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shots: 1,
    ingredients: ["크림", "초코", "우유", "얼음"],
  },
];

const noCaffeine = (x) => x.shots == 0;
// const bbb = starbucks.filter(noCaffeine);
// console.log(bbb);

const coffeeInflation = (x) => {
  x.ingredients.some((x) => x == "커피콩") ? x.price * 0.8 : x.pirce;
  return x;
};
// const ccc = starbucks.map(coffeeInflation);
// console.log(ccc);

const honey = (x) => {
  x.ingredients.some((v) => v == "꿀")
    ? x.ingredients
    : (x.name += " 꿀♥") && (x.price += 300) && x.ingredients.push("꿀");
  return x;
};

const ddd = starbucks.map(honey);
console.log(ddd);

// String -> Array
const name = "엄준식".split("");
const name1 = [..."엄준식"];

// Array -> String
["김밥", "천국"].join("");
