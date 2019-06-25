function z;
document.getElementsByTagName('div')[0]
.style.backgroundColor = 'red';
document.querySelector('div').style.backgroundColor = 'grey';
document.querySelector('button').addEventListener('click',()=> alert('hello!!!'));,
textcontent,innertext,innerHTML;

/*const userName = "admin";
const passWord = "admin123";
document.querySelector(".sign").addEventListener('click' , checkValidation ,{
    once : true
});

function(event){
    event.preventDefault();
    const usernameInput = document.getElementById("usernamesignup").value;
    const passwordInput = document.getElementById("passwordsignup").value;

    if (usernameInput === '' || passwordInput === ''){

    }
    else if(usernameInput === userName && passwordInput === passWord){
        const newDiv = document.createElement('div');
        newDiv.classList.add('divsuccess');
        newDiv.textContent = "Login Successful";
        document.querySelector('sign').insertAdjacentElement('afterend' , newDiv);
    }else{
        const anotherDiv = document. createElement('div');
        anotherDiv.innerHTML = '<p>incorrect <b>username</b> or <b>password</b></p><p>Try again</p>';
        document.querySelector('.sign').insertAdjacentElement('afterend', anotherDiv);
        anotherDiv.classList.add('diverror');
    };
}*/