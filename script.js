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
