form.addEventListener('submit', (e) => {

    const name1 = document.getElementById('name').value
    const nameRegexp = new RegExp("[a-zA-Z]").test(name1)
    const username = document.getElementById('username').value
    const usernameRegexp = new RegExp(/^[a-z0-9_-]{3,16}$/).test(username)
    const email = document.getElementById('email').value
    const emailRegexp = new RegExp(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/
        ).test(email)
    const phone = document.getElementById('phone').value
    const phoneRegexp = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).test(phone)
    const password = document.getElementById('password').value
    const passwordRegexp = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,10})$/).test(password)
    const confirmPassword = document.getElementById('confirm-password').value
    const confirmPasswordRegexp = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,10})$/).test(confirmPassword)
    const form = document.getElementById('form')    

   
   if(!nameRegexp){
        e.preventDefault()
        document.querySelector("#name").style.border=('2px solid red')
    }
    else if(!emailRegexp){
        e.preventDefault() 
        document.querySelector("#email").style.border=('2px solid red')  
      }
    else if(!usernameRegexp){
        e.preventDefault()
        document.querySelector("#username").style.border=('2px solid red')
    }
    else if(!phoneRegexp){
        e.preventDefault()
        document.querySelector("#phone").style.border=('2px solid red')
    }
    else if(!passwordRegexp){
        e.preventDefault()
        document.querySelector("#password").style.border=('2px solid red')
    }
    else if(password != confirmPassword){
        e.preventDefault()
        document.querySelector("#confirm-password").style.border=('2px solid red')
    }


})


function handleSubmit (){
    const name1 = document.getElementById('name').value
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const password = document.getElementById('password').value

    localStorage.setItem("NAME", name1);
    localStorage.setItem("USERNAME", username);
    localStorage.setItem("EMAIL", email);
    localStorage.setItem("PHONE", phone);
    localStorage.setItem("PASSWORD", password);

    return;
}