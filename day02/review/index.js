const food = prompt("좋아하는 음식은?");
const place = prompt("가장 최근에 갔던 장소?");
console.log(`최근에 갔던 ${place}에서 ${food}을(를) 먹고 싶어요`);

const height = prompt("키(cm)?");
const weight = prompt("몸무게?");
console.log(
  `BMI : ${Number(weight) / ((Number(height) / 100) * (Number(height) / 100))}`
);

const usd = prompt("오늘의 환율?");
const dollor = prompt("얼마(USD)를 원으로 환전하겠습니까?");
const won = Number(dollor) * Number(usd);
console.log(`${dollor}달러 -> ${won}`);

const btc = prompt("1BTC = 몇원?");
const exchage = prompt("몇 BTC를 환산하고 싶습니까?");
const bit_won = Number(btc) * Number(exchage);
console.log(`${bit_won}원 임`);
