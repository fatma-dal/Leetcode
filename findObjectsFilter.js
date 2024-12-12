// const arrObj = [
//     {firstName:"bob",LastName:"ttt",age:31},
//     {firstName:"yyy",LastName:"rr",age:31},
//     {firstName:"ttt",LastName:"kkk",age:31}

// ]

// const findObjectsFilter =(searchObj,items) =>{
//     let output = []
//     for (let i =0; i< items.length;i++){
//         for (let key in items[i]) {
//             if (items[i][key] == searchObj[key]){
//                 output.push(items[i][key])
//             }
//         }
//     }
//     return output
    
// }
// const searchObj1 = {
//     firstName:"bob"
// }
// console.log(findObjectsFilter(searchObj1,arrObj))


const arrObj = [
    { firstName: "bob", LastName: "ttt", age: 31 },
    { firstName: "yyy", LastName: "rr", age: 31 },
    { firstName: "bob", LastName: "kkk", age: 31 }
];

const findObjectsFilter = (searchObj, items) => {
    let output = [];
    for (let i = 0; i < items.length; i++) {
        let match = true;
        for (let key in searchObj) {
            if (items[i][key] !== searchObj[key]) {
                match = false;
                break;
            }
        }
        if (match) {
            output.push(items[i]);
        }
    }
    return output;
};

const searchObj1 = {
    firstName: "bob"
};

console.log(findObjectsFilter(searchObj1, arrObj));