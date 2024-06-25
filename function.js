const myLibrary = [];

function Book() {
    this.author = '',
    this.title = '',
    this.noOfPages = 0,
    this.read = false,
    this.info = ''

    if (this.read == true){
        this.info = this.title + " by " + this.author + ", " + this.noOfPages + " pages, already read"
    }
    else {
        this.info = this.title + " by " + this.author + ", " + this.noOfPages + " pages, not read yet"
    }
}

function addBookToLibrary(author, title, pageCount, isRead){
    const bookToAdd = new Book()
    bookToAdd.author = author
    bookToAdd.title = title
    bookToAdd.pageCount = pageCount
    bookToAdd.isRead = isRead
    console.log(bookToAdd)
    myLibrary.push(bookToAdd)
}

const addButton = document.getElementsByClassName("add-button")[0]

addButton.addEventListener("click", function(){
    document.getElementById("myForm").style.display = "block";
})

const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", function (){
    const titleToAdd = document.getElementById("title").textContent
    console.log(titleToAdd)
    console.log(document.getElementById("title").textContent)
    const authorToAdd = document.getElementById("author").textContent
    console.log(authorToAdd)
    console.log(document.getElementById("author").textContent)
    const noOfPagesToAdd = document.getElementById("pageCount").textContent
    console.log(noOfPagesToAdd)
    console.log(document.getElementById("pageCount").textContent)
    let bookRead = false
    console.log(document.getElementById("readOrNot").textContent)
    if (document.getElementById("readOrNot").textContent == 'Yes'){
        bookRead = true
    }
    addBookToLibrary(titleToAdd, authorToAdd, noOfPagesToAdd, bookRead)
    console.log(myLibrary)
})

