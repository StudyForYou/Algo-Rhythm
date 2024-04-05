function solution(s, n) {
  return [...s].reduce((acc, el) => {
    if (el === " ") return (acc += " ");
    const c = el.charCodeAt();
    const cn = el.charCodeAt() + n;

    //대문자
    if (c >= 65 && c <= 90) {
      return (acc += String.fromCharCode(cn > 90 ? 64 + (cn - 90) : cn));
    }

    //소문자
    if (c >= 97 && c <= 122) {
      return (acc += String.fromCharCode(cn > 122 ? 96 + (cn - 122) : cn));
    }
  }, "");
}
