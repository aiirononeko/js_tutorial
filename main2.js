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

console.log("----------------------------------------")

// オブジェクト
const obj = {};
obj.color = "黄色";
console.log(obj.color);

obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);
console.log(obj["color"]);
console.log(obj.size);

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);
console.log(obj);
obj.SIZE = 12;
console.log(obj.SIZE);
console.log(obj["SIZE"]);
console.log(obj[SIZE]);
console.log(obj);

// プリミティブ型とオブジェクト型の違い
// 同じ文字列でもプリミティブ型の文字列とStringオブジェクトでラッパーした文字列は、(==)ではtrueとなるものの、(===)では厳密な比較がされるためfalseになる
const str_hoge = "hoge";
const wrapper_hoge = new String("hoge");
console.log(str_hoge == wrapper_hoge);
console.log(str_hoge === wrapper_hoge);

const saml = {
  name: 'Sam',
  age: 4
};
console.log(saml);

const sam2 = { name: 'Sam', age: 4 };
console.log(sam2);

console.log(saml.name === sam2.name);
console.log(saml.age === sam2.age);
console.log(saml === sam2);

const sam3 = {
  name: 'Sam',
  classification: {
    kingdom: 'Animalia',
    phyum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnicoria'
  }
};
console.log(sam3);

sam3.speak = function() { return 'Meow!'; };
console.log(sam3.speak());

delete sam3.classification;
delete sam3.speak;
console.log(sam3);

const s = 'hello';
const s2 = s.toUpperCase();
console.log(s2);

s.rating = 3;
console.log(s.rating);

// 配列
const a1 = [1, 2, 3, 4];
const a2 = [1, 'two', 3, null];
const a3 = [
  "What the hammer?",
  "In What furnace was thy brain?"
];
const a4 = [
  {
    name: "Ruby",
    hardness: 9
  },
  {
    name: "Diamond",
    hardness: 10
  }
];
const a5 = [
  [1, 3, 5],
  [2, 4, 6]
];

const a = ['a', 'b', 'c'];
console.log(a.length);
console.log(a[0]);
console.log(a[a.length - 1]);
console.log(a4[1].name);

// Dataオブジェクトについて
const now = new Date();
console.log(now);

const halloween = new Date(2016, 9, 31);
console.log(halloween);

const halloweenParty = new Date(2016, 9, 31, 19, 0);
console.log(halloweenParty.getFullYear());
console.log(halloweenParty.getMonth());
console.log(halloweenParty.getDate());
console.log(halloweenParty.getHours());
console.log(halloweenParty.getMinutes());
console.log(halloweenParty.getSeconds());
console.log(halloweenParty.getMilliseconds());

// 型変換
const numStr = "33.3";
console.log(numStr);
const num = Number(numStr);
console.log(num);

const ai = parseInt("16 volts", 10);
console.log(ai);
const bi = parseInt("3a", 16);
console.log(bi);
const ci = parseFloat("15.5 kph");
console.log(ci);

const d = new Date();
console.log(d);
const ts = d.valueOf();
console.log(ts);

const t = true;
const f = false;
const n = t ? 1 : 0;
console.log(n);
const m = f ? 1 : 0;
console.log(m);

const n3 = 33.5;
const s3 = n3.toString();

console.log(now.toString());
const arr = [1, true, "hello"];
console.log(arr.toString());

const h = 0;
const b0 = !h;
const b1 = !!h;
const b2 = Boolean(h);
console.log(h);
console.log(b0);
console.log(b1);
console.log(b2);
