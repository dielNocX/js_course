// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n===1) {
//         return 1;
//     }
//     return fibonacci(n - 2)+ fibonacci(n - 1);
// }

// function fibonacci(n) {
//     let A = [];
//     // if for (let i = 2; i < n; i++) { 
//     if (A.length === 0){
//         for (let i = 1; i <= n; i++) { 
//             A.push(fibonacci(i))
//     }
//     return A
// }
    
//     if (n === 0) {
//         return 0;
//     } else if (n===1) {
//         return 1;
//     } else {
//         return fibonacci(n - 2)+ fibonacci(n - 1);
//     } 


// }


function fibonacci(n) {
    if (n === 0) {
      return [0];
    } else if (n === 1) {
      return [0, 1];
    } else {
      let arr = [0, 1];
      for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
      }
      return arr;
    }
  }

// }
// Jangan hapus kode di bawah ini!
export default fibonacci;
