//Test specs for Unit test
// 1) A function called "multiplication" that returns the product of the two input numbers.
// Step 1: Create a function to multipy numbers. 
// Step 2: Declare variables a, b and product. 
// Step 3: Give integer numbers to a and b.
// Step 4: calculate product = a * b
// Step 5: Return product

// Expect multiplication(8, 9) to be a number
// Expect multiplication(8, 9) to be equal to 72
// Expect multiplication(8, "d") to be an error

function multiply(a, b) {
    if (b === undefined) {
        return a * a;
    }
    const product = a * b;
    return product;
}


//2)
// Step 1: Create a function with two arrays: array1 and array2
// Step 2: Concat array1 and array2 in array3.
// Step 3: Create a for loop.
// Step 4: Check the odd numbers in array3.
// Step 5: Push it into array4.
// Step 6: Sort the array4 in a ascending order.
// Step 7: Return array4 by filtering the repeated numbers.
// Step 8: Call the function by adding values into the array1 and array2.

//Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be integer numbers.
//Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15].
//Expect concatOdds([0.9, 3.14, 8.5, 11], [9, 3, 2, 1]) to [1, 3, 11].
//Expect concatOdds([3, 2, 1], ['hello', 'hello', 'hello','hello',7,-3]) to be [ -3, 1, 3, 7 ].


//Unexpected input:
//Expect concatOdds([3, 2, 1],[v,b,c,f]) to be an error
// Unexpected inputs are non-integer numbers.

function concatOdds(array1, array2) {

    const array3 = array1.concat(array2);

    let array4 = [];
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] % 2 == 1 || array3[i] < 0) {
            array4.push(array3[i]);
        }

    }
    array4.sort((a, b) => a - b);
    //
    return array4.filter((item, index) => array4.indexOf(item) === index);
}

console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])); //Array(5) [ -1, 1, 3, 9, 15 ]
console.log(concatOdds([0.9, 3.14, 8.5, 11], [3, 2, 1])); // Array [ 1, 3, 11 ]
console.log(concatOdds([3, 2, 1], ['hello', 'hello', 'hello','hello',7,-3])); //Array(4) [ -3, 1, 3, 7 ]
console.log(concatOdds([3, 2, 1], [v, b, c, f]));  //error


//Functional tests:
//When user click on "cart" without adding product to cart they should be shown some error (your cart is empty.) and prompted to sign in or sign up.
//Verify that users can log in to an existing account to proceed with checkout.
//check if users can create a new account during the checkout process.
//check users enter information is correct or not.
//check if user enter mandatory shipping information.
//Verify that user can select a preferred shipping method.
//Test different payment methods like credit,paypal,apple pay etc.