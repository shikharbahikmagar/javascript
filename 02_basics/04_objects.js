//singleton
//const fbUser = new Object() 

//non-singleton

const tinderUser = {}

tinderUser.id = "123456"
tinderUser.name = "Rahul"
tinderUser.isLoggedIn = true


//
const Regularuser = {
    email: "Rahul",
    isLoggedIn: true,
    userFullName: {
        fullName: {
            firstName: "Rahul",
            lastName: "Sharma"
        }
    }

}
// console.log(Regularuser.userFullName.fullName.firstName);
// console.log(Regularuser.userFullName.fullName.lastName);
const obj1 = {1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d" }

//const objMerge = { obj1, obj2 } //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const objMerge = Object.assign({}, obj1, obj2); //values goes to empty{}
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const objMerge = {...obj1, ...obj2} //beest and latest syntax to merge
//console.log(objMerge); 

console.log(Object.keys(obj1)); //gives in array = ['1', '2']
console.log(Object.values(obj1));//give values as  keys

console.log(Regularuser.hasOwnProperty('isLoggedIn'));