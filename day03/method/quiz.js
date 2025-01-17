const createId = prompt("만들고 싶은 아이디?");

createId.length >= 4 || createId.length <= 16
  ? createId.includes("!") ||
    createId.includes("@") ||
    createId.includes("#") ||
    createId.includes("&")
    ? createId[createId.length - 1] ==
        createId[createId.length - 1].toUpperCase() &&
      !createId[createId.length - 1].includes("!") &&
      !createId[createId.length - 1].includes("@") &&
      !createId[createId.length - 1].includes("#") &&
      !createId[createId.length - 1].includes("&") &&
      !createId[createId.length - 1].includes("1") &&
      !createId[createId.length - 1].includes("2") &&
      !createId[createId.length - 1].includes("3") &&
      !createId[createId.length - 1].includes("4") &&
      !createId[createId.length - 1].includes("5") &&
      !createId[createId.length - 1].includes("6") &&
      !createId[createId.length - 1].includes("7") &&
      !createId[createId.length - 1].includes("8") &&
      !createId[createId.length - 1].includes("9") &&
      !createId[createId.length - 1].includes("0")
      ? alert("완성")
      : alert("마지막 문자는 무조건 알파벳 대문자여야합니다.")
    : alert("특수 문자 (!,@,#.&) 하나 포함해야합니다!")
  : alert("아이디 길이가 유효하지 않습니다");
