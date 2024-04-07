function solution(keyinput, board) {
  let x = 0, y = 0;
  let maxX = Math.floor(board[0]/2);
  let maxY = Math.floor(board[1]/2);

  keyinput.forEach(dir=>{
    switch(dir){
      case "left":
        x = x <= (-1)*maxX? x : x-1;
        break;
      case "right":
        x = x>=maxX ? x : x+1;
        break;
      case "up":
        y = y >= maxY ? y : y+1;
        break;
      case "down":
        y = y<=(-1)*maxY ? y : y-1;
        break;
    }    
  })
  return [x, y];
}