var i = 0;

var perc = 0;

function buttonClick6() {

  perc += +document.getElementById("donation").value;
  document.getElementById('here').innerHTML = percentage(perc) + "%";
  document.getElementById('demo2').style.height = (125 - percentage(perc)) + "%";
}

function buttonClick5() {
  i += +document.getElementById("donation").value;
  document.getElementById('demo').innerHTML = "€" + i;
  document.getElementById('demo2').innerHTML = "€" + i
}

function percentage(per) {
  return (100 / 200) * per;
}



;
