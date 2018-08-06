function signInWithEmail() {


    var email = document.querySelector('#emailInput').value
    var password = document.querySelector('#passwordInput').value

    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        console.log('Cool')
        document.querySelector('#emailInput').value = ''
        document.querySelector('#passwordInput').value = ''
        window.location.href = "index.html";


    }).catch(function(error) {

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage)
        document.querySelector('.alert').innerHTML = errorMessage
        document.querySelector('.alert').style.visibility = 'visible'


    });

}
