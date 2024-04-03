function solution(spell, dic) {
  return dic
    .map((e) => {
      return spell.map((k) => e.includes(k)).every((i) => i);
    })
    .some((e) => e)
    ? 1
    : 2;
}
