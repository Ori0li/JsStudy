const toUpper = (word) => word.toUpperCase();

const recipe = (x) => {
  if (x == 1) console.log("된장국 요리");
  else if (x == 2) console.log("김치찌개 요리");
  else if (x == 3) console.log("짜파게티 요리");
  else if (x == 4) console.log("가자미 튀김 요리");
  else if (x == 5) console.log("비엔나소세지 요리");
  else if (x == 6) console.log("라면 요리");
  else console.log("그런 요리 없음");
};

const cook = (num) => {
  console.log("요리 시작!");
  recipe(num);
  console.log("요리 끝!");
};

cook(2);

const skill = (Element) => {
  console.log("스킬 준비!");
  Element();
  console.log("스킬 완료!");
};

const fire = () => console.log("🔥");
const ice = () => console.log("🧊");
const thunder = () => console.log("⚡");

skill(fire);
