// If the player wins
function winGame() {
    document.getElementById("outcome").innerText = "YOU WIN!!!";
    document.getElementById("outcome").style.fontFamily = "Honk Variable Font"; // Change font
    // Play chicken dance
    document.getElementById("chicken-dance").play();
    // Throw colored confetti
    // Add other celebratory effects
}

// If the player loses
function loseGame() {
    document.getElementById("outcome").innerText = "YOU LOSE!!!";
    document.getElementById("outcome").style.fontFamily = "Reenie Beanie, cursive"; // Change font
    // Play dead sound
    document.getElementById("dead-sound").play();
    // Open trap door and drop hangman
    // Change rope color to red
  
    document.getElementById("hangman").style.transition = "all 2s ease-in";
    document.getElementById("hangman").style.transform = "translateY(200px)";
     // Replace the stick figure hangman with x's in its eyes 
    document.getElementById("hangman").innerHTML = `
        <div class="head">X</div>
        <div class="body">X</div>
        <div class="arms">X X</div>
        <div class="legs">X X</div>`;
}
