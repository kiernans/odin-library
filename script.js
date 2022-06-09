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


function makeBook(title, author, status) {
    const myBook = new Book(title, author, status);
    return myBook;
};

function addBookToTable() {
    const tdata = myLibrary[myLibrary.length - 1].title;
    const adata = myLibrary[myLibrary.length - 1].author;
    const sdata = myLibrary[myLibrary.length - 1].status;

    const newRow = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const status = document.createElement('td');
    const remove = document.createElement('button');
    remove.classList.add('remove');

    title.textContent = tdata;
    author.textContent = adata;
    status.textContent = sdata;
    remove.textContent = 'Remove';
    remove.addEventListener('click', () => {
        console.log(tdata);
    });

    newRow.appendChild(title);
    newRow.appendChild(author);
    newRow.appendChild(status);
    newRow.appendChild(remove);
    table.appendChild(newRow);
};

button.addEventListener('click', () => {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const status = document.querySelector('#status');

    const myBook = makeBook(title.value, author.value, status.value);
    addBookToLibrary(myBook, myLibrary);
    addBookToTable();
});