// here you put all the js you want.

['paper','scissors', 'rock'].forEach(element => {
    document.getElementById(element).addEventListener('click', () => {
        document.getElementById(element).classList.add('selected');
        document.getElementById('stepContainer').classList.add('end-step1');
    });
});