function solution(s) {
  const words = s.toUpperCase().split(" ").map(word=>{
    if (word.length <= 0) return word;
    else{
      let newWordArr = word.split("").map((el, ind)=>{
        if (ind %2 === 1){
          return el.toLowerCase();
        }else return el;
      })
      return newWordArr.join("");
    }
  })
  return words.join(" ");
}