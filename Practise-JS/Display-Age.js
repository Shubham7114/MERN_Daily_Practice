document.getElementById('container').addEventListener('submit',function(event){
               event.preventDefault();
               const Birthdate = document.getElementById('BDate').value 
               let Age = calculateAge1(new Date(Birthdate))
               document.getElementById('Output').innerHTML = `Bithdate year us :-${Age}`

})


function calculateAge1(Birthdate){
  const today = new Date()           // it will give today date and time also
    let initialAge = today.getFullYear() - Birthdate.getFullYear();
 return initialAge;
}







 
 // We store Value in Birthdate Variable
   

calculateAge1(Birthdate)