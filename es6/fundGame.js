//보조함수
//m~n 의 무작위 정수 반환
function rand(m, n) {
  return m + Math.floor(Math.random() * (n - m + 1));
}

//여섯가지 도형중 하나 반환
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"]
      [rand(0, 5)];
}


let funds = 25; //시작 자본
let rounds = 0;

while (funds > 1 && funds < 50) {
  rounds++;
  console.log(`round ${rounds}:`);
  console.log(`\tstarting funds: ${funds}pence`);
  //돈을건다
  const bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
  let totalBet = rand(1, funds);
  console.log(`totalBet this round : ${totalBet}`);
  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
    console.log('all in!');
  } else {
    let remaining = totalBet;
    do {
      let bet = rand(1, remaining);
      let face = randFace();
      console.log(`\t${bet} in ${face}`);
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
      console.log(`\tremaining bet : ${remaining}`);
    } while (remaining > 0);
  }
  funds = funds - totalBet;
  console.log('\t bets per face: ' + Object.keys(bets).map(face => `${face}: ${bets[face]}pence`).join(', ') + ` (total : ${totalBet}pence)`);
  console.log(`\t remaining funds : ${funds}pence`);
  //주사위를 굴린다.

  const hand = [];
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }
  console.log(`\t hand: ${hand.join(', ')}`);

  //그림이 맞으면 돈을 얻는다.

  let winnings = 0;
  for (let die = 0; die < hand.length; die++) {
    let face = hand[die];
    if (bets[face] > 0) {
      winnings = winnings + bets[face]
    }
  }
  funds = funds + winnings;
  console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds : ${funds}`);

