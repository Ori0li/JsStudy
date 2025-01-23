// Date

const a = new Date();

const date = a.getDate();
const day = a.getDay();
const hour = a.getHours();
const month = a.getMonth();
console.log({ date, day, hour, month });

const iso = a.toISOString();
const locale = a.toLocaleString();
const date1 = a.toLocaleDateString();
const time = a.toLocaleTimeString();
console.log({ iso, locale, date1, time });

// Math

const absolute = Math.abs(-10); // 절댓값
const max = Math.max(3, 123, 255, 490); // 최댓값
const min = Math.min(3, 123, 255, 490); // 최솟값

const ceil = Math.ceil(3.14); // 올림
const floor = Math.floor(3.9); // 내림
const round = Math.round(3.4); // 반올림

const ran = Math.random(); // 0 <= x < 1

const test = Math.floor(Math.random() * 10);
const test1 = Math.random() * 10 + 1;
const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
