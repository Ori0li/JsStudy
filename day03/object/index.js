const coffee = {
  name: "아메리카노",
  price: 2500,
  ingredients: ["물", "원두", "얼음"],
};

// .(dot) 연산자
// console.log(coffee.price);
// console.log(coffee["price"]);

// 커피콩 꺼내기
// console.log(coffee.ingredients[1]);
// console.log(coffee["ingredients"][1]);

const dplus = {
  top: {
    playerName: "Siwoo",
    champion: "Sion",
    kda: {
      kill: 1,
      death: 3,
      assist: 10,
    },
  },
  middle: {
    playerName: "Showmaker",
    champion: "Ahri",
    kda: {
      kill: 9,
      death: 2,
      assist: 7,
    },
  },
};

// 콘솔로 top + middle 킬수 합쳐서 나타내기
// console.log(dplus["top"]["kda"]["kill"] + dplus.middle.kda.kill);

const lunch = {
  name: "햄버거",
  franchies: "버거킹",
};

// 오브젝트 데이터 주가
lunch.kcal = 900;
lunch.side = "감자튀김";
lunch.drink = "제로콜라";

// 오브젝트 삭제
delete lunch.kcal;

//
const drama = {
  title: "오징어게임2",
  grade: 18,
  genres: ["액션", "블랙코미디", "군상극", "데스 게임"],
};

const a = drama.title; // 오징어게임2
const { title } = drama; // 오징어게임2

const { genres } = drama;
const [action, black] = drama.genres;

const player = {
  name: "이승엽",
  position: ["타자"],
  salary: 30000,
};

const coffee1 = {
  cofeeName: "아메리카노",
  price: 2500,
};

//key-value 이름이 같으면 생략 가능
const data = { player, coffee1 };
console.log(data);

const cosmetic = {
  type: "핸드크림",
  company: "카밀",
  price: 8000,
  ingredients: {
    first: {
      name: "글리세린",
      chemicals: ["수소", "산소"],
    },
    second: {
      name: "미네랄오일",
      chemicals: ["알케인", "파라핀"],
    },
  },
};

const { company } = cosmetic;

const { first } = cosmetic.ingredients;

const test1 = { ...cosmetic.ingredients.first };

const laptop = {
  title: "그램",
  price: 80000,
  speces: {
    cpu: "Intel i5",
    ram: "8GB",
    storage: "256GB SSD",
  },
};

const cpu = laptop.speces.cpu;
const { ram } = laptop.speces;
const storage = laptop.speces["storage"];

// const {cpu,ram,storage} = laptop.speces;

console.log(cpu);
console.log(ram);
console.log(storage);
