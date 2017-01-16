class CalculatorFactory {


  constructor() {

    this.list = [];
    this.dateOfBirth = 0;
    this.gender = "";

    this.possibilities = [
      [1, 2, 3, 0],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];

		return this;

	}


  init(dateOfBirth, gender) {
    const self = this;
    self.list = [];

    self.setDateOfBirth(dateOfBirth);
    self.setGender(gender);
    self.recursiveSearch();

    return self.list;
  }


  setGender(gender) {
    const self = this;
    self.gender = gender;
    self.updateLastDigitPossibilities(gender);
  }


  setDateOfBirth(dateOfBirth) {
    const self = this;
    self.dateOfBirth = dateOfBirth;
  }


  updateLastDigitPossibilities(gender) {
    const self = this;
    if(gender === "male"){
      self.possibilities[3] = [1, 3, 5, 7, 9];
    } else if(gender === "female"){
      self.possibilities[3] = [0, 2, 4, 6, 8];
    }
  }


  recursiveSearch(depth, partialCpr) {
    const self = this;
    partialCpr = partialCpr || "";
    depth = depth || 0;
    for (let [index, possibility] of self.possibilities[depth].entries()) {
      if (depth < 3) {
        // partialCpr is less than 3 digits
        const nextpartialCpr = partialCpr + "" + possibility;
        const nextDepth = depth + 1;
        self.recursiveSearch(nextDepth, nextpartialCpr);
      } else {
        // partialCpr is 3 digits. Add the last digit
        const cpr = partialCpr + "" + self.possibilities[3][index];
        // cpr partialCpr is valid
        if (self.validateCPR(cpr)) self.list.push(cpr);
      }
    }
  }


  validateCPR(cpr) {
    const fullcpr = this.dateOfBirth + cpr;
    let factors = [4, 3, 2, 7, 6, 5, 4, 3, 2, 1];
    let sum = 0;
    for (let [index, factor] of factors.entries()) {
      sum += fullcpr.substring(index, index + 1) * factor;
    }
    // pass modulus 11 test?
    return sum % 11 !== 0 ? false : true;
  }


}


let Calculator = new CalculatorFactory();
export default Calculator;
