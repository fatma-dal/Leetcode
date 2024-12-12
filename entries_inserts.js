
const obj ={ firstName: "bob", LastName: "ttt", age: 31 }
const obj1 ={ firstName: "bob", LastName: "ttt", age: 31 , email: "my@name.com"}

// 
const entriesInserts = (tableName,obj1) => {
    let objkey = []
    let objvalue = []
    for (let key in obj1){
        if (obj1.hasOwnProperty(key)==true){
            objkey.push([key])
            objvalue.push(obj1[key])

        }
    }

    return  ("INSERT INTO "+ tableName+ " ("+ objkey+") values (" + objvalue +")")
}
console.log(entriesInserts("users" ,obj))