function rotate(matrix) {
  //transpose the matricx
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = 0;
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // reversing using swapping
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let temp = 0;
      temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j];
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }
  console.log(matrix);
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(arr);

///////////////////////////////////////////////////////////////////////////////////////

//Rotate Matrix anti-clockwise by 90 degree :

function rotate1(matrix) {
  // reversing using swapping
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let temp = 0;
      temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j];
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }
  //transpose the matricx
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = 0;
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  console.log(matrix);
}

let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate1(arr1);
