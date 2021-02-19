Element.prototype.remove = function () {
  if (this.parentElement) {
    this.parentElement.removeChild(this);
  }
};
