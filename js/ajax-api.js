//alert("Ajax is loaded");






fetch( 'http://api.open-notify.org/astros.json' )
   .then(  response => response.json() )

   .then( data => {  

console.log(data);

const people = data.people;

console.log(people);

const peopleUL = document.createElement( 'UL' );

for ( const person of people )
{
    const personLI = document.createElement ( 'LI');
    personLI.textContent = `on the ${person.craft} craft, astronaut "${person.name}" is present !!`;
    peopleUL.appendChild( personLI);

}

document.body.appendChild( peopleUL );

})

.catch( error => {
    console.log(error);

});





