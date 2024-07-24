// ---------------------------------Serch Array---------------------------------------------

let initialArry = ['Shubham', 'Pratham', 'Mahesh', 'Pranav', 'Kartik']

let searchArr = 'Pranav'

function findArr(Arr, name) {

    if (Arr.includes(name)) {
        console.log(`${name} was found in array.`);
    } else {
        console.log(`${name}was not found in array.`)
    }
}
findArr(initialArry, searchArr);