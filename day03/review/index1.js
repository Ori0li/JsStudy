const bus = prompt("버스 노선(1~3)");
const age = prompt("승객 나이?");

const bus_name = ["시내버스", "광역버스", "마을버스"];
const bus_price = [1200, 2000, 1000];

if (age <= 7 || age > 64) alert("무료입니다.");
else if (age > 7 && age < 20)
  alert(`${bus_name[bus - 1]}, 가격은 ${bus_price[bus - 1] * 0.7}`);
else alert(`${bus_name[bus - 1]}, 가격은 ${bus_price[bus - 1]}`);
