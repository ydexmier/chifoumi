// here you put all the js you want.

['paper','scissors', 'rock'].forEach(element => {
    document.getElementById(element).addEventListener('click', () => {
        document.getElementById(element).classList.add('selected');
        document.getElementById('stepContainer').classList.add('end-step1');
        setTimeout(() => {
            document.getElementById('stepContainer').classList.remove('end-step1');
            document.getElementById('stepContainer').classList.remove('step-1');
            document.getElementById('stepContainer').classList.add('step-2');
        } , 300)
    });
});