const loginButton = document.getElementById('login_button')
const loginErrorMessege = document.getElementById('login_error_messege')
const userNameField = document.getElementById('user_name_field')
const passwordField = document.getElementById('user_password_field')

loginButton.addEventListener('click',() => {
    const userNameValue = userNameField.value
    const userPasswordValue = passwordField.value

    if (userNameValue === 'admin' && userPasswordValue === 'admin123') {
        window.location.href ="bankDashboard.html"
    }else{
        loginErrorMessege.innerHTML ="Invalid username or password"
    }
})