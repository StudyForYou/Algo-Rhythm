function solution(s) {
  return [...s].reduce((acc, el, index) => {
    const str = [...s.slice(0, index)];
    const idx = str.indexOf(el);
    const lastIdx = str.lastIndexOf(el);

    if (idx === -1) {
      acc.push(idx);
      return acc;
    }

    if (idx === lastIdx) {
      acc.push(Math.abs(idx - index));
      return acc;
    }

    acc.push(Math.min(Math.abs(idx - index), Math.abs(lastIdx - index)));
    return acc;
  }, []);
}
