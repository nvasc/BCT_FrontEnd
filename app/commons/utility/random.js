const random = {
  guid(char) {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    /*eslint-disable */
    if (char === undefined || char === null || typeof (char) !== 'string') {
      char = '-';
    }
    /*eslint-enable */
    return s4() + s4() + char + s4() + char + s4() + char + s4() + char + s4() + s4() + s4();
  },
  randomeString(numberDigit) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    /*eslint-disable */
    if (numberDigit === undefined || numberDigit === null || typeof (numberDigit) !== 'number') {
      numberDigit = 6;
    }
    /*eslint-enable */

    for (var i = 0; i < numberDigit; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}

export default random;
