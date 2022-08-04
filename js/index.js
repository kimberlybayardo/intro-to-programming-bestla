let today = new Date();
let thisYear = today.getFullYear();

//we are selecting the Footer of the document through the querySelector method and assigning it to the variable footer. 
let footer = document.querySelector('footer');

//we are creating an element through the createElement method. In this case we are creating a paragraph (<p></p>)
let copyright = document.createElement('p');

//innerHTML will add information to the <p></p> (in other words, will update the copyright variable) 
copyright.innerHTML = `Kimberly Bayardo ${thisYear}`;

//footer is the parentNode and you are putting the new childNode inside it which in this case is copyright. Remember that copyright is the new created <p>. and it will be added to the footer 
footer.appendChild(copyright);


let skills = ["Bilingual", "JavaScript", "CSS", "HTML"];

//we are getting the Element with the ID skills
let skillsSelection = document.getElementById('skills');

//we are storing skillsSelection (ID) to the <ul> element. 
let skillsList = skillsSelection.querySelector("ul");

//i starts at 0 and the loop will continue to run until the skills length is less than i. i++ will increase by one
for(let i=0; i < skills.length; i++){
//creating a new variable and creating an element <li>
    let skill = document.createElement('li');
//we are taking the new variable skill (<li>) and showing the Text contents of each <li> within the skills variable, which is an arrayc and contains a list of skills.
    skill.textContent += skills[i];
//we are adding the skill (<li>) into the skillsList (<ul>)
    skillsList.appendChild(skill);
}

//selecting the form by its name 
let messageForm = document.getElementsByName('leave_messages')[0];

//Event listener on the form when submitted
messageForm.addEventListener('submit', (event) => {
    //prevent the bowser from reloading and refreshing the page which cause the information to be earased immediately after submission    
    event.preventDefault();
    //selecting the name,email,and message and returning the value. Do i need a input.value variable for each one?
    const name= event.target.name.value;
    const email= event.target.email.value;
    const message= event.target.message.value;
    console.log(name, email, message);
//selecting the messages section by its ID. 
    const messageSection= document.getElementById('messages');
//selecting the UL element through the form id which is messages.
    const messageList= messageSection.querySelector('ul');
//creating an li element within the UL element. 
    const newMessage = document.createElement('li');

    
//    setting the new HTML in the LI element.The variables for email, name, and message are set at the beginning of the event handler
    newMessage.innerHTML = `<a href= "mailto: ${email}">${name}</a> wrote: <span>${message}</span>`
//creating a remove button 
    const removeButton = document.createElement('button');
//inserting the innerText of the button 'remove'.
    removeButton.innerText = 'remove';
//setting the type attribute to button
    removeButton.type = 'button';
//creating another event handler that actives the removal of a name (li) element with just a click
    removeButton.addEventListener('click', ()=>{
        //This is saying that when the remove button is clcked remove the li element. the remove button's parent element is LI element which is what will be removed. We are traversing from the button element to the li element.
        const entry = removeButton.parentNode;
        entry.remove();

});
//Adding the LI element to the UL
    messageList.appendChild(newMessage);
//adding the Remove button into the LI
    newMessage.appendChild(removeButton);
//resetting the form once its submitted.
     messageForm.reset();
});
