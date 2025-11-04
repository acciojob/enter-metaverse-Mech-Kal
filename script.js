//your JS code here. If required.
function changeText() {
      const para = document.getElementById("text");
      // Replace <p> with <h1>
      const heading = document.createElement("h1");
      heading.textContent = "Entered Metaverse";
      para.replaceWith(heading);
    }