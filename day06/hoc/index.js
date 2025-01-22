const arr = [1, 3, 5, 7, 9];

//  JONNA  중요 Real
// 요소들을 바꿔주는 함수

const double = (x) => x * 2;
const plusTen = (x) => x + 10;
const twiceNum = (x) => (x ** 2 < 10 ? "짜장면" : "탕수육");

// 세제곱을하고 자릿수가 2자리 이하면 커피 아니면 붕어빵

const threeNum = (x) => (String(x ** 3).length <= 2 ? "커피" : "붕어빵");
const threeNum1 = (x) => (x ** 3 <= 100 ? "커피" : "붕어빵");

const newArr = arr.map(threeNum);
// console.log(newArr);

const fruits = [
  "peach",
  "mango",
  "strawberry",
  "apple",
  "orange",
  "mandarin",
  "plum",
  "persimmon",
  "fig",
];

const heart = (x) => (x.length >= 6 ? "💙" : "💔");
const newArr1 = fruits.map(heart);
// console.log(newArr1);

//문자 길이를 두배 했을때, 15보다 작으면 과일이름 짧음 아니면 과일이름 김

const doubleText = (x) => (x.length * 2 < 15 ? "과일이름 짧음" : "과일이름 김");
const newA = fruits.map(doubleText);
// console.log(newA);

const arr1 = [1, 3, 5, 7, 9];

// some : 요소중에 하나라도 있으면 true 없으면 false
const isThree = (x) => x == 3;
const newB = arr1.some(isThree);
// console.log(newB);

const underFive = (x) => x < 5;
const AA = arr1.some(underFive);
// console.log(AA);

const hasEven = (x) => x % 2 == 0;
const ho = arr1.some(hasEven);
// console.log(ho);

// every : 요소중에 조건(함수)에 맞는거 모두 갖는지 물음 // 조건을 다 가져야함 안그러면 무조건 false

const fruits1 = [
  "peach",
  "mango",
  "strawberry",
  "apple",
  "orange",
  "mandarin",
  "plum",
  "persimmon",
  "fig",
];

const nameStart = (x) =>
  x.startsWith("k") || x.startsWith("b") || x.startsWith("s");
const a = fruits1.some(nameStart);
console.log(a);

const nameLength = (x) => 4 <= x.length && x.length <= 12;
const b = fruits1.every(nameLength);
console.log(b);

const changeEmoji = (x) =>
  x.includes("i") || x.includes("o") || x.includes("u") ? "💛" : "🧨";
const c = fruits1.map(changeEmoji);
console.log(c);

const song = `Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Oh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh 
I'd wanna be next to you`;

// song를 배열로 바꾸고, 각각 문자 길이로 바꾼다음에 문자 길이가 6글자 나오면 '💚' 아니면 그대로 나오고 출력하기

// const changeSong = (x) => (x.length > 6 ? "💚" : x);
const bb = song
  .split(" ")
  .map((word) => (word.length > 6 ? "💚" : word))
  .join(" ");
console.log(bb);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter[입구컷]

const overSix = (x) => x >= 6;

console.log(numArr.filter(overSix));

const doubleTenArr = numArr.filter((x) => x ** 2 < 100).map((x) => x + 10);

console.log(doubleTenArr);
