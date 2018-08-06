let searchButton = document.querySelector('#searchButton')


searchButton.addEventListener('click', () => {
    searchContent()
})



function getPostings() {
    let useremail
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            useremail = user.email
            console.log(useremail)
        }
    })
    firebase.database().ref('/').on('value', (snapshot) => {
        let data = snapshot.val()
        let displayPostings = document.querySelector('#postings')
        console.log(displayPostings)
        for (key in data) {
            displayPostings.innerHTML += `
            <div class="card" style="width: 35rem; margin-left: 12%; margin-top:3%;">
  <img class="card-img-top" src="${data[key].image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data[key].title}</h5>
    <p class="card-text">${data[key].postingCatagory} </br>${data[key].description}</p>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
  </div>
 </div>`

            document.querySelector('.modal-body').innerHTML = `<p class="card-text"> Price per day:$ ${data[key].priceForDay}</p>
     <p class="card-text">Price per week:$ ${data[key].priceForWeek}</p>
   <p class="card-text">Price per month:$ ${data[key].priceForMonth}</p
        <p class="card-text">Renter Email: ${useremail}</p>
`
        }

    })
}


function searchContent() {
    let useremail = user.email
    document.querySelector('#postings').innerHTML = ''
    let userInput = document.querySelector('#searchBar').value
    let catagoryInput = document.querySelector('#Catagory').value
    userInput = userInput.toLowerCase()
    let results = document.querySelector('#postings')
    document.querySelector('#postings').innerHTML = ''

    //     firebase.database().ref('/').once('value', (snapshot) => {
    //         let data = snapshot.val()
    //         for (key in data) {
    //             if (data[key].title.toLowerCase() == userInput) {
    //                 results.innerHTML += `
    //                         <div class="card" style="width: 35rem; margin-left: 12%; margin-top:3%;">
    //   <img class="card-img-top" src="${data[key].image}" alt="Card image cap">
    //   <div class="card-body">
    //     <h5 class="card-title">${data[key].title}</h5>
    //     <p class="card-text">${data[key].postingCatagory}</p>
    //         <p class="card-text">${data[key].description}</p>
    //     <p class="card-text"> Price per day: ${data[key].priceForDay}$</p>
    //     <p class="card-text">Price per week: ${data[key].priceForWeek}$</p>
    //     <p class="card-text">Price per month: ${data[key].priceForMonth}$</p>

    //   </div>
    //  </div>
    //             `
    //             }
    //         }
    //     })


    // Catagory Search
    // console.log(userInput)
    firebase.database().ref('/').once('value', (snapshot) => {
        let data = snapshot.val()
        console.log(data)
        for (key in data) {
            // console.log(userInput)
            console.log(key)
            if (data[key].postingCatagory == catagoryInput || data[key].title.toLowerCase() == userInput) {
                // console.log(userInput)
                // console.log(catagoryInput)
                // console.log(data[key].title)
                results.innerHTML += `
            <div class="card" style="width: 35rem; margin-left: 12%; margin-top:3%;">
  <img class="card-img-top" src="${data[key].image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data[key].title}</h5>
    <p class="card-text">${data[key].postingCatagory} </br>${data[key].description}</p>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
  </div>
 </div>`

                document.querySelector('.modal-body').innerHTML = `<p class="card-text"> Price per day:$ ${data[key].priceForDay}</p>
     <p class="card-text">Price per week:$ ${data[key].priceForWeek}</p>
   <p class="card-text">Price per month:$ ${data[key].priceForMonth}</p
        <p class="card-text">Renter Email: ${useremail}</p>
`
            }
        }
    })

    document.querySelector('#searchBar').value = ''
}





window.onload = getPostings


// <div class="card" style="width: 100%; margin-top: 4%">
//               <div class="card-body">
//                 <h5 class="card-title">${data[key].title}</h5>
//                 <p class="card-text">${data[key].description}</p>
//                 <p class="card-text">${data[key].priceForDay}</p>
//                 <p class="card-text">${data[key].image}</p>
//                 <p class="card-text">${data[key].postingCatagory}</p>
//                 <p class="card-text">${data[key].priceForWeek}</p>
//                 <p class="card-text">${data[key].priceForMonth}</p>
//               </div>
//             </div>



// <p class="card-text"> Price per day: ${data[key].priceForDay}$</p>
//     <p class="card-text">Price per week: ${data[key].priceForWeek}$</p>
//     <p class="card-text">Price per month: ${data[key].priceForMonth}$</p
