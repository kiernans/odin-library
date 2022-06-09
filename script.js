let myLibrary = [];
const table = document.querySelector('table');
const button = document.querySelector('button');

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

Book.prototype.addBookToLibrary = function(array) {
    array.push(this);
};

function clearInput(title, author, pages) {
    title.value = '';
    author.value = '';
    pages.value = '';
}

Book.prototype.addBookToTable = function() {
    const tdata = myLibrary[myLibrary.length - 1].title;
    const adata = myLibrary[myLibrary.length - 1].author;
    const pdata = myLibrary[myLibrary.length - 1].pages;
    const sdata = myLibrary[myLibrary.length - 1].status;

    const newRow = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const pages = document.createElement('td');
    const status = document.createElement('td');
    const remove = document.createElement('button');
    remove.classList.add('remove');

    title.textContent = tdata;
    author.textContent = adata;
    pages.textContent = pdata;
    status.textContent = sdata;
    remove.textContent = 'Remove';
    remove.addEventListener('click', () => {
        console.log(tdata);
    });

    newRow.appendChild(title);
    newRow.appendChild(author);
    newRow.appendChild(pages);
    newRow.appendChild(status);
    newRow.appendChild(remove);
    table.appendChild(newRow);
};

button.addEventListener('click', () => {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const status = document.querySelector('#status');

    const myBook = new Book(title.value, author.value, pages.value, status.value);
    myBook.addBookToLibrary(myLibrary);
    myBook.addBookToTable();

    clearInput(title, author, pages);
});