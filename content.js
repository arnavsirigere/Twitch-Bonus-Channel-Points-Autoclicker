console.log('Twitch Bonus Channel Points Autoclicker is ready!');

// Check for the bonus chest every 5 seconds
checkBonusPoints();
setInterval(checkBonusPoints, 5000);

function checkBonusPoints() {
  // Get the bonus chest button
  const bonusChest = document.querySelector('[aria-label="Claim Bonus"]');
  // Check if the bonus chest exists, if not we're done here
  if (!bonusChest) return;
  // Click the bonus chest to claim channel points!
  bonusChest.click();
}
