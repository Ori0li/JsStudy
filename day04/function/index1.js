// 함수
// 자바스크립트에서는 함수를 일급 객체[타입]로 취급함

// array, object, function
const a = [];
const b = {};
const c = function (a, b) {
  return a + b;
};

const subway = {
  name: "서브웨이 부평점",
  sale: 0,
  sellBread: function () {
    this.sale += 1000;
  },
  printSale: function () {
    console.log(this.sale);
  },
};

// 간단한 아이스크림 판매 로직 구성
// price랑 icename 따로 array 구성해서 하려했는데
// object로 한방에 묶으니까 더 짧고 간편하게 됨 레전드

const baskinRabbins = {
  icecream: [
    {
      name: "민트초코",
      price: 2000,
    },
    {
      name: "엄마는외계인",
      price: 2500,
    },
    {
      name: "레인보우샤베트",
      price: 4000,
    },
  ],
  sale: 0,
  sellIcecream: function (ice) {
    if (this.icecream[ice] == undefined) console.log("그런번호 없음");
    else {
      console.log(`"${this.icecream[ice].name}" 판매 완료.`);
      this.sale = this.sale + this.icecream[ice].price;
    }
  },
  addIcecream: function (addIce, price) {
    this.icecream.push({ name: addIce, price: price });
  },
  printSale: function () {
    console.log(`총 매출 : ${this.sale}`);
  },
};

baskinRabbins.sellIcecream(1);
baskinRabbins.sellIcecream(1);
baskinRabbins.sellIcecream(1);
baskinRabbins.sellIcecream(1);
baskinRabbins.addIcecream("애플민트", 3000);
baskinRabbins.sellIcecream(3);
baskinRabbins.printSale();
