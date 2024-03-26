function solution(arr) {
  let row = arr.length;
  let column = arr[0].length;

  if (row>column){
    return arr.map((el)=>([...el, ...(new Array(row-column)).fill(0)]));
  }else if (row < column){
    console.log("b");
    return [...arr, ...(new Array(column-row)).fill((new Array(column)).fill(0))]
  }else return arr;
}
