function solution(s) {
  return s
    .split(" ")
    .reduce((acc, el) => {
      return (acc +=
        [...el]
          .map((e, idx) => (idx % 2 === 0 ? e.toUpperCase() : e.toLowerCase()))
          .join("") + " ");
    }, "")
    .slice(0, -1);
}
