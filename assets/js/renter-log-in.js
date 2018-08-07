let googleButton = document.querySelector('#googleLogInButton')



googleButton.addEventListener('click', e => {
    signInWithGoogle()
})


function signInWithGoogle() {
    var googleAuthProvider = new firebase.auth.GoogleAuthProvider
    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(function(data) {
            window.location.href = "index.html";

            console.log(data)
        })
}

function signUpWithEmail() {


    var email = document.querySelector('#emailInput').value
    var password = document.querySelector('#passwordInput').value


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
            console.log('Cool')
            document.querySelector('#emailInput').value = ''
            document.querySelector('#passwordInput').value = ''
            window.location.href = "index.html";

        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage)
            document.querySelector('.alert').innerHTML = errorMessage
            document.querySelector('.alert').style.visibility = 'visible'

        });
}
