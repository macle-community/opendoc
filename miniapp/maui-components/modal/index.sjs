function getDirection(
  primaryButtonText,
  secondaryButtonText,
  cancelButtonText,
  type
) {
    var buttons = [primaryButtonText, secondaryButtonText, cancelButtonText];
    var activeButtons = [];
    if (primaryButtonText) {
      activeButtons.push(primaryButtonText);
    }

    if (secondaryButtonText) {
      activeButtons.push(secondaryButtonText);
    }

    if (cancelButtonText) {
      activeButtons.push(cancelButtonText);
    }

    if (activeButtons.length === 0) {
      return '';
    }

    if (activeButtons.length === 1 || activeButtons.length === 3) {
      return 'vertical';
    }

    return type === 'focus' ? 'vertical' : 'horizontal';
}

module.exports = {
  getDirection: getDirection
};
