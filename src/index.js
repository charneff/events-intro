//startup up routine below --> I want something to happen when the page loads

document.addEventListener('DOMContentLoaded', function() {
    const firstHeaderOnPage = document.querySelector('h3')
    firstHeaderOnPage.addEventListener('click', logIt)
    const commentForm = document.getElementById('comment-form')
    commentForm.addEventListener('submit', (event) => {
        console.log(event)
    })

})
function logIt() {
    console.log("THE h3 WAS CLICKED")
}

//OR

// document.addEventListener('DOMContentLoaded', () => {

// })

//OR

// document.addEventListener('DOMContentLoaded', startup)
// function startup() {

// }
// Why no parentheses on startup above?



