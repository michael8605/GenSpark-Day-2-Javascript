window.addEventListener ('load', () => {
    const name1 = localStorage.getItem('NAME')
    const username = localStorage.getItem('USERNAME')
    const email = localStorage.getItem('EMAIL')
    const phone = localStorage.getItem('PHONE')
    const password = localStorage.getItem('PASSWORD')

    document.getElementById('result-name').innerHTML = name1
    document.getElementById('result-username').innerHTML = username
    document.getElementById('result-email').innerHTML = email
    document.getElementById('result-phone').innerHTML = phone
    document.getElementById('result-password').innerHTML = password

})