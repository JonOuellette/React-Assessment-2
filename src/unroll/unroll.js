function unroll(square) {
    const result = [];
    let top = 0, bottom = square.length - 1;
    let left = 0, right = square[0].length - 1;
  
    while (left <= right && top <= bottom) {
      // Traverse from left to right
      for (let i = left; i <= right; i++) {
        result.push(square[top][i]);
      }
      top++;
  
      // Traverse from top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(square[i][right]);
      }
      right--;
  
      // Traverse from right to left
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(square[bottom][i]);
        }
        bottom--;
      }
  
      // Traverse from bottom to top
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(square[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }

module.exports = unroll;

