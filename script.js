let myLibrary = [];
const table = document.querySelector('table');
const button = document.querySelector('button');

function Book(title, author) {
    this.title = title;
    this.author = author;
};

function addBookToLibrary(book, array) {
    array.push(book);
};

function printLibrary(array) {
    for(let i = 0; i < array.length; i++) {
        console.table(array[i]);
    }
};

function setBook() {
    
}