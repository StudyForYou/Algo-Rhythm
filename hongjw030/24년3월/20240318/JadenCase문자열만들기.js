function solution(s) {
  const originalArray = s.split(" ");

  const modifiedArray = originalArray.map(word =>{
    if (word.length <= 0) return;
    return (word[0].toUpperCase() + word.slice(1, word.length).toLowerCase())
  })

  return modifiedArray.join(" ");
}