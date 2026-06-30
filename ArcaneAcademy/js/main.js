window.onload = () => {
  console.log("Arcane Academy RPG Loaded.");
  updateStats();
  updateUI();
  drawTileMap();
  setupButtons();
};

function setupButtons() {
  const castBtn = document.getElementById("castBtn");
  castBtn.onclick = () => castSpell();
}

function log(msg) {
  document.getElementById("log").textContent = msg;
}

window.debug = {
  giveGold(amount = 100) {
    save.gold += amount;
    updateUI();
    saveGame();
    log(`Debug: Added ${amount} gold.`);
  },
  giveItem(item = "Potion") {
    save.inventory.push(item);
    updateUI();
    saveGame();
    log(`Debug: Added item ${item}.`);
  },
  levelUp() {
    gainXp(save.xpToNext);
    updateUI();
    saveGame();
    log("Debug: Level up!");
  }
};

log("Welcome to Arcane Academy! Use arrow keys to move and step on tiles to explore.");
