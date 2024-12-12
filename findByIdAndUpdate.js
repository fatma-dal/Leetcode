const arrObj = [
    { id:1, firstName: "Jack", LastName: "ttt", age: 31 },
    { id:2 ,firstName: "Royen", LastName: "rr", age: 15 },
    { id:3 ,firstName: "Tom", LastName: "kkk", age: 55 }
]




const findByIdAndUpdate = (id, updatedVal, listObj) => {
    for (let i = 0; i < listObj.length; i++) {
        if (id === listObj[i].id) { 
            for (let key in updatedVal) {
                if (key in listObj[i]) { 
                    listObj[i][key] = updatedVal[key];
                }
            }
            return listObj[i]; 
        }
    }
    return null
};


console.log(findByIdAndUpdate(3, { firstName: "jjj" }, arrObj));
