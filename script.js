let myLibrary = [];
const table = document.querySelector('table');
const button = document.querySelector('button');

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
};

function addBookToLibrary(book, array) {
    array.push(book);
};

function printLibrary(array) {
    for(let i = 0; i < array.length; i++) {
        console.table(array[i]);
    }
};

function makeBook(title, author, status) {
    const myBook = new Book(title, author, status);
    return myBook;
}

button.addEventListener('click', () => {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const status = document.querySelector('#status');

    const myBook = makeBook(title.value, author.value, status.value);
    addBookToLibrary(myBook, myLibrary);
});