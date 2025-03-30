// If Statemment: if a condition is true, execute the code.if not, do something else.

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function() {
  age = myText.value;
  age = Number(age);

  if (age>=180) {
    resultElement.textContent = `You are too Old to enter this site.`;
    
  }
  else if (age ==0){
    resultElement.textContent = `You are just born and you are baby!`;
  }
  else if (age >=18){
    resultElement.textContent = `You are old enough to use this site. go on!`;
  }
  else if (age < 0){
    resultElement.textContent = `Your age can't be below 0.!`;
  }
  else{
    resultElement.textContent = `you must be 18+ to enter this site.`;
  }
  
}
