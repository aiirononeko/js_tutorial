// m以上n以下のランダムな整数を返す
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

// 「サイコロ」の目を表す文字列をランダムに返す
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

let win = 0;

while (win == 0) {
  let funds = 50; //開始時の資金
  let round = 0; // ラウンド

  while (funds < 100 && funds > 0) {
    round++;
    console.log(`第${round}ラウンド: `);
    console.log(` 手持ち資金: ${funds}`);

    // 掛ける
    let bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
    let totalBet = rand(1, funds);

    if (new Date().getDate() == 3) {
      totalBet = 1;
    } else if (funds == 7) {
      totalBet = 7;
    } else {
      console.log('縁起担ぎはなし');
    };

    if (totalBet == 7) { // 全部賭ける
      totalBet = funds;
      bets.heart = totalBet;
    } else { // 掛け金を振り分ける
      let remaining = totalBet;
      do {
        let bet = rand(1, remaining);
        let face = randFace();
        bets.face += bet;
        remaining -= bet;
      } while (remaining > 0);
    }
    funds -= totalBet;

    console.log(` 賭け金: ${totalBet} (` + Object.keys(bets).map(face => `${face}: ${bets[face]}`).join(', ') + ")");

    // サイコロを振る
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
      hand.push(randFace());
    }
    console.log(` 出目: ${hand.join(', ')}`);

    // 払戻金を受け取る
    let winnigs = 0;
    for (let die = 0; die < hand.length; die++) {
      let face = hand[die];
      if (bets[face] > 0) winnigs += bets[face];
    }
    funds += winnigs;
    console.log(` 払戻金: ${winnigs}`);
  }

  console.log(` 残金: ${funds}`);
  if (100 < funds) {
    console.log("意気揚々と船に戻る。 \n");
    win++;
  } else {
    console.log("トボトボと船に帰る。\n");
  }
}
