let passwordField = document.getElementById('password')
let confirmPasswordField = document.getElementById('confirm-password')
let rs = getComputedStyle(document.querySelector(':root'))
let inputField = document.getElementsByClassName("input-field")

confirmPasswordField.addEventListener("change", () => {
    if(confirmPasswordField.value !== passwordField.value){
        confirmPasswordField.style.borderColor = rs.getPropertyValue("--secondary-color")
    }
})