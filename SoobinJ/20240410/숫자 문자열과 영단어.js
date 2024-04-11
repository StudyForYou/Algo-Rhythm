const obj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
function solution(s) {
  return Number(
    Object.keys(obj).reduce((acc, el) => {
      const newArr = acc.split(el);
      if (newArr.length > 1) {
        return newArr.join(obj[el]);
      }
      return acc;
    }, s)
  );
}
