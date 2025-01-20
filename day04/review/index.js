const mbit = prompt("mbti 무엇");
const first = mbti[0].toUppercase();
//const first = mbit.slice(0,1).toUpperCase();
const second = mbti[1].toUppercase();
const third = mbti[2].toUppercase();
const fourth = mbti[3].toUppercase();

const mbitObj = {
  E: "외향적",
  I: "내향적",
  S: "감각적",
  N: "직관적",
  T: "이성적",
  F: "감성적",
  J: "계획적",
  P: "즉흥적",
};

alert(
  `${mbitObj[first]} ${mbitObj[second]} ${mbitObj[third]} ${mbitObj[fourth]}`
);

const userEmail = prompt("이메일 입력");
userEmail.includes("@")
  ? userEmail.includes(".com") || userEmail.includes(".net")
    ? userEmail.includes("naver") ||
      userEmail.includes("kakao") ||
      userEmail.includes("yahoo") ||
      userEmail.includes("paran")
      ? alert("이메일 맞음")
      : alert("도메인 맞게 쓰셈")
    : alert(".com 이나 .net 없음")
  : alert("@ 쓰셈");

// const hasAt = userEmail.includes("@");
// const hasDot = userEmail.includes(".com") || userEmail.includes(".net");
// const hasDomain =
//   userEmail.includes("naver") ||
//   userEmail.includes("kakao") ||
//   userEmail.includes("yahoo") ||
//   userEmail.includes("paran");

//   hasAt && hasDot & hasDomain ? alert("이메일 맞음") : alert("이메일 형식아님")
