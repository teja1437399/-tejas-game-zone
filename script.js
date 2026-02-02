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
  }
});
