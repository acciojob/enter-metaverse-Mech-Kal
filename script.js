//your JS code here. If required.
const para = document.getElementById("text");
const button  = document.getElementById("btn");

button.addEventListener("click", function() {
	 const heading = document.createElement("h1");
      heading.textContent = "Entered Metaverse";
      para.replaceWith(heading);
});


     
    