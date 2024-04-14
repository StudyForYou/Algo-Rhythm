function solution(picture, k) {
  // picture 배열의 (1) 각 line에 대해 k만큼 line 내 문자들을 반복하고, (2) 그 line을 k개 더 추가한다.

  const newPicture = [];

  picture.forEach((line)=>{
    // picture 배열의 (1) 각 line에 대해 k만큼 line 내 문자들을 반복
    const newLine = line.split("").reduce((acc, char, ind)=>{
      return acc + char.repeat(k);
    }, "");
  // (2) 그 line을 k개 더 추가한다.
    for(let i = 0;i<k;i++){
      newPicture.push(newLine);
    }
  })

  return newPicture;
}