const movie = prompt("영화 종류 (1~3)");
const age = prompt("나이");

const moiveName = ["액션 영화", "로맨틱 코미디", "공포영화"];
const moviePrice = [10000, 8000, 9000];

if (age < 13)
  alert(
    `선택한 영화는 ${moiveName[movie - 1]} 가격은 ${
      moviePrice[movie - 1] * 0.5
    }입니다`
  );
else if (age >= 60)
  alert(
    `선택한 영화는 ${moiveName[movie - 1]} 가격은 ${
      moviePrice[movie - 1] * 0.7
    }입니다`
  );
else
  alert(
    `선택한 영화는 ${moiveName[movie - 1]} 가격은 ${
      moviePrice[movie - 1]
    }입니다`
  );
