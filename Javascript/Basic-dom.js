// Scope

// let and const is block scope
// var is functional scope

var num8 = 80;  //outer scope

function printMyMessage(rohan) {
    console.log(rohan);
}

function externalMessage() {
    var num5 = 50;
    // console.log(num5)
    alert("Welcome from outside ! !");

    {
        console.log(num5);

        let num6 = 60;
        console.log(num6);//60

        const num7 = 70;
        console.log(num7); //70

        var num9 = 90;
        console.log(num9);  //90



        //console.log(num6);  //Block scope, Uncaught RefrenceError : num6 is not defined

        //console.log(num7);  //Block scope, Uncaught RefrenceError : num7 is not defined

        //num is visible througout my function

        console.log(num5);  //50

        console.log(num8); //inner scope; Lexical scoping;
        console.log(num9); //90 , functional scope

        let abhiraj = "welcome to class !!";
        printMyMessage(abhiraj);
    }
}

// ------------------10-07-2024------------------------

function changeMycompany() {
    // get hold of the element 
    let element = document.getElementById("myDiv");

    //Change the contents of the element
    element.innerHTML = "Welcome To Facebook !";


    console.log("I Changed my Company");

    alert("welcome to the new Companey")
}

function askForinput(){
    let userName = window.prompt("What is your good Name ?");
    let element = document.getElementById("username")
    element.innerHTML = userName
}

function DeletThePost(){
    let elements = document.getElementsByClassName("btnClass")
    let confirm = window.confirm("Are you Sure Want to Delet?");
    let element = document.getElementById("username")
    if(confirm){
        element.innerHTML ="post deleted";
    }else{
        element.innerHTML ="post not deleted"
    }
}

