let wordCountInput = document.querySelector("#word-count-input");
let wordCount = document.querySelector("#word-count");
let characterCount = document.querySelector("#character-count");
let minutesCount = document.querySelector("#minutes-count");

wordCountInput.addEventListener("input", (e) => {
  characterCount.innerHTML = e.target.value.length;
  let words = e.target.value
    .trim()
    .split(" ")
    .filter((word) => {
      return word.length > 0;
    });

  wordCount.innerHTML = words.length;
  minutesCount.innerHTML = Math.round(words.length / 200);
});
