// 프롬프트 몇살인지 입력하고
// 알럿으로 ~~년생 이시군요!
// 프롬프트로 입력 받아오면 무조건 String 타입이니까
// 숫자 써야하면 타입 변환을 해줘야한다.

const age = window.prompt("몇살이신가요???");
const year = 2025 - Number(age) + 1;

window.alert(`${year}생 이시군요!!`);
