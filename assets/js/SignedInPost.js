let posts = document.querySelectorAll('#PostItem')

posts.forEach(post =>{
    post.addEventListener('click', ()=> {
    console.log('Hi')
	firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location = 'post.html'
    }
    else {
        alert('Please sign in to view this page')
    }
})
});
})