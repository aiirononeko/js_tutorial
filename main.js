$(document).ready(function() {
  'use strict';
  console.log('main.jsを読み込み中...');

  paper.install(window); // paperの準備
  paper.setup(document.getElementById('mainCanvas')); // mainCanvasをキャンバスに

  let tool = new Tool();

  // Hello World
  let c = Shape.Circle(200, 200, 80); // 円
  c.fillColor = 'black'; // 黒く塗る
  let text = new PointText(200, 200);
  text.justification = 'center'; // センタリング
  text.fillColor = 'white'; // 色
  text.fontSize = 20; // フォントサイズ
  text.content = 'Hello, World!' // 文字列

  tool.inMouseDown = function(event) {
    let c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';
  }

  paper.view.draw();
})
