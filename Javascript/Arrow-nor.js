'use strict'

this.table = "window table";

const clean = function(){
   console.log(`${this.table} cleaned !!`);

    const doubleClean = function(){
      console.log(`${this.table} Double cleaned !!`)

      const Tripleclean = function (){
         console.log(`${this.table} Triple cleaned`)
      }
      Tripleclean.call(this);
    }
    doubleClean.call(this);
}
clean.call(this);

// -------------->   //Use of Arrow Function <---------------------

// this.table = "window table";

const clean1  = () => {
   console.log(`${this.table} cleaned  By Arrow Function!!`);
   
    const doubleClean = ()=>{
      console.log(`${this.table} Double cleaned By Arrow Function!!`)

      const Tripleclean = ()=>{
         console.log(`${this.table} Triple cleaned By Arrow Function`)
      }
      Tripleclean();
    }
    doubleClean();
}
clean1();