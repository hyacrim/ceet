var booksList = document.getElementById("books-list");
var addBookButton = document.getElementById("add-book-button");

addBookButton.addEventListener("click", function() {
    var date = new Date();
    document.getElementsByClassName("books-list").innerHTML = date.toLocaleString();
  var author = prompt("Saisir votre message");

  var tr = document.createElement("tr");
  var tdId = document.createElement("td");
  var tddate = document.createElement("td");
  var tdAuthor = document.createElement("td");
  var tdAction = document.createElement("td");

  tddate.textContent = date;
  tdAuthor.textContent = author;

 
  tr.appendChild(tddate);
  tr.appendChild(tdAuthor);
  

  booksList.appendChild(tr);
});
