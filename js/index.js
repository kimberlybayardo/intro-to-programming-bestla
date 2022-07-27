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


