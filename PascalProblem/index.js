const numberOfRow = 5;

function pascalTriangleFun(num) {
  let rows = [];
  for (var i = 0; i <= numberOfRow - 1; i++) {
    if (i == 0) {
      rows.push([1]);
    } else if (i === 1) {
      rows.push([1, 1]);
    } else {
      let prevRows = rows[i - 1];
      let newRows = [];
      for (var j = 0; j < prevRows.length - 1; j++) {
        let twoColumnSum = prevRows[j] + prevRows[j + 1];
        newRows.push(twoColumnSum);
      }
      rows.push([1, ...newRows, 1]);
    }
  }

  return rows;
}

var pascalTriangle = pascalTriangleFun(numberOfRow);

for (var k = 0; k <= numberOfRow - 1; k++) {
  const di = document.createElement("div");
  di.innerHTML = `<h1>${[...pascalTriangle[k]]}</h1>`;
  document.getElementById("pascal").appendChild(di);
}
