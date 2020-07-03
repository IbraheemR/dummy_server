const WORD_BOX = document.getElementById("word");

function newWord() {
  fetch("word")
    .then((res) => res.json())
    .then((json) => json.word)
    .then((word) => {
      WORD_BOX.innerHTML = word;
      WORD_BOX.classList.remove("bad");
    })
    .catch((err) => {
      WORD_BOX.innerHTML = "Bad words!!";
      WORD_BOX.classList.add("bad");
    });
}

newWord();
setInterval(newWord, 1000);
