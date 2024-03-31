function solution(picture, k) {
  return picture.reduce((acc, el) => {
    acc.push(
      ...([...el].map((e) => e.repeat(k)).join("") + " ")
        .repeat(k)
        .slice(0, -1)
        .split(" ")
    );
    return acc;
  }, []);
}
