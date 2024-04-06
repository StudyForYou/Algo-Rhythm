function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    
    let totalX = (board[0] / 2);
    let totalY = (board[1] / 2);
    
    for (let i = 0; i < keyinput.length; i ++ ) {

        if (keyinput[i] === "right" && x + 1 < totalX) x++ 
        if (keyinput[i] === "left" && x - 1 > -totalX) x-- 
        
        if (keyinput[i] === "up" && y + 1 < totalY) y++
        if (keyinput[i] === "down" && y - 1 > -totalY) y--

    }
  
    return [x, y]
    
}