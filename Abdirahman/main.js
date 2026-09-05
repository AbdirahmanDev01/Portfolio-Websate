let submit = document.getElementById("submit");

submit.addEventListener("click", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value; 

    displayMessage(name, email, message);
    

});