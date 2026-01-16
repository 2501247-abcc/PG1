function startScan() {
  let btn = document.getElementById("button1");
  let reset = document.getElementById("result");

  btn.disabled = true;
  btn.textContent = "計算中";
  reset.innerHTML = "";

  setTimeout(money, 3000);
}

function money() {
  let reset = document.getElementById("result");

  let title3 = document.createElement("h3");
  title3.textContent = "計算結果が出ました";
  reset.appendChild(title3);

  let ultag = document.createElement("ul");

  // ▼ inputの値を取得（数値に変換）
  let cash = Number(document.getElementById("cash").value);
  let scholarship = Number(document.getElementById("scholarship").value);
  let parttime = Number(document.getElementById("parttime").value);

  let values = [cash, scholarship, parttime];

  // 合計
  let sum = 0;
  for (let val of values) {
    sum += val;
  }

  // 平均（小数点なし・四捨五入）
  let average = Math.round(sum / values.length);

  // 合計表示
  let sumLi = document.createElement("li");
  sumLi.textContent = "合計：" + sum + "円";
  ultag.appendChild(sumLi);

  // 平均表示
  let avgLi = document.createElement("li");
  avgLi.textContent = "平均：" + average + "円";
  ultag.appendChild(avgLi);

  reset.appendChild(ultag);

  // ボタンを戻す
  let btn = document.getElementById("button1");
  btn.textContent = "合計を計算";
  btn.disabled = false;
}
