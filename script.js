const cards = document.querySelectorAll(".game-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(1.1)";
    card.style.transition = "0.3s";

    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 300);
  });
});
window.addEventListener("load", () => {
  document.getElementById("page").classList.add("show");
});
// Add score variable
let score = 0;

// Inside draw() function, after eating a dot
dots.forEach(dot => {
  if(!dot.eaten && Math.abs(pacman.x-dot.x)<10 && Math.abs(pacman.y-dot.y)<10){
    dot.eaten = true;
    score += 10; // +10 points per dot
    document.getElementById("score").innerText = score;
  }let scorePlayer = 0;
let scoreComputer = 0;

// After each round, update
if(result.includes("You Win")){
  scorePlayer += 1;
} else if(result.includes("Computer Wins")){
  scoreComputer += 1;
}

// Display
document.getElementById("result").innerHTML = `
You chose <b>${userChoice}</b><br>
Computer chose <b>${computerChoice}</b><br><br>
<b>${result}</b><br>
Player: ${scorePlayer} | Computer: ${scoreComputer}
`;
 document.addEventListener("keydown", e => {
  if(e.code === "Space") {
    bird.dy = jump;
    document.getElementById("wing-sound").play();
  }
});
if(pipes[i].x + pipes[i].width === bird.x){
  score++;
  document.getElementById("score").innerText = score;
  document.getElementById("point-sound").play();
}
if(bird.x < pipes[i].x + pipes[i].width &&
   bird.x + bird.width > pipes[i].x &&
   bird.y < pipes[i].y + pipes[i].height &&
   bird.y + bird.height > pipes[i].y){
     document.getElementById("hit-sound").play();
     setTimeout(() => { alert("Game Over! Score: " + score); document.location.reload(); }, 100);
}  
