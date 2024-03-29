//school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr) {
  if (arr.length > arr[0].length) {
    let a = arr.reduce((acc, curr) => {
      // concat을 사용할 수도 있음.
      // ...Array를 쓰지 않으면 [1, 2, 3, [0]을 반환함.
      let newArray = [...curr, ...Array(arr.length - arr[0].length).fill(0)]; 
      return [...acc, newArray];
    }, []);
    return a;
  }

  if (arr.length < arr[0].length) {
    let a = [...arr];
    for (let i = 1; i <= arr[0].length - arr.length; i++) {
      a.push(Array(arr[0].length).fill(0));
    }
    return a;
  }

  if (arr.length === arr[0].length) {
    return arr;
  }
}
