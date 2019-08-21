class Helper {

  /**
   * helper - pad
   * @param {*} n 
   * @param {*} width 
   * @param {*} z 
   */
  // pad the digit with 0
  // pad(value, number_of_digit);
  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
}

export default Helper;