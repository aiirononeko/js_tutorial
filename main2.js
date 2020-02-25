let room1 = "会議室"; // "会議室はリテラル"
console.log(room1); // 「会議室が出力される」
let currentRoom = room1; // これでcurrentRoomにはroom1と同じ値（"会議室"が入る）
console.log(currentRoom); // 「会議室が出力される」

// プリミティブ型 = 値が不変
// 数値、文字列、真偽値、null、undefined、シンボル

// オブジェクト = 値が変わる
// 配列、日時、正規表現、マップとウィークマップ、セットとウィークセット

const x = 0.1 + 0.2;
console.log(x);

let count = 10;
console.log(count); // 10

const blue = 0x0000ff; // 16進数
console.log(blue); // 255

const umask = 0o0022; // 8進数
console.log(umask); // 18

const roomTemp = 21.5;
console.log(roomTemp); // 21.5

const c = 3.0e6; // 指数表記（3.0 * 10 ** 6）
console.log(c); // 30000000

const e = -1.6e-19; // 指数表記（-1.6 * 10 ** -19）
console.log(e); // -1.6e-19

const inf = Infinity;
console.log(inf);

const ninf = -Infinity;
console.log(ninf);

const nan = NaN; // Not a Numberの意
console.log(nan);

console.log(1 / 0); // Infinity = 無限大
console.log(-1 / 0); // -Infinity = 負の無限大

const small = Number.EPSILON; // 1と、1より大きい最小の値の差
console.log(small);

const bigInt = Number.MAX_SAFE_INTEGER; // 表現できる最大の整数
console.log(bigInt);

const max = Number.MAX_VALUE; // 表現できる最大の数値
console.log(max);

const minInt = Number.MIN_SAFE_INTEGER; // 表現できる最小の整数
console.log(minInt);

const min = Number.MIN_VALUE; // 表現できる最小の数値
console.log(min);

const nInf = Number.NEGATIVE_INFINITY; // -Infinity
console.log(nInf);

const nannan = Number.NaN;
console.log(nannan);

const pinf = Number.POSITIVE_INFINITY;
console.log(pinf);

console.log("He looked up and said \"dont do that!\" to Max");
console.log(`He looked up and said "dont do that!" to Max.`);

// テンプレートリテラル
let currentTemp = 19.5;
const message = `現在の温度は${currentTemp}℃です`;
console.log(message);

const multiple = "現在の温度は\n" +
  `${currentTemp}℃です。\n` +
  "もうじき暖かくなります";
console.log(multiple);

// 文字列としての数値
const result1 = 3 + '30';
console.log(result1);
const result2 = 3 * '30';
console.log(result2);

// シンボルについて
const RED = Symbol();
const BLUE = Symbol();
const ORENGE = Symbol('夕日の色');
console.log(RED);
console.log(BLUE);
console.log(ORENGE);
console.log(RED == BLUE);

let hoge;
console.log(hoge);
hoge = null;
console.log(hoge);


