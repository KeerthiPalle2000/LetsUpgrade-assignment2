let friends=[
    {
        name:"keerthi",
        age:"35",
        country:"India",
        hobbies:['dancing','cooking','sleeping'],
    },
    {
        name:"smruthi",
        age:"30",
        country:"US",
        hobbies:['eating','cooking','sleeping'], 
    },
     {
        name:"mokshitha",
        age:"10",
        country:"Australia",
        hobbies:['dancing','cooking','sleeping'],
     }  


];


function displayAge(friends){
    console.log("people with age less than 30");
    console.log("___________________________________");
    friends.forEach(element =>{
        if(element.age<30)
        {
            console.log(element);
        }
    });
}
function displayCountry(friends){
    console.log("people with country as India");
    console.log("____________________________________");
    friends.forEach(element=>{
        if(element.country=="India"){
            console.log(element);
        }
    });
}
displayAge(friends);
displayCountry(friends);