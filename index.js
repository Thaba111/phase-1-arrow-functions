// Function expression for divide
const divide = () => {
    // Divides 2000 by 100
    return 2000 / 100;
  };
  
  // Arrow function for square
  const square = (num) => {
    return num * num;
  };
  
  // Arrow function for add
  const add = (a, b) => {
    return a + b;
  };
  
  // Exporting the functions for testing
  module.exports = {
    divide,
    square,
    add
  };
  