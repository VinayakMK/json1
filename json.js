let student = {
    course:"MERN",
    age:22,
    isActive:true,
    topics:["html","css","js","react"],
}

let res = JSON.stringify(student);
let obj = JSON.parse(res);

console.log(obj);