// uses of for loop
// 1.whenever we want to repeat a given code a given numberof then for loop used
// whenever we want to print an array element
// whenever we want to implement a code/codes, which is to be updated,
// after every iteration,we use for loop. we use the property of update in index

// e.g. printing for loop
// const array1 = ["Avantika","rani","princy","sania","harshita","astha","srijal","megha"];
// // 0
// console.log(array1[0]);
// console.log(array1[1]);
// console.log(array1[2]);
// console.log(array1[3]);
// console.log(array1[4]);
// console.log(array1[5]);
// console.log(array1[6]);
// console.log(array1[7]);
// console.log(array1[8]);
// for ( let index = 0; index < 9; index++){
//     console.log(array1[index]);
// }
// console.log(2*1);
// console.log(2*2);
// console.log(2*3);
// console.log(2*4);
// console.log(2*5);
// console.log(2*6);
// console.log(2*7);
// console.log(2*8);
// console.log(2*9);
// console.log(2*10);
// for (let index = 1; index < 11; index++){
//     console.log( 2*index)
// }

// let apseries = 1,6,11,16,21 and so d = 5, a=1..ques complete this
// let a=1;
// for( let index = 1; index < 51; index++){
//     a = a + 5;

//     console.log(a);

// }
// let gpseries = 3,9,27,....and so on..r = 3, a =3...ques complete this gp series upto 50 terms
// let a = 3;
// for ( let index = 3; index < 51; index++){
// a = a * 3;
// console.log(a);

// }
// 1.
// let sum = 0;
// for (let index = 0; index < 18; index++, sum += index);{
//     console.log(sum);
// }
// 2.
// for (let index = 0; index < 3; index++) {
//     let name = "AVANTIKA TIWARI";
//     console.log("HI, MY NAME IS " + name);
//   }
// 3.
// console.log(9*1);
// console.log(9*2);
// console.log(9*3);
// console.log(9*4);
// console.log(9*5);
// console.log(9*6);
// console.log(9*7);
// console.log(9*8);
// console.log(9*9);
// console.log(9*10);
// for (let index = 1; index < 11; index++){
//     console.log( 9*index);
// }
// 4.
// program to display numbers from 1 to 5
// const n = 5;


// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     console.log(i);}

// 5.
for(i = 1; i< 9; i++){
    
    if(i%2 == 0){
        console.log(i+ 'is even');
    }
    else {
        console.log(i+ 'is odd');
    }

}
