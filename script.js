const para = document.getElementById("text");
const button = document.getElementById("btn");

        // Attach the event listener to the button
button.addEventListener("click", function() {
            
            // 1. Create the new H1 element
const heading = document.createElement("h1");
            
            // 2. Set the content
heading.textContent = "Entered Metaverse";
            
            // 3. Replace the original paragraph with the new heading
para.replaceWith(heading);
});