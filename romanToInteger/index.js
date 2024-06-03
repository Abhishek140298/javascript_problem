var romanToInt = function (s) {
  var finalNumber = 0;
  let numerarray = s.split("");
  //numerarray.map((n,i)=>{
  for (let i = 0; i < numerarray.length; i++) {
    switch (numerarray[i]) {
      case "M":
        //console.log("Mm",finalNumber)
        //if(numerarray[i-1]==="C"){break}
        //else{console.log("Mmm",finalNumber)

        finalNumber = finalNumber + 1000;
        //  break}
        break;
      case "D":
        finalNumber = finalNumber + 500;
        break;
      case "C":
        if (numerarray[i + 1] === "D") {
          finalNumber = finalNumber + 400;
          i++;
          break;
        } else if (numerarray[i + 1] === "M") {
          finalNumber = finalNumber + 900;
          i++;
          break;
        } else {
          finalNumber = finalNumber + 100;
          break;
        }
      case "L":
        finalNumber = finalNumber + 50;
        console.log("Number 50", finalNumber);
        break;
      case "X":
        if (numerarray[i + 1] == "L") {
          finalNumber = finalNumber + 40;
          console.log("Number 1", i, finalNumber);
          i++;
          console.log("Number 1", i);
          break;
        } else if (numerarray[i + 1] == "C") {
          finalNumber = finalNumber + 90;
          console.log("Number 1", i, finalNumber);
          i++;
          console.log("Number 1", i);
          break;
        } else {
          finalNumber = finalNumber + 10;
          break;
        }
      case "V":
        console.log("Number 5", finalNumber);
        finalNumber = finalNumber + 5;
        break;
      case "I":
        if (numerarray[i + 1] == "V") {
          finalNumber = finalNumber + 4;
          console.log("Number 1", i, finalNumber);
          i++;
          console.log("Number 1", i);
          break;
        } else if (numerarray[i + 1] == "X") {
          finalNumber = finalNumber + 9;
          console.log("Number 1", i, finalNumber);
          i++;
          console.log("Number 1", i);
          break;
        } else {
          finalNumber = finalNumber + 1;
          break;
        }

      default:
        break;
    }
  }
  return finalNumber;
};

let roman = "MCMXCIV";
const inte = romanToInt(roman);
