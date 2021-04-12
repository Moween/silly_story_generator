// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];



// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem =  randomValueFromArray(insertX);
  let yItem =  randomValueFromArray(insertY);
  let zItem =  randomValueFromArray(insertZ);

  let patternX = /:insertx:/g;
  let patternY = /:inserty:/g;
  let patternZ = /:insertz:/g;

  newStory = newStory.replace(patternX, xItem).replace(patternY, yItem).replace(patternZ, zItem);
  
  if(customName.value !== '') {
    let name = customName.value;
    name = name.slice(0, 1).toUpperCase() + name.slice(1)
    newStory = newStory.replace(/Bob/g, name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' stone';
    let temperature =  Math.round((94 - 32) * 5 / 9) + ' centigrade';
    
    newStory = newStory.replace(/300 pounds/g, weight)
    newStory = newStory.replace(/94 fahrenheit/g, temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
 console.log(newStory);
}

