const name = prompt("닉네임이 뭔가요?");
window.alert(`${name || "Guest"}님 환영합니다`);

const password = prompt("화장실 비밀번호는?");
password == 1024 && alert("정답");

// `${password}` == 1024 ? alert("정답") : alert("다시하세용");
