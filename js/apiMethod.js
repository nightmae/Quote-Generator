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
  const url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote";
  const script = document.createElement("script");
  script.src = url;
  document.body.appendChild(script);
}

function parseQuote(data) {
  rand.innerHTML = data.quoteText;
  guy.innerHTML = `<i>${data.quoteAuthor}</i>`;
  adjustPositions(); // Call adjustPositions after updating the text contents
}

window.addEventListener("resize", adjustPositions);
adjustPositions();

randBtn.addEventListener("click", generateQuote);
