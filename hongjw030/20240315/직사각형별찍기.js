// 프로그래머스 1레벨, 79퍼센트 문제.
// "*".repeat(5) 함수 기억하기

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for(let i=0;i<b;i++){
      let str = '';
      for (let j = 0;j<a;j++){
        str += "*";
      }
      console.log(str);
    }
});