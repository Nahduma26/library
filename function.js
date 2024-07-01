

const myLibrary = [];
const bookTable = document.getElementsByClassName("bookDisplay")[0]
function Book() {
    this.author = '',
    this.title = '',
    this.noOfPages = 0,
    this.read = false,
    this.bookId = myLibrary.length
    this.info = function () {
        return (this.read == true) ? 
        "Book " + this.bookId + ": " + this.title + " by " + this.author + ", " + this.noOfPages + " pages, already read" 
        : "Book " + this.bookId + ": " + this.title + " by " + this.author + ", " + this.noOfPages + " pages, not read yet"
    }
    
}

function addBookToLibrary(author, title, pageCount, isRead){
    const bookToAdd = new Book()
    bookToAdd.author = author
    bookToAdd.title = title
    bookToAdd.noOfPages = pageCount
    bookToAdd.read = isRead
    console.log(bookToAdd)
    console.log(bookToAdd.info())
    myLibrary.push(bookToAdd)
    const newBookRow = document.createElement("tr")
    newBookRow.id = bookToAdd.bookId
    bookTable.appendChild(newBookRow)

    const name = document.createElement("td")
    newBookRow.appendChild(name)
    name.textContent = bookToAdd.title

    const bookAuthor = document.createElement("td")
    newBookRow.appendChild(bookAuthor)
    bookAuthor.textContent = bookToAdd.author

    const pagesRead = document.createElement("td")
    newBookRow.appendChild(pagesRead)
    pagesRead.textContent = bookToAdd.noOfPages

    const bookRead = document.createElement("td")
    bookRead.className = "bookRead"
    newBookRow.appendChild(bookRead)
    if (bookToAdd.read){
        bookRead.textContent = "Yes"
    }
    else {
        bookRead.textContent = "No"
    }
    
    const deleteRow = document.createElement("td")
    newBookRow.appendChild(deleteRow)
    const deleteButton = document.createElement("button")
    deleteRow.appendChild(deleteButton)
    deleteButton.textContent = "Delete"
    deleteButton.className = "deleteButton"

    const changeStatus = document.createElement("td")
    newBookRow.appendChild(changeStatus)
    const changeStatusButton = document.createElement("button")
    changeStatus.appendChild(changeStatusButton)
    changeStatusButton.textContent = "Change Read Status"
    changeStatusButton.className = "changeStatusButton"
}

bookTable.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON' && e.target.className === 'deleteButton') {
      e.target.closest('tr').remove();
    }
    if (e.target.nodeName === 'BUTTON' && e.target.className === 'changeStatusButton') {
        id = e.target.closest('tr').id
        console.log(id)
        bookToChange = myLibrary.find((book) => book.bookId == id)
        if (bookToChange.read === true){
            bookToChange.read = false
            e.target.closest('tr').getElementsByClassName('bookRead')[0].textContent = 'No'
        }
        else{
            bookToChange.read = true
            e.target.closest('tr').getElementsByClassName('bookRead')[0].textContent = 'Yes'
        }
        console.log(bookToChange)
      }
  });

const formButton = document.getElementsByClassName("add-button")[0]

formButton.addEventListener("click", function(){
    document.getElementById("myForm").style.display = "block";
})


const submitButton = document.getElementById("submit")

    submitButton.addEventListener("click", function (){
        if (document.getElementById("title").value !== "" && document.getElementById("author").value !== "" && (!isNaN(document.getElementById("pageCount").value) && document.getElementById("pageCount").value !== "")){
        let titleToAdd = document.getElementById("title").value
        console.log(titleToAdd)
        console.log(document.getElementById("title").value)
        let authorToAdd = document.getElementById("author").value
        console.log(authorToAdd)
        console.log(document.getElementById("author").value)
        let noOfPagesToAdd = document.getElementById("pageCount").value
        console.log(noOfPagesToAdd)
        console.log(document.getElementById("pageCount").value)
        let bookRead = false
        console.log(document.getElementById("readOrNot").value)
        if (document.getElementById("readOrNot").value == 'Yes'){
            bookRead = true
        }
        addBookToLibrary(titleToAdd, authorToAdd, noOfPagesToAdd, bookRead)
        console.log(myLibrary)

        document.getElementById("myForm").style.display = "none";
        document.getElementById("title").value = ""
        document.getElementById("author").value = ""
        document.getElementById("pageCount").value = ""
    }
    })


