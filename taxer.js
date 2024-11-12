let ontario = document.getElementById("ontario");
let nb = document.getElementById("nb");
let yourincome = document.getElementById("yourincome");
let extraincome = document.getElementById("extraincome");
let otherincome = document.getElementById("otherincome");
let rrsp = document.getElementById("rrsp");
let totalincome = document.getElementById("totalincome");
let federealtax = document.getElementById("federealtax");
let provincialtaxes = document.getElementById("provincialtaxes");
let cpp = document.getElementById("cpp");
let aftertaxes = document.getElementById("aftertaxes");

//NB BUTTON
nb.addEventListener("click", () => {
  totalincome.innerHTML =
    Number(yourincome.value) +
    Number(extraincome.value) +
    Number(otherincome.value) -
    Number(rrsp.value);
  //FEDERAL TAXES
  let federals;
  if (totalincome.innerHTML <= 53359) {
    //15% on the first $53,359
    federals = (totalincome.innerHTML * 0.15).toFixed(2);
    federealtax.innerHTML = federals;
  } else if (totalincome.innerHTML > 53359 && totalincome.innerHTML < 106717) {
    //20.5% on the next $53,359 (from $53,359 to $106,717)
    federals = (53359 * 0.15 + (yourincome.value - 53359) * 0.205).toFixed(2);
    federealtax.innerHTML = federals;
  } else if (totalincome.innerHTML > 106717 && totalincome.innerHTML < 165251) {
    //26% on the next $58,534 (from $106,717 to $165,251)
    federals = (
      53359 * 0.15 +
      53359 * 0.205 +
      Math.abs(106717 - yourincome.value) * 0.26
    ).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow3");
  } else if (totalincome.innerHTML > 165251 && totalincome.innerHTML < 229784) {
    //29% on the next $64,533 (from $165,251 to $229,784)
    federals = (
      58534 * 0.26 +
      53359 * 0.15 +
      53359 * 0.205 +
      Math.abs((165251 - yourincome.value) * 0.29)
    ).toFixed(2);
    federealtax.innerHTML = federals;
  } else {
    //33% on income over $229,784
    federals = (
      58534 * 0.26 +
      53359 * 0.15 +
      53359 * 0.205 +
      64533 * 0.29 +
      Math.abs(229784 - yourincome.value) * 0.33
    ).toFixed(2);
    federealtax.innerHTML = federals;
  }

  //PROVINCIAL TAXES
  let province;
  ////0% on the first $11720
  if (totalincome.innerHTML < 11720) {
    province = (Math.abs(yourincome.value) * 0).toFixed(2); //provincialtaxes.innerHTML
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //9.68% on the next $44,178 (from $11,720 to $55,898)
  else if (totalincome.innerHTML < 55898 && totalincome.innerHTML > 11720) {
    province = (0 + Math.abs((yourincome.value - 11720) * 0.0968)).toFixed(2); //provincialtaxes.innerHTML
    provincialtaxes.innerHTML = province;

    console.log(province);
  }

  //14.82% on the next $57,150 (from $55,898 to $113,048)
  else if (totalincome.innerHTML > 55898 && totalincome.innerHTML < 113048) {
    province = (
      11720 * 0 +
      44178 * 0.0968 +
      Math.abs(yourincome.value - 55898) * 0.1482
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    // console.log(province);
  }

  //16.52% on the next $42,207 (from $113,048 to $155,255)
  else if (totalincome.innerHTML > 113048 && totalincome.innerHTML < 155255) {
    province = (
      11720 * 0 +
      44178 * 0.0968 +
      42207 * 0.1482 +
      Math.abs(yourincome.value - 113048) * 0.1652
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    // console.log(province);
  }

  //17.84% on income over $155,255
  else {
    province = (
      11720 * 0 +
      44178 * 0.0968 +
      42207 * 0.1482 +
      42207 * 0.1316 +
      Math.abs(yourincome.value - 155255) * 0.1784
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    // console.log(province);
  }

  //CPP
  let max_contribution;
  let cpp_contribution;
  if (yourincome.value > 66600) {
    max_contribution = yourincome.value - 3500;
    cpp_contribution = max_contribution * 0.0595;
    cpp.innerHTML = cpp_contribution;
  } else {
    max_contribution = yourincome.value;
    cpp_contribution = max_contribution * 0.0595;
    cpp.innerHTML = cpp_contribution;
  }

  aftertaxes.innerHTML = (
    Number(yourincome.value) -
    [Number(cpp_contribution) + Number(province) + Number(federals)]
  ).toFixed(2);
});
//ONTARIO BUTTON
ontario.addEventListener("click", () => {
  totalincome.innerHTML =
    Number(yourincome.value) +
    Number(extraincome.value) +
    Number(otherincome.value) -
    Number(rrsp.value);
  //FEDERAL TAXES
  let federals;
  if (totalincome.innerHTML <= 53359) {
    //15% on the first $53,359
    federals = (totalincome.innerHTML * 0.15).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow1");
  } else if (totalincome.innerHTML > 53359 && totalincome.innerHTML < 106717) {
    //20.5% on the next $53,359 (from $53,359 to $106,717)
    federals = (53359 * 0.15 + (yourincome.value - 53359) * 0.205).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow2");
  } else if (totalincome.innerHTML > 106717 && totalincome.innerHTML < 165251) {
    //26% on the next $58,534 (from $106,717 to $165,251)
    federals = (
      53359 * 0.15 +
      53359 * 0.205 +
      Math.abs(106717 - yourincome.value) * 0.26
    ).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow3");
  } else if (totalincome.innerHTML > 165251 && totalincome.innerHTML < 229784) {
    //29% on the next $64,533 (from $165,251 to $229,784)
    federals = (
      58534 * 0.26 +
      53359 * 0.15 +
      53359 * 0.205 +
      Math.abs((165251 - yourincome.value) * 0.29)
    ).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow4");
  } else {
    //33% on income over $229,784
    federals = (
      58534 * 0.26 +
      53359 * 0.15 +
      53359 * 0.205 +
      64533 * 0.29 +
      Math.abs(229784 - yourincome.value) * 0.33
    ).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow5");
  }

  //PROVINCIAL TAXES
  let province;
  ////5.05% on the first $49,630
  if (totalincome.innerHTML < 49630) {
    province = (Math.abs(yourincome.value - 49630) * 0.0505).toFixed(2); //provincialtaxes.innerHTML
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //9.15% on the next $11,300 (up to $60,930)
  else if (totalincome.innerHTML > 49630 && totalincome.innerHTML < 60930) {
    province = (
      49630 * 0.0505 +
      Math.abs((yourincome.value - 49630) * 0.0915)
    ).toFixed(2); //provincialtaxes.innerHTML
    provincialtaxes.innerHTML = province;
    console.log("wow2");
    console.log(province);
  }

  //11.16% on the next $11,850 (up to $72,780)
  else if (totalincome.innerHTML > 60930 && totalincome.innerHTML < 72780) {
    province = (
      49630 * 0.0505 +
      (11, 300 * 0.0915) +
      Math.abs(yourincome.value - 72780) * 0.1116
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //12.16% on the next $22,520 (up to $95,300)
  else if (totalincome.innerHTML > 72780 && totalincome.innerHTML < 95300) {
    province = (
      49630 * 0.0505 +
      (11, 300 * 0.0915) +
      12390 * 0.1116 +
      Math.abs(yourincome.value - 95300) * 0.1216
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //13.16% on income over $95,300
  else {
    //(49630*0.0505)+(11,300*0.0915)+(12390*.1116)+(22520*.1216)+(Math.abs(yourincome.value-95300)*.1316)
    province = (
      49630 * 0.0505 +
      (11, 300 * 0.0915) +
      12390 * 0.1116 +
      22520 * 0.1216 +
      Math.abs(yourincome.value - 95300) * 0.1316
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //CPP
  let max_contribution;
  let cpp_contribution;
  if (yourincome.value > 66600) {
    max_contribution = yourincome.value - 3500;
    cpp_contribution = max_contribution * 0.0595;
    cpp.innerHTML = cpp_contribution;
  } else {
    max_contribution = yourincome.value;
    cpp_contribution = max_contribution * 0.0595;
    cpp.innerHTML = cpp_contribution;
  }

  aftertaxes.innerHTML =
    Number(yourincome.value) -
    [Number(cpp_contribution) + Number(province) + Number(federals)];
  console.log(province);
  console.log(federals);
  console.log(cpp_contribution);
  console.log(yourincome.value);
});
//QUEBEC BUTTON
document.getElementById("quebec").addEventListener("click", () => {
  totalincome.innerHTML =
    Number(yourincome.value) +
    Number(extraincome.value) +
    Number(otherincome.value) -
    Number(rrsp.value);
  //FEDERAL TAXES
  let federals;
  if (totalincome.innerHTML <= 53359) {
    //15% on the first $53,359
    federals = (totalincome.innerHTML * 0.15).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow1");
  } else if (totalincome.innerHTML > 53359 && totalincome.innerHTML < 106717) {
    //20.5% on the next $53,359 (from $53,359 to $106,717)
    federals = (53359 * 0.15 + (yourincome.value - 53359) * 0.205).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow2");
  } else if (totalincome.innerHTML > 106717 && totalincome.innerHTML < 165251) {
    //26% on the next $58,534 (from $106,717 to $165,251)
    federals = (
      53359 * 0.15 +
      53359 * 0.205 +
      Math.abs(106717 - yourincome.value) * 0.26
    ).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow3");
  } else if (totalincome.innerHTML > 165251 && totalincome.innerHTML < 229784) {
    //29% on the next $64,533 (from $165,251 to $229,784)
    federals = (
      58534 * 0.26 +
      53359 * 0.15 +
      53359 * 0.205 +
      Math.abs((165251 - yourincome.value) * 0.29)
    ).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow4");
  } else {
    //33% on income over $229,784
    federals = (
      58534 * 0.26 +
      53359 * 0.15 +
      53359 * 0.205 +
      64533 * 0.29 +
      Math.abs(229784 - yourincome.value) * 0.33
    ).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow5");
  }

  //PROVINCIAL TAXES
  let province;
  //15% on the first $49,275
  if (totalincome.innerHTML < 49275) {
    province = (Math.abs(yourincome.value) * 0.15).toFixed(2); //provincialtaxes.innerHTML
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //20% on the next $44,178 (from $49,275 to $98540)
  else if (totalincome.innerHTML > 49275 && totalincome.innerHTML < 98540) {
    province = (
      49275 * 0.15 +
      Math.abs((yourincome.value - 49275) * 0.2)
    ).toFixed(2); //provincialtaxes.innerHTML
    provincialtaxes.innerHTML = province;
    console.log("masti");
    console.log(province);
  }

  //24% on the next $11200 (from $98,540 to $109,740)
  else if (totalincome.innerHTML > 55898 && totalincome.innerHTML < 113048) {
    province = (
      49275 * 0.15 +
      49275 * 0.2 +
      Math.abs(yourincome.value - 98540) * 0.24
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //25.75% on income over $109740
  else {
    province = (
      49275 * 0.15 +
      49275 * 0.2 +
      11200 * 0.24 +
      Math.abs(yourincome.value - 109740) * 0.2575
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //CPP
  let max_contribution;
  let cpp_contribution;
  if (yourincome.value < 66600) {
    max_contribution = yourincome.value - 3500;
    cpp_contribution = max_contribution * 0.0595;
    cpp.innerHTML = cpp_contribution;
  } else {
    max_contribution = 66600 - 3500;
    cpp_contribution = max_contribution * 0.0595;
    cpp.innerHTML = cpp_contribution;
  }

  aftertaxes.innerHTML =
    Number(yourincome.value) -
    [Number(cpp_contribution) + Number(province) + Number(federals)];
  console.log(province);
  console.log(federals);
  console.log(cpp_contribution);
  console.log(yourincome.value);
});
//ALBERTA
document.getElementById("alberta").addEventListener("click", () => {
  totalincome.innerHTML =
    Number(yourincome.value) +
    Number(extraincome.value) +
    Number(otherincome.value) -
    Number(rrsp.value);
  //FEDERAL TAXES
  let federals;
  if (totalincome.innerHTML <= 53359) {
    //15% on the first $53,359
    federals = (totalincome.innerHTML * 0.15).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow1");
  } else if (totalincome.innerHTML > 53359 && totalincome.innerHTML < 106717) {
    //20.5% on the next $53,359 (from $53,359 to $106,717)
    federals = (53359 * 0.15 + (yourincome.value - 53359) * 0.205).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow2");
  } else if (totalincome.innerHTML > 106717 && totalincome.innerHTML < 165251) {
    //26% on the next $58,534 (from $106,717 to $165,251)
    federals = (
      53359 * 0.15 +
      53359 * 0.205 +
      Math.abs(106717 - yourincome.value) * 0.26
    ).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow3");
  } else if (totalincome.innerHTML > 165251 && totalincome.innerHTML < 229784) {
    //29% on the next $64,533 (from $165,251 to $229,784)
    federals = (
      58534 * 0.26 +
      53359 * 0.15 +
      53359 * 0.205 +
      Math.abs((165251 - yourincome.value) * 0.29)
    ).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow4");
  } else {
    //33% on income over $229,784
    federals = (
      58534 * 0.26 +
      53359 * 0.15 +
      53359 * 0.205 +
      64533 * 0.29 +
      Math.abs(229784 - yourincome.value) * 0.33
    ).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow5");
  }

  //PROVINCIAL TAXES
  let province;
  //0% on the first $19,369
  if (totalincome.innerHTML < 19369) {
    province = (Math.abs(yourincome.value) * 0).toFixed(2); //provincialtaxes.innerHTML
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //10% on the next $40,000 (from $19,369 to $59,369)
  else if (totalincome.innerHTML > 49275 && totalincome.innerHTML < 98540) {
    province = (0 + Math.abs((yourincome.value - 19369) * 0.1)).toFixed(2); //provincialtaxes.innerHTML
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //12% on the next $50,000 (from $59,369 to $109,369)
  else if (totalincome.innerHTML > 55898 && totalincome.innerHTML < 113048) {
    province = (
      0 +
      0.1 * 40000 +
      Math.abs(yourincome.value - 59369) * 0.12
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    console.log(province);
  }
  //13% on the next $100,000 (from $109,369 to $209,369)
  else if (totalincome.innerHTML > 109369 && totalincome.innerHTML < 209369) {
    province = (
      0 +
      0.1 * 40000 +
      0.12 * 50000 +
      Math.abs(yourincome.value - 109369) * 0.13
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //14% on income over $209,369
  else {
    province = (
      0 +
      0.1 * 40000 +
      0.12 * 50000 +
      0.13 * 100000 +
      Math.abs(yourincome.value - 209369) * 0.2575
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //CPP
  let max_contribution;
  let cpp_contribution;
  if (yourincome.value > 66600) {
    max_contribution = yourincome.value - 3500;
    cpp_contribution = max_contribution * 0.0595;
    cpp.innerHTML = cpp_contribution;
  } else {
    max_contribution = yourincome.value;
    cpp_contribution = max_contribution * 0.0595;
    cpp.innerHTML = cpp_contribution;
  }

  aftertaxes.innerHTML =
    Number(yourincome.value) -
    [Number(cpp_contribution) + Number(province) + Number(federals)];
  console.log(province);
  console.log(federals);
  console.log(cpp_contribution);
  console.log(yourincome.value);
});
//BRITISH COLUMBIA
document.getElementById("bc").addEventListener("click", () => {
  totalincome.innerHTML =
    Number(yourincome.value) +
    Number(extraincome.value) +
    Number(otherincome.value) -
    Number(rrsp.value);
  //FEDERAL TAXES
  let federals;
  if (totalincome.innerHTML <= 53359) {
    //15% on the first $53,359
    federals = (totalincome.innerHTML * 0.15).toFixed(2);
    federealtax.innerHTML = federals;
  } else if (totalincome.innerHTML > 53359 && totalincome.innerHTML < 106717) {
    //20.5% on the next $53,359 (from $53,359 to $106,717)
    federals = (53359 * 0.15 + (yourincome.value - 53359) * 0.205).toFixed(2);
    federealtax.innerHTML = federals;
    console.log("wow2");
  } else if (totalincome.innerHTML > 106717 && totalincome.innerHTML < 165251) {
    //26% on the next $58,534 (from $106,717 to $165,251)
    federals = (
      53359 * 0.15 +
      53359 * 0.205 +
      Math.abs(106717 - yourincome.value) * 0.26
    ).toFixed(2);
    federealtax.innerHTML = federals;
  } else if (totalincome.innerHTML > 165251 && totalincome.innerHTML < 229784) {
    //29% on the next $64,533 (from $165,251 to $229,784)
    federals = (
      58534 * 0.26 +
      53359 * 0.15 +
      53359 * 0.205 +
      Math.abs((165251 - yourincome.value) * 0.29)
    ).toFixed(2);
    federealtax.innerHTML = federals;
  } else {
    //33% on income over $229,784
    federals = (
      58534 * 0.26 +
      53359 * 0.15 +
      53359 * 0.205 +
      64533 * 0.29 +
      Math.abs(229784 - yourincome.value) * 0.33
    ).toFixed(2);
    federealtax.innerHTML = federals;
   
  }

  //PROVINCIAL TAXES
  let province;
  //5.06% on the first $47630
  if (totalincome.innerHTML < 47630) {
    province = (0.0506*Math.abs(yourincome.value)).toFixed(2); //provincialtaxes.innerHTML
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //7.7% on the next $43,005 (from $47630 to $95259)
  else if (totalincome.innerHTML > 47630 && totalincome.innerHTML < 95259) {
    province = ((0.0506*47630) + (Math.abs(yourincome.value - 47630) * 0.0707)).toFixed(2); //provincialtaxes.innerHTML
    provincialtaxes.innerHTML = province;
  }

  //10.5% on the next $20,741 (from $95259 to $116000)
  else if (totalincome.innerHTML > 95259 && totalincome.innerHTML < 116000) {
    province = (
      0 +(0.0506 * 47630) +(47,629*0.0707)+
      Math.abs(yourincome.value - 20741) * 0.105
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
  }
  //12.29% on the next $41748 (from $116000 to $157748)
  else if (totalincome.innerHTML > 109369 && totalincome.innerHTML < 209369) {
    province = (
      0 +(0.0506 * 47630) +(47,629*0.0707)+(20741*.105)+
      (Math.abs(yourincome.value - 41748) * 0.1229)
    ).toFixed(2);
    provincialtaxes.innerHTML = province;
  }

//14.7% for next 12,003 from 157748 to 170751
else if (totalincome.innerHTML > 157748 && totalincome.innerHTML < 170751) {
  province = (
    0 +(0.0506 * 47630) +(47,629*0.0707)+(20741*.105)+(41748*.1229)
   +(Math.abs(yourincome.value -12003) * 0.147)
  ).toFixed(2);
  provincialtaxes.innerHTML = province;
}

//16.8% for next 51669 from 170751 to 222420
else if (totalincome.innerHTML > 170751 && totalincome.innerHTML < 222420) {
  province = (
    0 +(0.0506 * 47630) +(47,629*0.0707)+(20741*.105)+(41748*.1229)+(12003*.147)+
    (Math.abs(yourincome.value -51669) * 0.168)
  ).toFixed(2);
  provincialtaxes.innerHTML = province;
}
// over 222420
  else {
    province = ((0.0506 * 47630) +(47,629*0.0707)+(20741*.105)+(41748*.1229)+(12003*.147)+(51669*.168)+(Math.abs(yourincome.value)*0.205)).toFixed(2);
    provincialtaxes.innerHTML = province;
    console.log(province);
  }

  //CPP
  let max_contribution;
  let cpp_contribution;
  if (yourincome.value > 66600) {
    max_contribution = yourincome.value - 3500;
    cpp_contribution = max_contribution * 0.0595;
    cpp.innerHTML = cpp_contribution;
  } else {
    max_contribution = yourincome.value;
    cpp_contribution = max_contribution * 0.0595;
    cpp.innerHTML = cpp_contribution;
  }

  aftertaxes.innerHTML =
    Number(yourincome.value) -
    [Number(cpp_contribution) + Number(province) + Number(federals)];

});
