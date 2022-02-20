// here you put all the js you want.

let select = null;
let botSelect = null;
let score = 0;

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


const actions = ['paper','scissors', 'rock'];
const container = document.getElementById('stepContainer');
const bot = document.getElementById('bot');


// STEP 3 (result)
const getResult = (botChoice, userChoice) => {
    if (botChoice === userChoice) {
        return { increment: 0, resultClass: '' };
    }
    
    const botIndex = actions.indexOf(botChoice);
    const userIndex = actions.indexOf(userChoice);
    return (userIndex + 1) % actions.length === botIndex ? { increment: -1, resultClass: 'lose' } : { increment: 1, resultClass: 'win' };
}


const step3 = (botChoice, userChoice) => {
    const {increment, resultClass } = getResult(botChoice, userChoice);
    
    container.classList.remove(...container.classList);
    container.classList.add('step-3');
    resultClass && container.classList.add(resultClass);
    score = score + increment;
    document.getElementById('score').innerText = score + "";
}


// STEP 2
const loop = (actionIndex, count, nbLoop, userChoice) => {
    setTimeout(() => {
        bot.classList.remove(...actions, 'ghost');
        bot.classList.add(actions[actionIndex]);
        botSelect = actions[actionIndex];
        if (count < nbLoop) {
            loop((actionIndex+1)%3 , count+1, nbLoop, userChoice);
        } else {
            setTimeout(() => step3(botSelect, userChoice), 500);
        }
    }, 100)
}

const step2 = (userChoice) => {
    container.classList.remove(...container.classList);
    container.classList.add('step-2');
    const nbLoop = getRandomInt(15, 18);
    setTimeout(() => {
        loop(0, 1, nbLoop, userChoice);
    }, 500);
};


// STEP 1
const removeActionsClick = (fn) => {
    actions.forEach((el) => {
        document.getElementById(el).removeEventListener('click', fn)
    });
}

export const step1 = () => {
    bot.classList.remove(...bot.classList);
    bot.classList.add('bubble', 'ghost');

    container.classList.remove(...container.classList);
    container.classList.add('step-1');

    actions.forEach(id => {
        const element = document.getElementById(id);
        element.classList.remove('selected');
        element.addEventListener('click', function handler() {
            select = id;
            element.classList.add('selected');
            container.classList.add('end-step1');
            removeActionsClick(handler);
            setTimeout(() => {
                
                step2(select);
            } , 300)
        });
    });
}
window.startGame = step1;
document.addEventListener('DOMContentLoaded', function() {
    step1();
}, false);
