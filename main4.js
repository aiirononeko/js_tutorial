const player = { name: "Thomas", rank: "Midshipman", age: 25 };
for (let prop in player) {
  if (!player.hasOwnProperty(prop)) continue;
  console.log(prop + ": " + player[prop]);
}

const hand = ["hoge", "fuga", "moga", "nge"];
for (let string of hand) {
  console.log(`表示される文字列は、${string}です！！！`);
}
