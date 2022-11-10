function myvalues(){
    let x = document.getElementById('firstname').value;
    if (typeof x==="number"){
        console.log("you cant put numbers");
    } else  {
        console.log('continue');
    }
    let x1 = document.getElementById('lname').value;
    let x2 = document.getElementById('age').value;
    if(x2<=18){
        alert('you are underaged');
        return false;
    } else{
        console.log('above 18');
    }
    let x3 = document.getElementById('gender').value;
    if(x3==="Male" && "Female" && 'male' && 'female'){
        console.log('yeappppp');
    } else {
        console.log('there are only two genders in this world pal');

    }
  
    alert('First name is: '+x+ 
    '\nLast name is: '+x1+ 
    '\nYour age is: '+x2+ 
    '\nYour gender is: '+x3 ) ;
    
    

}