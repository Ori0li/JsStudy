// 콘솔로 로또번호 나타내기 ㄱ
const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// const lotto = [
//   ...new Set(
//     Array(6)
//       .fill(0)
//       .map((v) => getRandom(1, 45))
//   ),
// ];
// console.log(lotto);

// const getLotto = () => {
//   while (true) {
//     const lotto = Array(6)
//       .fill(0)
//       .map((v) => String(getRandom(1, 45)));
//     const newLotto = lotto.reduce(
//       (a, c) => (a.includes(c) ? a : [...a, c]),
//       []
//     );
//     if (newLotto.length == 6) return newLotto;
//   }
// };
// console.log(getLotto());

const getLotto1 = () => {
  while (true) {
    const lotto = [
      ...new Set(
        Array(6)
          .fill(0)
          .map((v) => String(getRandom(1, 45)))
      ),
    ];
    if (lotto.length == 6) return lotto;
  }
};
console.log(getLotto1());

// const lottoArr = [];
// while (lottoArr.length < 6) {
//   const num = Math.floor(Math.random() * 45 + 1);
//   if (lotto.indexOf(num) == -1) {
//     lottoArr.push(num);
//   }
// }

// console.log(lottoArr);
