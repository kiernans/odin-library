let myLibrary = [];
const tbody = document.querySelector('tbody');
const button = document.querySelector('button');

function clearInput(title, author, pages) {
    title.value = '';
    author.value = '';
    pages.value = '';
}

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};


function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

Book.prototype.addBookToLibrary = function(array) {
    array.push(this);
};

Book.prototype.removeBookFromLibrary = function(array, event) {
    array.splice(event.target.classList, 1); //Placed index of row in remove button
};

Book.prototype.addBookToTable = function(index) {
    const tdata = myLibrary[index].title;
    const adata = myLibrary[index].author;
    const pdata = myLibrary[index].pages;
    const sdata = myLibrary[index].status;

    const newRow = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const pages = document.createElement('td');
    const statusColumn = document.createElement('td');
    const status = document.createElement('button');
    const removeColumn = document.createElement('td');
    const remove = document.createElement('button');
    remove.classList.add(`${index}`);

    title.textContent = tdata;
    author.textContent = adata;
    pages.textContent = pdata;
    status.textContent = sdata;
    status.addEventListener('click', (e) => {
        e.target.textContent = this.setStatus();
    });

    remove.textContent = 'Remove';
    remove.addEventListener('click', (e) => {
        this.removeBookFromTable(e);
    });

    newRow.appendChild(title);
    newRow.appendChild(author);
    newRow.appendChild(pages);
    statusColumn.appendChild(status);
    newRow.appendChild(statusColumn);
    removeColumn.appendChild(remove);
    newRow.appendChild(removeColumn);
    tbody.appendChild(newRow);
};

Book.prototype.removeBookFromTable = function(event){
    console.log("Removing from table...");
    removeAllChildNodes(tbody);
    this.removeBookFromLibrary(myLibrary, event);

    for(let index = 0; index < myLibrary.length; index++) {
        this.addBookToTable(index);
    }
};

Book.prototype.setStatus = function() {
    if(this.status === 'Read') return this.status = 'Not Read';
    return this.status = 'Read';
};



button.addEventListener('click', () => {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const status = document.querySelector('#status');

    const myBook = new Book(title.value, author.value, pages.value, status.value);
    myBook.addBookToLibrary(myLibrary);
    myBook.addBookToTable(myLibrary.length-1);
    

    clearInput(title, author, pages);
});


