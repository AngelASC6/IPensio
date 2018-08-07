let aboutUsButton = document.querySelectorAll('#about')

aboutUsButton.forEach(post =>{
    post.addEventListener('click', ()=> {
    console.log('Hi')
	firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location = 'AboutUs.html'
    }
    else {
        alert('Please sign in to view this page')
    }
})
});
})