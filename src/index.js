//startup up routine below --> I want something to happen when the page loads
document.addEventListener('DOMContentLoaded', function() {
    
    console.log("The page is loaded!")
    const commentForm = document.getElementById('comment-form')
    const commentsContainer = document.querySelector('#comments-container')
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault()
        console.log("The button was clicked")
        console.log(event)
        const userInputField = event.target.querySelector("#new-comment")
        const userInput = userInputField.value
        // const pTag = document.createElement('p')
        // pTag.textContent = userInput
        // commentsContainer.appendChild(pTag)
        commentsContainer.innerHTML += `<p>${userInput}</p>`
        userInputField.value = ""
    })

    const helicopterNode = document.getElementById('helicopter-parent')
    helicopterNode.addEventListener('click', () => {
        console.log(event.target)
        if (event.target.dataset.name === 'alert'){
            window.alert("Hi from alert!")
        }
        else if (event.target.dataset.name === 'log'){
            console.log("Hi from log!")
        }
        else if (event.target.dataset.name === 'error'){
            console.log("Hi from error")
        }

    })
  
    const firstHeader = document.querySelector('h3')
    firstHeader.addEventListener('click', handleOnClick)
  })

 function handleOnClick () {
    console.log("BUTTON WAS CLICKED!")
}

function someFunc() {
    console.log("inside some func")
}


//OR

// document.addEventListener('DOMContentLoaded', () => {

// })

//OR

// document.addEventListener('DOMContentLoaded', startup)
// function startup() {

// }
// Why no parentheses on startup above?



