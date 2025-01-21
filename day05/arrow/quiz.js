// add 함수 x,y

function add(x, y) {
  return x + y;
}

// minus 함수

function minus(x, y) {
  return x - y;
}

// hello 함수 : 이름이 들어오면 ~~님 안녕

function hello(str) {
  return `${str}님 안녕~`;
}

// tolength 함수 : 문자가 들어오면 "~~문자 : 문자의 길이"

function tolength(str) {
  return `${str}문자 : ${str.length}`;
}

// double_three : x가 들어오면 제곱의 3배를 돌려줌

function double_three(x) {
  return x ** 2 * 3;
}

// lunch : x가 들어오면 점심메뉴 ~~ 입니다

function lunch(menu) {
  return `점심메뉴 ${menu}입니다`;
}

function allergy_test(str) {
  return str.includes("새우" || "땅콩" || "조개")
    ? "알러지 있음"
    : "알러지 없음";
}

// threeToArray 세개의 단어를 넣으면 배열로 돌려주는 함수

function threeToArray(a, b, c) {
  const word = [];
  word.push(a, b, c);
  return word;
}

// function threeToArray(a, b, c) {
//   return [a, b, c];
// }

console.log(threeToArray("고기", "야채", "스프"));

// getIphone version, model, storage

function getIphone(version, model, storage) {
  return { version: version, model: model, storage: storage };
}

console.log(getIphone(16, "plus", 512));

// 어떠한 노래 가사를 넣으면
// 가사의 총 길이와, 원하는 단어의 갯수를 오브젝트로 돌려주는 함수

function degree(x) {
  return x == 180
    ? "평각"
    : x < 180 && x > 90
    ? "둔각"
    : x == 90
    ? "직각"
    : x < 90 && x > 0
    ? "예각"
    : 0;

  // if (x == 180) return "평각";
  // else if (x < 180 && x > 90) return "둔각";
  // else if (x == 90) return "직각";
  // else if (x < 90 && x > 0) return "예각";
  // else return "0";
}

// 어떠한 단어를 입력하고, 하나의 알파벳도 입력하면
// 그 알파벳 기준으로 앞뒤로 쪼개서 앞의 단어를 대문자로 돌려줌

function word(str, a) {
  return str.split(a)[0].toUpperCase();
}

console.log(word("icecream", "r"));
console.log(word("americano", "i"));

function letter(str) {
  return str.length >= 4 && str.length <= 10
    ? "유효!"
    : "길이가 유효하지 않음!";
}

const letter = (str) =>
  str.length >= 4 && str.length <= 10 ? "유효!" : "길이가 유효하지 않음!";
