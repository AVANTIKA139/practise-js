// const arr1 = [1,2,3,4,5,6,7,8]; 
// // array of numbers
// const arr2 = ["s1","s2","s3","s4"];
// // array of string
// const arr3 = [true,false,true,true,false];
// // array of boolean data

// array is a database used to store multiple data of any datatype i.e, a string,number
// array of an object is an array which holds objects as its values
const resultModels = [
    {
      name: "Ashutosh Mishra 1",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 2",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 3",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 4",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 5",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 6",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 7",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 7",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
  ];
  // console.log(resultModels[4].name);
  // for(let a of resultModels){
  //   if(a.name ==="ashutosh mishra 3"){
  //     a.rollno = "1000";
  //   }
  // }
  // console.log(resultModels);
   
  for(let a of resultModels){
    if(a.name === "Ashutosh Mishra 5"){
      a["college name"]  = "iit bombay";
    }
  }
  console.log(resultModels);
   