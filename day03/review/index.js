const bus = prompt("버스 노선(1~3)");
const age = prompt("승객 나이?");

if (bus == 1) {
  const bus_name = "시내버스";
  const bus_price = 1200;
  if (age <= 7 || age > 64) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 버스는 ${bus_name}이며 가격은 무료입니다`
    );
  } else if (age > 7 && age < 20) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 버스는 ${bus_name}이며 가격은 ${
        bus_price * 0.7
      }원입니다`
    );
  } else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 버스는 ${bus_name}이며 가격은 ${bus_price}원입니다`
    );
  }
} else if (bus == 2) {
  const bus_name = "광역버스";
  const bus_price = 2000;
  if (age <= 7 || age > 64) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 버스는 ${bus_name}이며 가격은 무료입니다`
    );
  } else if (age > 7 && age < 20) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 버스는 ${bus_name}이며 가격은 ${
        bus_price * 0.7
      }원입니다`
    );
  } else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 버스는 ${bus_name}이며 가격은 ${bus_price}원입니다`
    );
  }
} else {
  const bus_name = "마을버스";
  const bus_price = 1000;
  if (age <= 7 || age > 64) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 버스는 ${bus_name}이며 가격은 무료입니다`
    );
  } else if (age > 7 && age < 20) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 버스는 ${bus_name}이며 가격은 ${
        bus_price * 0.7
      }원입니다`
    );
  } else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 버스는 ${bus_name}이며 가격은 ${bus_price}원입니다`
    );
  }
}
