let initialArry = "Shubham, Pratham, Mahesh, Pranav, Kartik";

let searchArr = 'Pranav'

function findString(name) {

    if (initialArry.includes(name)) {
        console.log(`${name} was found in array.`);
    } else {
        console.log(`${name} was not found in array.`)
    }
}

findString(searchArr);