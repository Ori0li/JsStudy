// 함수 만드는 개꿀 방법이?
// 1. 상태랑 ,2. 행동

// const num = prompt("메뉴 번호 적으시라요");

const starbucks = {
  drinks: [
    { menu: "아이스 아메리카노", price: 4000 },
    { menu: "바닐라 라떼", price: 4500 },
    { menu: "유자차", price: 4000 },
  ],
  sale: 0,
  sellDrinks: function (num) {
    if (!this.drinks[num]) console.log("그런 메뉴 없음");
    else {
      console.log(`"${this.drinks[num].menu}" 판매 완료`);
      this.sale = this.sale + this.drinks[num].price;
    }
  },

  addDrinks: function (name, price) {
    this.drinks.push({ menu: name, price: price });
  },

  totalSale: function () {
    console.log(this.sale);
  },
};

starbucks.sellDrinks(0);
starbucks.totalSale();

const magician = {
  health: 100,
  mana: 100,
  level: 1,
  exp: 0,
  skill: [
    { name: "매직클로", mp: 10, exp: 10 },
    { name: "텔레포트", mp: 50, exp: 25 },
  ],

  potion: function () {
    this.mana > 100 ? (this.mana = 100) : (this.mana += 50);
    this.health > 100 ? (this.health = 100) : (this.health += 50);
  },

  useSkill: function (num) {
    if (this.mana == 0) console.log("마나 부족");
    else {
      console.log(`${magician.skill[num].name} 발동!!`);
      this.mana -= this.skill[num].mp;
      this.exp += this.skill[num].exp;
      if (this.exp == 100) {
        this.exp = 0;
        this.level += 1;
        console.log(`레벨 ${this.level}이 되었습니다.`);
      } else if (this.exp > 100) {
        this.exp = this.exp - 100;
        this.level += 1;
        console.log(`레벨 ${this.level}이 되었습니다.`);
      } else {
        console.log(`경험치 ${this.exp} 입니다.`);
      }
    }
  },
};

// 이런식으로 변경 가능

// const magician1 = {
//   hp: 100,
//   mp: 100,
//   lev: 1,
//   exp: 0,
//   getExp: function (exp) {
//     if (this.exp >= 100) {
//       this.level += 1;
//       this.exp -= 100;
//       console.log(`레벨 ${this.level}`);
//     } else {
//       console.log(`경험치 ${this.exp}`);
//     }
//   },
//   magicClaw: function () {
//     if (this.mana < 10) {
//       console.log(`현재 마나 ${mana} 스킬 x`);
//     } else {
//       this.mana = this.mana - 10;
//       this.getExp(10)
//     }
//   },
// };

// youtube

// 내 id:
// 구독한 채널:
// 좋아요 눌렀던 채널:
// 구독하기:
// 좋아요 누르기:

// const youtube = {
//   sub: [],
//   liked: [],
//   subscribe: function (name) {
//     this.sub.push(name);
//   },
//   hitTheLike: function (name) {
//     this.liked.push(name);
//   },
// };

// const car = {
//   name: "스포티지",
//   speed: 0,
//   speedUp: function () {
//     this.speed + 10 < 200 ? (this.speed += 10) : console.log("속도 줄이셈");
//   },
//   break: function () {
//     this.speed - 10 > 0 ? (this.speed -= 10) : (this.speed = 0);
//     // this.speed = this.speed ? this.speed -1 : 0;
//   },
//   nowSpeed: function () {
//     console.log(`차량은 ${this.name}, 속도는 ${this.speed} 임`);
//   },
// };

// car.speedUp();
// car.nowSpeed();

const calculator = {
  result: 0,
  history: [],
  add: function (num) {
    this.result += num;
    this.history = this.history.push(this.result);
  },
  minus: function (num) {
    this.result -= num;
    this.history = this.history.push(this.result);
  },
  multiply: function (num) {
    this.result *= num;
    this.history = this.history.push(this.result);
  },
  divide: function (num) {
    if (num == 0) console.log("에러");
    else {
      this.result /= num;
      this.history = this.history.push(this.result);
    }
  },
  square: function (num) {
    this.result **= num;
    this.history = this.history.push(this.result);
  },
  clearResult: function () {
    this.result = 0;
  },
  showResult: function () {
    alert(`결과 값 : ${this.result}`);
    console.log(`히스토리 : ${this.history}`);
  },
};

calculator.add(4);
