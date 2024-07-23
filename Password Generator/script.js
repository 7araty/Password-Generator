
const passwordGen = document.getElementById('password');
const passBtn = document.getElementById('password-btn');
const clipbordCopy = document.getElementById('copy');
const showHide = document.getElementById('show-hide');

// toggle the visibility of  input type password
showHide.addEventListener('click', toggleShowHide);
 
function toggleShowHide(){
    if(passwordGen.type === 'password'){
        passwordGen.type = 'text';
        showHide.textContent = 'Hide';
    }
    else {
        passwordGen.type = 'password';
        showHide.textContent = 'Show';
    };
};


function generatePassword(){
    let passwordLength = 12;
        
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

    let Password = [
        uppercase[Math.floor(Math.random() * uppercase.length)],
        numbers[Math.floor(Math.random() * numbers.length)],
        lowercase[Math.floor(Math.random() * lowercase.length)],
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)]

    ];    

    let Allcharacters = uppercase + numbers + lowercase + specialCharacters;    

    for(let i = Password.length; i < passwordLength; i++){
        Password.push(Allcharacters[Math.floor(Math.random() * Allcharacters.length)]);
        
    }
    Password.sort(() => Math.random() - 0.5); // randomizess the order of the characters   

    passwordGen.value = Password.join('');
    document.getElementById('copied-tag').style.display = "none";//hides the copied tag when the generate password btn is clicked 

    // Handles copying password to the clipboard
    clipbordCopy.addEventListener('click', () => {
        // const copiedPassword = Password.join('');        
        navigator.clipboard.writeText(Password.join(''));
        document.getElementById('copied-tag').style.display = "block";// shows copied tag
        
    });
};

passBtn.addEventListener('click', generatePassword);
