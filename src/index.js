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

    const firstButton = document.querySelector('button')
    firstButton.addEventListener('click', handleOnClick)
  })




 function handleOnClick (){
    console.log("BUTTON WAS CLICKED!")} 