const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "lightskyblue";
  //   document.body.setAttribute("class", "bg-light-sky-blue");
  document.body.classList.toggle("bg-light-sky-blue");
});

const btnBaru = document.createElement("button");
const textBtnBaru = document.createTextNode("Button Baru");
btnBaru.appendChild(textBtnBaru);
btnBaru.setAttribute("type", "button");
// document.body.appendChild(btnBaru);
btn.after(btnBaru);

btnBaru.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function (e) {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  const r = xPos;
  const g = yPos;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + ", 100)";
});
