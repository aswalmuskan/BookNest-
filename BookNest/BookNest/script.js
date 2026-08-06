// Buy Now Button

let buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        alert("Book added successfully!");

    });

});


// Contact Form

let form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});
let searchButton = document.querySelector(".search-box button");
let searchInput = document.querySelector(".search-box input");

searchButton.addEventListener("click", function () {

    let book = searchInput.value;

    if(book === ""){
        alert("Please enter a book name.");
    } else {
        alert("Searching for: " + book);
    }

});