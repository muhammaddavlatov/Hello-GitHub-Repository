const form = document.getElementById("friendForm");
const result = document.getElementById("result");
const heart = document.getElementById("heart");

const colorCodes = {
  Pink: "#ff5b89",
  Purple: "#a879ff",
  Blue: "#58aaff",
  Red: "#ff4545",
  Green: "#5cdb9a",
  Black: "#eeeeee",
  White: "#ffffff",
  Yellow: "#ffe066"
};

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const getValue = id =>
    document.getElementById(id).value.trim();

  const name = getValue("name");
  const color = getValue("color");

  document.getElementById("greeting").textContent =
    A little more about ${name} ♡;

  document.getElementById("resultText").textContent =
    Your favorite color is ${color}. Every little detail helps tell your story!;

  const questions = [
    ["A little thing that makes you smile ☀️", "smile"],
    ["Your personality 🌷", "personality"],
    ["What comforts you 🤍", "comfort"],
    ["A dream of yours 🌙", "dream"],
    ["What matters in friendship 🫶", "friendship"],
    ["Your song lately 🎧", "song"],
    ["What people misunderstand 💭", "misunderstood"],
    ["Something else about you 💌", "message"]
  ];

  const answers = document.getElementById("answers");
  answers.replaceChildren();

  questions.forEach(([question, id]) => {
    const value = getValue(id);

    if (!value) return;

    const item = document.createElement("div");
    item.className = "answer-item";

    const title = document.createElement("strong");
    title.textContent = question;

    const answer = document.createElement("p");
    answer.textContent = value;

    item.append(title, answer);
    answers.appendChild(item);
  });

  heart.style.color = colorCodes[color] || "#ff5b89";
  heart.style.filter =
    drop-shadow(0 0 15px ${colorCodes[color] || "#ff5b89"});

  form.hidden = true;
  result.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("again").addEventListener("click", function() {
  result.hidden = true;
  form.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
});