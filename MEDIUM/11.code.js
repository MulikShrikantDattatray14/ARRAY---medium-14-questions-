function zeroMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  let firstRowZero = false;
  let firstColZero = false;

  // Check if the first row contains zero
  for (let j = 0; j < m; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // Check if the first column contains zero
  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // Use the first row and column to mark zero positions
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
        console.log(matrix)
      }
    }
  }
  

  // Zero out rows based on the first column
  for (let i = 1; i < n; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < m; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zero out columns based on the first row
  for (let j = 1; j < m; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < n; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zero out the first row if needed
  if (firstRowZero) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  // Zero out the first column if needed
  if (firstColZero) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}


const matrix=[[0,1,2,3],[3,0,5,2],[1,3,0,5],[1,2,3,0]]
const ans = zeroMatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
  console.log(row.join(" "));
}
