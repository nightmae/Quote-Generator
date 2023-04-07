const randBtn = document.getElementById("randBtn");
const rand = document.getElementById("rand");
const guy = document.getElementById("guyWho");

function adjustPositions() {
  const randHeight = rand.offsetHeight;
  const randBtnTop = rand.offsetTop + randHeight + 20; // 20 is the desired distance between #rand and #randBtn
  randBtn.style.top = randBtnTop + "px";

  const randGuyTop = rand.offsetTop + randHeight + 10; // 10 is the desired distance between #rand and #guyWho
  guy.style.top = randGuyTop + "px";
}

function generateQuote() {
  const url = "https://api.quotable.io/random";
  fetch(url)
    .then(response => response.json())
    .then(data => parseQuote(data))
    .catch(error => console.error(error));
}

function parseQuote(data) {
  rand.innerHTML = data.content;
  guy.innerHTML = `<i>${data.author}</i>`;
  adjustPositions(); // Call adjustPositions after updating the text contents
}


window.addEventListener("resize", adjustPositions);
adjustPositions();

randBtn.addEventListener("click", generateQuote);
