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


let skills = ["JavaScript", "CSS", "HTML"];

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
//Adding the LI element to the UL: New Message is the LI and the messageList is the UL
    messageList.appendChild(newMessage);
//adding the Remove button into the LI
    newMessage.appendChild(removeButton);
//resetting the form once its submitted.
     messageForm.reset();
});


// //STEP ONE:
// //Create a new XMLHttpRequest object and store it in a variable named githubRequest
// var githubRequest = new XMLHttpRequest();


// // Call the open method on your githubRequest object and pass the necessary arguments
// //  1. method: the method of your request (in this case, "GET")
// //  2. url: the url of your request (in this case, "https://api.github.com/users/{GITHUB_USERNAME}/repos")
// githubRequest.open("GET", "https://api.github.com/users/kimberlybayardo/repos");

// //Finally, call the send method on your githubRequest object to actually send the request
// githubRequest.send();

// //STEP 2:
// // Below the last line of code you just wrote, add a "load" event listener on your githubRequest object and pass the necessary arguments
// // 1. event: the event that is being handled (in this case, "load")
// // 2. callback: the function that runs when this event occurs
// githubRequest.addEventListener('load', function() { 
// // Inside the callback function you just created, parse the response and store it in a variable named repositories
// // hint: JSON.parse(this.response)  
// let repositories = JSON.parse(githubRequest.response);
//     //Log the value of repositories in the console
//     console.log(repositories);
// //Using "DOM Selection", select the #projects section by id and store it in a variable named projectSection
// //Using "DOM Selection", query the projectSection (instead of the entire document) to find the <ul> element and store it in a variable named projectList
// const projectSection = document.getElementById('projects');
// const projectList = projectSection.querySelector('ul'); 

// //Create a for loop to iterate over your repositories Array, starting at index 0
// for(let i=0; i <repositories.length; i++){
// //create a new list item (li) element and store it in a variable named project
//     let project = document.createElement('li');
//  //set the inner text of your project variable to the current Array element's name property
//     project.innerText = repositories[i].name;
// //On the next line, append the project element to the projectList element
// //projectList is the UL element and project is the LI element.
//     projectList.appendChild(project);

// }
// });


//Using the Fetch API, create a "GET" request to the same GitHub API url as before
//hint: the fetch function
//hint: "GET" is the default method for fetch
fetch("https://api.github.com/users/kimberlybayardo/repos")
//Chain a then method to your fetch call and pass it a function that returns the response JSON data
//this is picking up the JSON data from my repose
    .then (response => response.json())
// Chain another then method and pass it a function, inside of which you can paste the code from your previous "load" event listener function
//this brings back the information that was fetched from the previous then method. 
    .then(load => {
        //console.log(load)
        let repositories = load;
        //Log the value of repositories in the console
         //console.log(repositories);
//Using "DOM Selection", select the #projects section by id and store it in a variable named projectSection
//Using "DOM Selection", query the projectSection (instead of the entire document) to find the <ul> element and store it in a variable named projectList
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul'); 
//Create a for loop to iterate over your repositories Array, starting at index 0
        for(let i=0; i <load.length; i++){
//create a new list item (li) element and store it in a variable named project
            let project = document.createElement('li');
 //set the inner text of your project variable to the current Array element's name property
            project.innerText = load[i].name;
            project.innerHTML = `<a href="${load[i].html_url} "target="_blank">${load[i].name}</a>`
//On the next line, append the project element to the projectList element
//projectList is the UL element and project is the LI element.
            projectList.appendChild(project);
}
})