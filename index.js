console.log("hello world")

//Selecting the HTML element with the message id and saving it to a variable
let message = document.querySelector("#message")

//Creating a new function called addMovie that takes in 'event' as a parameter
function addMovie(event){
   
   //Added to prevent a default action that's running and interfering with the code (because the 'button' is inside a 'form' element)
    event.preventDefault()
    
   //Using querySelector to get the input and setting the value of the input field
   let inputField = document.querySelector("input")

   //Creating a variable called 'movie' and using createElement to store a 'li' element in the variable (this will be the parent element of the movie's title and delete buttons)
    let movie = document.createElement("li")

    //Creating a variable called 'movieTitle' and creating a span element in the variable
    let movieTitle = document.createElement("span")

   //Setting the text content of 'movieTitle' to be the value of inputField (this will be whatever the user types into the span)
    movieTitle.textContent = inputField.value
    
    //Appending the 'movieTitle' span to the 'movie' element
    movie.appendChild(movieTitle)
    
    //Using addEventListener to listen for a click event on the span (movieTitle) and run the crossOffMovie function
    movieTitle.addEventListener("click", crossOffMovie)

    //Using createElement to create a new button element and saving it to a variable called 'deleteBtn'
    let deleteBtn = document.createElement("button")

    //Setting the textContent of 'deleteBtn' to be the letter X
    deleteBtn.textContent = "X"

    //Using addEventListener to listen for a 'click' event on the delete button and then run the 'deleteMovie' function
    deleteBtn.addEventListener("click", deleteMovie)

   //Using appendChild to add the delete button onto the 'movie' element
    movie.appendChild(deleteBtn)

    //Using querySelector to find the 'ul' element in the html and using appendChild to attach the 'movie' element to the unordered list
    document.querySelector("ul").appendChild(movie)
    
   //Setting the value of inputField to an empty string so that the input field is cleared when the 'add' button is clicked
    inputField.value = ""
}

//Using querySelector to select the 'form' element and then using addEventListener to listen for a 'submit' event on the 'form' element and then run the 'addMovie' function
document.querySelector("form").addEventListener("submit", addMovie)

//Creating a function that will remove the entire list item when the button is clicked
function deleteMovie(event){

    //Since the button is a child of the list item, using event.target.parentNode.remove() to remove the entire list item 
    event.target.parentNode.remove()

    //Using textContent to assign a string so that a message will pop up when you delete a movie
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`

    revealMessage()
}

//Creating a function that takes in 'event' as a parameter
function crossOffMovie(event){
    
    //Calling event.target.classList.toggle and passing in the 'checked' class so the class is added or removed if the title is clicked
    event.target.classList.toggle("checked")

    //Creating an if/else block to produce different messages depending on whether a movie is checked off as 'watched' or added back to the list. The condition of the if statement checks if it's true the event.target.classList contains the 'checked' class. If it's true, the message will be 'movie watched', if else, it will be 'movie re-added'
    if (event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} re-added!`
    }

    revealMessage()
}

function revealMessage(){
setTimeout(() => {
    message.classList.remove("hide")
}, 1000)
}