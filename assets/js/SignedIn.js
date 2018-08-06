let viewPostings = document.querySelectorAll('.listings')

viewPostings.forEach(post =>{
    post.addEventListener('click', ()=> {
    console.log('Hi')
	firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location = 'listings.html'
    }
    else {
        alert('Please sign in to view this page')
    }
})
});
})