const num = prompt("1~3사이 정수");
const age = +prompt("나이");

if (num == "1") {
  const movie_name = "액션영화";
  if (age < 13) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 ${movie_name}이므로 최종 티켓 가격 ${
        10000 * 0.5
      }`
    );
  } else if (age >= 60) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 ${movie_name}이므로 최종 티켓 가격 ${
        10000 * 0.7
      }`
    );
  } else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 ${movie_name}이므로 최종 티켓 가격 ${
        10000 * 1
      }`
    );
  }
} else if (num == "2") {
  const movie_name = "로맨틱 코미디";
  if (age < 13) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 ${movie_name}이므로 최종 티켓 가격 ${
        8000 * 0.5
      }`
    );
  } else if (age >= 60) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 ${movie_name}이므로 최종 티켓 가격 ${
        8000 * 0.7
      }`
    );
  } else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 ${movie_name}이므로 최종 티켓 가격 ${
        8000 * 1
      }`
    );
  }
} else {
  const movie_name = "공포영화";
  if (age < 13) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 ${movie_name}이므로 최종 티켓 가격 ${
        7000 * 0.5
      }`
    );
  } else if (age >= 60) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 ${movie_name}이므로 최종 티켓 가격 ${
        7000 * 0.7
      }`
    );
  } else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 ${movie_name}이므로 최종 티켓 가격 ${
        7000 * 1
      }`
    );
  }
}
