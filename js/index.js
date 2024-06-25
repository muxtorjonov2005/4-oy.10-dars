// 1-masala
// const person = {
//     name: 'Ali,',
//     age: 30,
//     job: 'driver'
// }
// console.log(person);

// 2-masala
// const person = {
//     name: 'Ali,',
//     age: 30,
//     job: 'driver'
// }
// person.name = 'Vali'
// console.log(person);

// 3-masala
// const person = {
//     name: 'Ali,',
//     age: 30,
//     job: 'driver'
// }
// person.address = 'Nayman MFY'
// console.log(person);

// 4-masala
// const person = {
//     name: 'Ali,',
//     age: 30,
//     job: 'driver'
// }
// delete person.job
// console.log(person);

// 5-masala
// const person = {
//     name: 'Ali,',
//     age: 30,
//     job: 'driver',
//     phone: {
//         mobil: +998975965161,
//         home: +998916586150
//     }
// }
// console.log(person);

// 6-masala

// 7-masala
// const person = {
//     name: 'Ali,',
//     age: 30,
//     job: 'driver'
// }
// console.log(person.age);

// 8-masala

// 9-masala
// function countThree(str){
//     let count = 0
//     for (let i = 0; i < str.length; i++){
//         if(str[i] == '3'){
//             count ++
//         }
//     }
//     return count
// }
// console.log(countThree('125312322583'));

// 10-masala
// function creatArray(num){
//     let arr = []
//     for(let i = 1; i <= 10; i++){
//         arr.push(i)
//     }
//     return arr
// }
// console.log(creatArray(10));

// 11-masala
// function creatStr(str){
//     let res = []
//     for(let i = 0; i < str.length; i++){
//         if(str[i] != '*'){
//             res += str[i] 
//         }
//     }
//     return res
// }
// console.log(creatStr('he*l*l*o'));

// 12-masala
// function deletSecond(str){
//     if(str.length < 2){
//         return str
//     }
//     return str.slice(0, 1) + str.slice(2)
// }
// console.log(deletSecond('he'));

// 13-masala
// function findMaxCodeAt(arr){
//     let maxIndex = 0
//     for( let i = 1; i < arr.length; i++){
//         if(arr[i].charCodeAt(0) > arr[maxIndex].charCodeAt(0)){
//             maxIndex = i
//         }
//     }
//     return maxIndex
// }
// console.log(findMaxCodeAt(['a', 'b', 'h']));

// 14-masala
// function newArray(str){
//     return str.split('')
// }
// console.log(newArray('hello'));

// 15-masala
// function joinArray(arr){
//     return arr.join('')
// }
// console.log(joinArray(['h', 'e', 'l', 'l', 'o']));

// 16-masala
// function includes(arr, element){
//     return arr.includes(element)
// }
// console.log(includes('salom dunyo','dunyo'));

// 17-masala

// 18-masala
// function joinStr(arr){
//     return arr.join(' ')
// }
// console.log(joinStr(['hello', 'dunyo']));

// 19-masala
// function findLongStr(arr){
//     let long = arr[0]
//     for(let i = 1; i < arr.length; i++){
//         if (arr[i].length > long.length){
//             long = arr[i]
//         }
//     }
//     return long
// }
// console.log(findLongStr(['hello', 'helllloooo', 'hi']));

// 20-masala
// function reverseArray(arr){
//     return arr.reverse().join(' ')
// }
// console.log(reverseArray(['word', 'hello']));

// 21-masala
// function joinArray(str){
//     return str.split(' ')
// }
// console.log(joinArray('hello dunyo nima gap'));

// 22-masala
// function reverseStr(str){
//    return str.split(' ').reverse().join(' ')
// }
// console.log(reverseStr('yaxshi bolalar'));

// 23-masala
// function getStrLength(arr){
//     return arr.map(function(value){
//         return value.length
//     })
// }
// console.log(getStrLength(['hello', 'salom', 'hayr']));

// 24-masala

// 25-masala
// function str(str,maxLength){
//     if(str.length <= maxLength){
//         return str
//     }
//     return str.slice(0, maxLength) + '   '
// }
// console.log(str('hello world', 6));

// 26-masala
// function capitalizeStr(arr){
//     return arr.map(function(value){
//         return value.charAt().toUpperCase() + value.slice(1)
//     })
// }
// console.log(capitalizeStr(['hello', 'salom', 'hayr', 'bye']));

// 27-masala
// function filter(arr,element){
//     return arr.filter(function(value){
//         return value.startsWith(element)
//     })
// }
// console.log(filter(['olma', 'anor', 'anjir', 'banan', 'apelsin'], 'a'));

// 28-masala
function reverseStr(str){
    return str.split(' ').map(function(value){
       return value.split('').reverse().join('')
    }).join(' ')
}
console.log(reverseStr('hello world'));