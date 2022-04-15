// mainDiv.style.backgroundColor = "green";

const content = document.getElementById('main-content')
// content.parentNode.removeChild(content);
content.style.display = "none";
// create a new div - put our content div
// create an array
// 

// create a universal header "You have been matched with the best candidate"

//div1 Tristan = true
const tristan = document.createElement('div')
tristan.innerText = 'Your top candidate'
const thisBody = document.querySelector('body');
thisBody.appendChild(tristan)
//if true -- > false
const linkedin1 = document.createElement('img');
const imageUrl = chrome.extension.getURL('./images/tristanLinkedin.png')
linkedin1.setAttribute('src', `${imageUrl}`);
tristan.appendChild(linkedin1);


//div2 Jasmine = false
const jasmine = document.createElement('div')
jasmine.innerText = 'The best candidate'
thisBody.appendChild(jasmine)
//if false -- >