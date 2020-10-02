console.log('Twitch Bonus Channel Points Autoclicker is ready!');

// Check for the bonus chest every 5 seconds
checkBonusPoints();
setInterval(checkBonusPoints, 5000);

function checkBonusPoints() {
  // Get the div for the button
  const bonusPointsDiv = document.getElementsByClassName('tw-button tw-button--success tw-interactive');
  // Check if the bonus chest exists, if not we're done here
  if (!bonusPointsDiv.length) return;
  // Get the bonus chest from the div
  const [bonusChest] = bonusPointsDiv;
  // Click the bonus chest to claim channel points!
  bonusChest.click();
}
