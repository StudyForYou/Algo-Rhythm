function solution(s) {
  return s
    .split(" ")
    .reduce((acc, el) => {
      // 공백 문자일 경우
      if (el === "") return (acc += " ");
      return (acc += el[0].toUpperCase() + el.slice(1).toLowerCase() + " ");
    }, "")
    .slice(0, -1); //마지막 공백 제거, trim 사용할 경우 마지막 공백 2개일 경우 모두 없어져서 성공x
}
