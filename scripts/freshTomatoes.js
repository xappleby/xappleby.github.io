//this program gives functionality to Xio's Fresh Tomatoes website pages

//creates a function to save so user can earmark links to movies, tv shows and books in a personal folder to be able to go back and see them later.
//When an item is added an alert tells the user how many items are in their “Save for later” folder.
const saveButtons = document.querySelectorAll(".save")
saveButtons.forEach(button => {
  button.addEventListener("click", event => {
    const link = button.getAttribute('id');
    let savedLinks = JSON.parse(sessionStorage.getItem('savedLinks')) || [];
    savedLinks.push(link);
    let counter= savedLinks.length
    sessionStorage.setItem('savedLinks', JSON.stringify(savedLinks));
    
    alert("You have " + counter + " links saved for later")
  })
})

// Creates a form which allows a user to leave comments and displays the comment in the browser
// if input field is empty it alerts the user to leave a comment
let userComment = () => {
  let comment = document.getElementById("comment").value
    if (comment === ""){
      alert("We'd love for you to leave a comment!")
    }
    else{
      alert("Thank you so much for your comment, you have great taste!")
      let commentPar= document.createElement("p")
      commentPar.innerHTML = comment
      commentPar.setAttribute("id","comment-par")
      document.getElementById("comment-form").appendChild(commentPar)
      document.getElementById("comment").value = ""
    }
}

// Create forms to allow a user to “like” a recommendation
likeButtons = document.querySelectorAll(".like")
likeButtons.forEach(button => {
  button.addEventListener("click", () =>{
    button.innerHTML = "LIKED"
    button.style.color = "blue"
  });
})

// function to allow a person to contact me, in this case to subscribe
// if name and address fields are empty it alerts user to enter them
let subscribe = () => {
  let name = document.getElementById("name").value
  let email = document.getElementsByClassName("email").value
    if (name === "" || email === ""){
      alert("Please enter name and email address")
    }
    else{
      alert("Thanks for subscribing!")
    }
}



