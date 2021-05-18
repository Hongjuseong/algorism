function solution(board, moves) {
  const stack = [];
  let cnt = 0;

  // 크랭크
  for (let i = 0; i < moves.length; i++) {
    moves[i]--;
  }

  // 인형뽑기
  for (let i = 0; i < moves.length; i++) {
    
    for (let j = 0; j < board.length; j++) {
      const doll = board[j][moves[i]];

      if (doll) {
        const lastDoll = stack[stack.length - 1];

        if (lastDoll === doll) {
          stack.pop();
          cnt++;
        } else {
          stack.push(doll);
        }

        board[j][moves[i]] = 0;
        break;
      }
    }
  }

  return cnt * 2;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));
