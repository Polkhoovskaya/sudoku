module.exports = function solveSudoku(matrix) {

  let inUse = {};
  let keysNumber;
  let emptySpaces = 0;

  for (let v = 0; v < matrix.length; v++) {
    for (let h = 0; h < matrix.length; h++) {
      if (matrix[v][h] === 0) {
        inUse = {};

        for (let i = 0; i < 9; i++) {
          if (matrix[v][i] > 0) {
            inUse[matrix[v][i]] = true;
          }

          if (matrix[i][h] > 0) {
            inUse[matrix[i][h]] = true;
          }
        }
     
        for (let col = Math.floor(v / 3) * 3; col < Math.floor(v / 3) * 3 + 3; col++) {
          for (let row = Math.floor(h / 3) * 3; row < Math.floor(h / 3) * 3 + 3; row++) {
            if (matrix[col][row] > 0) {
              inUse[matrix[col][row]] = true;
            }
          }
        }

        keysNumber = Object.keys(inUse);
        console.log(keysNumber);
        if (keysNumber.length === 8) {
          for (let i = 1; i < 10; i++) {
            if (keysNumber.indexOf(i.toString()) < 0) {
              matrix[v][h] = i;
              console.log(v, h, i);
            }
          }
        } 
        // else if (keysNumber.length < 8) {// рассчитано на не сложные судоку 
        //   emptySpaces++;
        // }
      }
    }
  }
  console.log(emptySpaces);
  if (emptySpaces !== 0) {
    solveSudoku(matrix);
  }
  return matrix; 
}
