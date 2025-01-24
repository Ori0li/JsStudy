const arr = [1, 3, 5, 7, 9];

const q1 = arr.map((x, i) => i);
console.log(q1);

// 배열 0부터 1000까지

const q2 = Array(1001)
  .fill(0)
  .map((x, i) => i);
console.log(q2);

// 배열 5의 배수 0 부터 100까지

const q3 = Array(21)
  .fill(0)
  .map((x, i) => i * 5);
console.log(q3);

const q4 = Array(100)
  .fill(0)
  .map((x, i) => i + 1)
  .map((x) =>
    x % 15 != 0 ? (x % 5 != 0 ? (x % 3 != 0 ? x : "🐭") : "🐷") : "🐰"
  );
console.log(q4);

const q5 = Array(125)
  .fill(0)
  .map((x, i) => i + 1900)
  .map((x) => {
    if (x % 12 == 0) return { 연도: x, 띠: "🐵" };
    else if (x % 12 == 1) return { 연도: x, 띠: "🐔" };
    else if (x % 12 == 2) return { 연도: x, 띠: "🐶" };
    else if (x % 12 == 3) return { 연도: x, 띠: "🐷" };
    else if (x % 12 == 4) return { 연도: x, 띠: "🐭" };
    else if (x % 12 == 5) return { 연도: x, 띠: "🐮" };
    else if (x % 12 == 6) return { 연도: x, 띠: "🐯" };
    else if (x % 12 == 7) return { 연도: x, 띠: "🐰" };
    else if (x % 12 == 8) return { 연도: x, 띠: "🐲" };
    else if (x % 12 == 9) return { 연도: x, 띠: "🐍" };
    else if (x % 12 == 10) return { 연도: x, 띠: "🐴" };
    else if (x % 12 == 11) return { 연도: x, 띠: "🐑" };
  });
console.log(q5);

const makeZodiac = (to, from) => {
  const zodiac = {
    0: "🐵",
    1: "🐔",
    2: "🐶",
    3: "🐷",
    4: "🐭",
    5: "🐮",
    6: "🐯",
    7: "🐰",
    8: "🐲",
    9: "🐍",
    10: "🐴",
    11: "🐑",
  };
  return Array(from - to)
    .fill(0)
    .map((v, i) => i + to)
    .map((v) => {
      return { 연도: v, 띠: zodiac[v % 12] };
    });
};
