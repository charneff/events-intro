//startup up routine below --> I want something to happen when the page loads
document.addEventListener('DOMContentLoaded', function() {
    
    console.log("The page is loaded!")
    const commentForm = document.getElementById('comment-form')
    const commentsContainer = document.getElementById('comments-container')
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault()
        console.log(event.target)
        const userInputField = event.target.querySelector('#new-comment')
        const userInputString = userInputField.value
        console.log(userInputString)
        const PTag = document.createElement('p')
        PTag.textContent = userInputString
        commentsContainer.appendChild(PTag)
        userInputField.value = ""
    })
    const helicopterNode = document.getElementById('helicopter-parent')
    helicopterNode.addEventListener('click', function (event) {
        console.log(event.target)
        if (event.target.dataset.name === "alert"){
            window.alert('HI')
        } else if (event.target.dataset.name === "log"){
            window.alert('LOG')
        } else if (event.target.dataset.name === "error"){
            window.alert('ERROR')
        }
    })

    const firstHeader = document.querySelector('h3')
    firstHeader.addEventListener('click', handleOnClick)
  })




 function handleOnClick (){
    console.log("BUTTON WAS CLICKED!")} 

//OR

// document.addEventListener('DOMContentLoaded', () => {

// })

//OR

// document.addEventListener('DOMContentLoaded', startup)
// function startup() {

// }
// Why no parentheses on startup above?



