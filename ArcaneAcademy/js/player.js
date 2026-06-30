function gainXp(amount) {
  save.xp += amount;

  if (save.xp >= save.xpToNext) {
    save.xp -= save.xpToNext;
    save.level++;
    save.xpToNext = Math.floor(save.xpToNext * 1.4);
    log(`🎉 Level Up! You are now Level ${save.level}.`);
    updateStats();
    updateUI();
    saveGame();
  }
}

function updateStats() {
  let baseAttack = 5;
  let baseDefense = 2;

  if (save.equipment.weapon) {
    const w = items.weapons.find(x => x.name === save.equipment.weapon);
    if (w) baseAttack += w.attack;
  }

  if (save.equipment.armor) {
    const a = items.armor.find(x => x.name === save.equipment.armor);
    if (a) baseDefense += a.defense;
  }

  save.stats.attack = baseAttack;
  save.stats.defense = baseDefense;
}

function equip(itemName) {
  const weapon = items.weapons.find(w => w.name === itemName);
  if (weapon) {
    save.equipment.weapon = itemName;
    log(`Equipped ${itemName}!`);
    updateStats();
    updateUI();
    saveGame();
    return;
  }

  const armor = items.armor.find(a => a.name === itemName);
  if (armor) {
    save.equipment.armor = itemName;
    log(`Equipped ${itemName}!`);
    updateStats();
    updateUI();
    saveGame();
    return;
  }

  log("You can't equip that.");
}

function updateUI() {
  document.getElementById("hp").textContent = `${save.hp}/${save.maxHp}`;
  document.getElementById("level").textContent = save.level;
  document.getElementById("xp").textContent = `${save.xp}/${save.xpToNext}`;
  document.getElementById("gold").textContent = save.gold;
  document.getElementById("inv").textContent =
    save.inventory.join(", ") +
    ` | Weapon: ${save.equipment.weapon || "None"} | Armor: ${save.equipment.armor || "None"}`;
}

window.gainXp = gainXp;
window.updateStats = updateStats;
window.updateUI = updateUI;
window.equip = equip;
