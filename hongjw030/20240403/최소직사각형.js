function solution(sizes) {
  // 카드 싹다 정렬
  sizes.forEach(size=>{
    size.sort((a, b)=> a-b);
  })

  // 가장 큰 가로길이랑 세로 길이
  let row = 0;
  let col = 0;
  sizes.forEach((size, index)=>{
    if (size[0] > row) row = size[0];
    if (size[1] > col) col = size[1];
  })
  return row*col;
}