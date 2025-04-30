const book1 = {
    name: "1984",
    genre: "Dystopian Fiction",
    image: "images/1984.jpg",
    author: "George Orwell",
    pages: "320",
    yearPublished: "1949",
    fiction: true
};
const book2 = {
    name: "The Great Gatsby.",
    genre: "Historical Fiction",
    image: "images/Great-Gatsby.jpg",
    author: "F. Scott Fitzgerald",
    pages: "180 ",
    yearPublished: "1925",
    fiction: true
};
const book3 = {
    name: "To Kill a Mockingbird",
    genre: "Southern Gothic",
    image: "images/mockingbird.jpg",
    author: "Harper Lee",
    pages: "281",
    yearPublished: "1960",
    fiction: true
};
const book4 = {
    name: "The Hunger Games",
    genre: "Dystopian Fiction",
    image: "images/hunger-games.jpg",
    author: "Suzanne Collins",
    pages: "374",
    yearPublished: "2008",
    fiction: true
};
const book5 = {
    name: "Pride and Prejudice",
    genre: "Romance",
    image: "images/pride.jpg",
    author: "Jane Austen",
    pages: "279",
    yearPublished: "1813",
    fiction: true
};

function chooseObject(book){
    if (book == 1) {
        displayObject(book1, 1)
        } else if (book == 2) {
            displayObject(book2, 2)
        } else if (book == 3) {
            displayObject(book3, 3)
        } else if (book == 4) {
            displayObject(book4, 4)
        }  else if (book == 5) {
            displayObject(book5, 5)
        } 
}

function displayObject(book){
    let html = 
    `<h2>${book.name}</h2>` +
    `<h3>${book.genre}</h3>` + `<img src = ${book.image}>` +
    `<h3>Author</h3>` +
    `<p>${book.author}<p>` + `<h3>Pages</h3>` +
    `<p>${book.pages}</p>` + `<h3>Year Published</h3>` +
    `<p>${book.yearPublished}</p>` + `<h3>Is Fiction</h3>` +
    `<p>${book.fiction}</p>`;
    document.getElementById('ob1').innerHTML = html;
}