// /sentence/ => 정규표현식 타입

// /문자/i => ignore 대소문자 무시 plz
const a = /hello/i;

const b = a.test("HELLO world!");
console.log(b);

// match : 일치하는게 있으면 배열로 바꿔줌
const str = "hello world!";
const result = str.match(a);
console.log(result);

const c = /a{2,4}/;
// aa or aaa pr aaaa 있는지?
console.log(c.test("a"));
console.log(c.test("aa"));
console.log(c.test("aaa"));
console.log(c.test("aaaa"));
console.log(c.test("aaaaa"));
