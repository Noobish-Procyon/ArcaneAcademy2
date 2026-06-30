function startZoneBattle(zoneId) {
  const enemy = spawnEnemy(zoneId);
  if (!enemy) {
    log("No enemies found.");
    return;
  }

  window.currentEnemy = enemy;
  document.getElementById("enemyName").textContent = enemy.name;
  document.getElementById("enemyHp").textContent = enemy.currentHp;
  log(`A wild ${enemy.name} appears in the ${zoneId}!`);
  generateNewQuestion();
  updateSpellList();
}

function startBossBattle(bossName) {
  const boss = spawnBoss(bossName);
  if (!boss) {
    log("Boss not found.");
    return;
  }

  window.currentBoss = boss;
  document.getElementById("enemyName").textContent = boss.name;
  document.getElementById("enemyHp").textContent = boss.currentHp;
  log(`🔥 Boss Battle: ${boss.name} begins!`);
  generateNewQuestion();
  updateSpellList();
}

window.startZoneBattle = startZoneBattle;
window.startBossBattle = startBossBattle;
