
//**MVP**//

//ADD A POP UP ON A BUTTON CLICK

//create a variable to target the button
const infoButton = document.querySelector('.infoButton');

//create an alert that displays additional text
function findOutMore() {
    alert('Here is so much information about our services. Cupcake ipsum dolor sit amet brownie soufflé cotton candy soufflé. Sugar plum cake liquorice gingerbread jelly-o cupcake liquorice. Gingerbread toffee cake carrot cake icing brownie gingerbread jelly beans. Icing biscuit tiramisu muffin gingerbread tart cake gingerbread dragée. Oat cake chocolate cake cupcake muffin fruitcake. Gingerbread chupa chups liquorice fruitcake chocolate cake apple pie wafer. Marshmallow pie tiramisu chocolate cake lollipop jelly-o halvah muffin cookie. Lollipop cookie tart danish halvah. Brownie gummi bears sesame snaps pie tiramisu biscuit cake chupa chups lollipop.')
}
//create an event listener for the click and deploy the alert when the user clicks the button.
infoButton.addEventListener('click', findOutMore);
    







//**STRETCH GOAL**//

//CREATE A WAY FOR COMMENTS TO POPULATE ONTO THE PAGE//

// Allow the user to input information into the text boxes.
//**In HTML**//

//when the user submits the form, get the text content 

////store the form in a variable
// const form = document.querySelector("form[action=comment]");

////listen for when the form is submitted
// form.addEventListener('submit', function(commentSubmit){
//     commentSubmit.preventDefault();
//console.log(`form is submitted`)
// })

////store the inputs in variables
// const userName = document.querySelector("input[name=name]");
// const userEmail = document.querySelector("input[name=email]");
// const userComment = document.querySelector("textarea[name=Comment]");

////store the name, comment and email values in a variable
// const userInput = {

//  name:`${userName.value}`, 
//  email: `${userEmail.value}`, 
//  comment: `${userComment.value}`

// }

// //create an empty array into which you can push the values from user input
// let userInfoArray = [userInput];
// console.log(userInfoArray);

//? How do I get this to just push the new index into the array, and not just store one at a time?
//? userInput.push? userInfoArray.push? something else entirely? 

// TODO:add the name and comment to the page, not the email.
// //get ${name} --> p
// //appendchild
// //get ${user-comment}
// //appendchild



// //clear the form



