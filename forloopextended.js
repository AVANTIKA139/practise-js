// for( let i = 0; i<10; i++){
//     console.log(i)
// }
// /iteration means one cycle of for loop before update of i;
// we can customize our own update algorithm i.e. update in value of i 
// for( let i = 0; i<10; i+3){
//     console.log(i)
// }
// for( let i = 1; i<300; i=i+5){
//     console.log(i)
// }
// for( let i = 3; i<300; i=i*3){
//     console.log(i)
// }
// for( let i = 0; i<40; i++){
//     console.log(i);
//     // if(i === 30){
//     //     break;
//     // }
// }
//     console.log("i am outside of for loop");
for( let i = 0; i<10; i++){
    if(i===4){
        continue;
    }
    console.log("hello this is ", i);
}
console.log("i am ouside of for loop")

    // break statement => break statement instantaneously terminates the for loop and come outside of it
    // continue statement=> continue statement instantly sends code control to next update
// break terminates the whole for loop, but continue terminates the present iteration


