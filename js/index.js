const randBtn = document.getElementById("randBtn");
const rand = document.getElementById("rand");
const guy = document.getElementById("guyWho");


function adjustButtonPosition() {
  const randHeight = rand.offsetHeight;
  const randBtnTop = rand.offsetTop + randHeight + 20; // 20 is the desired distance between #rand and #randBtn
  randBtn.style.top = randBtnTop + "px";
}
function adjustGuyPos() {
    const randHeight = rand.offsetHeight;
    const randGuyTop = rand.offsetTop + randHeight + 10; // 20 is the desired distance between #rand and #randBtn
    guy.style.top = randGuyTop + "px";
}

window.addEventListener("resize", adjustButtonPosition, adjustGuyPos);
adjustButtonPosition();
adjustGuyPos();

