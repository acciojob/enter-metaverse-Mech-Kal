const para = document.getElementById("text");
const button = document.getElementById("enterBtn");
const status = document.getElementById("status");

button.addEventListener("click", function() {
  const heading = document.createElement("h1");
  heading.textContent = "Entered Metaverse";
  status.appendChild(heading);
});
