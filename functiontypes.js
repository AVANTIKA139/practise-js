// functions are of two types
// on the basis of returning property
// non returning functions , which  just perform the task assigned and return nothing at the end
// returning functions , do the task assigned and also return the result


// returning functions ends with the keyword "return data;",
// whereas non-returning doesnot return anything

// while calling returning  functions, we need to store the returning value of the function in a variable
// whereas, non-returning doesnot need such variable

const returningFunction1 = () => {
    let a=5;
    let b = 10;
    let c = a + b;
    return c;
};
let result = returningFunction1();