console.log('Twitch Bonus Channel Points Autoclicker is ready!');

// Check for the bonus chest every 5 seconds
checkBonusPoints();
setInterval(checkBonusPoints, 5000);

function checkBonusPoints() {
  // Get the bonus chest button from where it would usually be
  const [bonusChest] = document.getElementsByClassName('tw-button tw-button--success');
  // Check if the bonus chest exists, if not we're done here
  if (!bonusChest) return;
  // Click the bonus chest to claim channel points!
  bonusChest.click();
}
