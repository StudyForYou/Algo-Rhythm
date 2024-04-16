/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12985
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @returns 팀번호가 1~n까지 있고 토너먼트로 게임을 할때, a와 b가 만나는 턴
 */
function solution(n, a, b) {
  let team = new Array(n).fill().map((_, i) => i + 1);
  let turn = 0;

  while (team.length > 1) {
    //토너먼트 하면서 한명씩 제거하고 마지막 한명이 남을때 까지 반복할거야
    turn++;
    let newTeam = [];

    for (let i = 0; i < team.length; i += 2) {
      let team_1 = team[i],
        team_2 = team[i + 1];

      if (i + 1 === team.length) {
        //팀갯수가 홀수일때, 마지막 팀은 자동으로 진출
        newTeam.push(team[i]);
        break;
      }

      if ((team_1 === a && team_2 === b) || (team_1 === b && team_2 === a)) {
        //a,b가 만나게 되면 해당 turn을 리턴
        return turn;
      }

      if (team_1 === a || team_1 === b) {
        //a or b를 만나게 되면 그 팀을 올림
        newTeam.push(team_1);
      } else if (team_2 === a || team_2 === b) {
        newTeam.push(team_2);
      } else {
        // 둘다아닌경우 그냥 team_1(아무팀이나)올림
        newTeam.push(team_1);
      }
    }
    team = newTeam; //턴 한번 돌고나면 기존팀을 토너먼트 이긴 팀으로 구성된 newTeam으로 변경
  }
  return turn;
}
