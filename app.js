

let userInputs = [];
let originalStory = `today, every student has a computer small enough to fit into this ${userInputs[0]}. He can solve any math problem by simply pushing the computers little ${userInputs[1]} . Computers can , add , multiply, divide and ${userInputs[2]} . They can also ${userInputs[3]} better than a human.Some computers are ${userInputs[4]}. Others have a/an ${userInputs[5]} screen that shows all kinds of ${userInputs[6]} and ${userInputs[7]} figures.`;  

// let originalStory = `today, every student has a computer small enough  to fit into this bed. He can solve any math problem by simply pushing the computers
// little  button . Computers can , add , multiply, divide and kill . They can also be better than a human.
// Others have a/an open screen that shows all kinds of clothes and even figures`; 

// console.log(originalStory);

const questionArray = ['enter a noun',
                    'enter a pural noun',
                    'enter a verb(present tense)',
                    'enter a verb(present tense)',
                    'enter a part of a body',
                    'enter a adjective',
                    'enter a plural noun',
                    'enter a adjective'];

for(let i = 0; i<=questionArray.length-1; i++) {
    userInputs.push(prompt(questionArray[i]));
}
document.write(originalStory);
// console.log(originalStory);