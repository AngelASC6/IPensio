let submit = document.querySelector('#submitButton')
let selectedFile = document.querySelector('#file');
let uploadButton = document.querySelector('#upload');
let picUrl
let file




submit.addEventListener("click", (e) => {
    e.preventDefault()
    uploadPhoto()
})

function postData(){
    let title = document.querySelector('#postingTitle').value.toLowerCase()
    let description = document.querySelector('#postingDescription').value
    let postingCatagory = document.querySelector('#Catagory').value
    let priceForDay = document.querySelector('#dayPrice').value
    let priceForWeek = document.querySelector('#weekPrice').value
    let priceForMonth = document.querySelector('#monthPrice').value



    let posting = {
        title: title,
        image: picUrl,
        description: description,
        postingCatagory: postingCatagory,
        priceForDay: priceForDay,
        priceForWeek: priceForWeek,
        priceForMonth: priceForMonth,
    }

    console.log(posting)

    firebase.database().ref('/').push(posting) 
}





selectedFile.addEventListener('change', e => {
    file = e.target.files[0]
    console.log(file)
})


uploadButton.addEventListener('click', () => {
    let fileName = file.name
    let uploadTask = firebase.storage().ref('/' + fileName).put(file)


    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        function(error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        function() {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                document.querySelector('#image').setAttribute('src', downloadURL)
            });
        });
})

function uploadPhoto(){
        let fileName = file.name
    let uploadTask = firebase.storage().ref('/' + fileName).put(file)


    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        function(error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        function() {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                document.querySelector('#image').setAttribute('src', downloadURL)
                 picUrl = downloadURL
                 postData()
            });
        });
    
}


