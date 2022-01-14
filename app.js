// Task 1 
// Question 1: Write a code in order to calculate the sum and product of any given matrix (N x M) diagonal

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// function calculatediagonals(matrix) {
//     var n = matrix.lenght;
//     var diag1 = 0;
//     var diag2 = 0;
//     for (var i = 0; i < n; i++) {
//         for (var j = 0; j < n; j++) {
//             if (i === j) {
//                 diag1 += matrix[i][j];
//             }
//             if (i + j === n - 1) {
//                 diag2 += matrix[i][j];
//             }

//         }
//     }
//     let ans1 = Math.abs(diag1);
//     let ans2 = Math.abs(diag2);
//     let ans = `Primary Diagonal is : ${ans1} and Secondary Diagonal is: ${ans2}`
//     return ans;

// }
// calculatediagonals(matrix);
// console.log("Your answes is ====>", calculatediagonals(matrix))

// Task 2

// Question 2: Write a code to multiply 2 matrices to form a new matrix which will be the product of those
// matrices

// let m1 =[[2,4,4,4],[3,2,2,2],[1,5,9,5],[5,5,5,5]];
// let m2  =[[2,4,4,4],[3,2,3,2,2],[1,5,9,5],[5,5,5,5]];
// // let arr3  =[[0,0,0,0],[0,0,0,0,0],[0,0,0,0],[0,0,0,0]];
// function multiplyMatrices(m1, m2) {
//     var result = [];
//     for (var i = 0; i < m1.length; i++) {
//         result[i] = [];
//         for (var j = 0; j < m2[0].length; j++) {
//             var sum = 0;
//             for (var k = 0; k < m1[0].length; k++) {
//                 sum += m1[i][k] * m2[k][j];
//             }
//             result[i][j] = sum;
//         }
//     }
//     return result;
// }

// console.log("Result===>",multiplyMatrices(m1,m2))


// Task 3
// Question 3: Add new field in an existing object dynamically from a given array:

// let object =
// {
//     parent_name: 'Father',
//     child1: 'Sumair'
// }

// let arr = ["", "", "Hamza", "Shahbaz", "Jhanzaib", "Juniad", "Tabish", "Ahthisam", "Asghar"];
// for (let index = 2; index < arr.length; index++) {
//     const element = arr[index];
//     object["child" + index] = element;

// }

// console.log(object);

// Task 4
// Question 4: Call this API in order to fetch the user data. API: https://jsonplaceholder.typicode.com/users.
// Get Data from api
// let requestOption = {
//     method:'GET',
//     redirect:"follow"
// };

// fetch("https://jsonplaceholder.typicode.com/users",requestOption)
// .then((response)=>response.json())
// .then((data)=>{
//     data.map((v)=>{
//         console.log(`Your id is ${v.id} \n and your Name is ${v.name} \n and your username is ${v.username} and your email is ${v.email} \n and your address is ${v.address.city}`) 
//     })
// })