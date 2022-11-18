let wrapper = document.getElementById('wrapper');
let header = document.createElement('div');
header.setAttribute('id','header');
wrapper.append(header);

let welcome = document.createElement('p');
welcome.textContent = "Welcome to";
header.append(welcome);

let title = document.createElement('h1');
title.textContent = "Amazing Bookshop Online";
header.append(title);

let bookcatalog = document.createElement('div');
bookcatalog.setAttribute('id','bookcatalog');
wrapper.append(bookcatalog);

let catTitle = document.createElement('h3');
catTitle.setAttribute('class', 'midTitle');
catTitle.textContent = 'Book Catalogue';
bookcatalog.append(catTitle);


let books = document.createElement('ul');
books.setAttribute('id','bookList');
bookcatalog.append(books);



fetch('./books.json')
        .then(response => {
            return response.json();
        })
        // .then(data => {data.forEach( book => {
        //      for (let key in book) {
        //         console.log(`${key}: ${book[key]}`)
        //      }})})

        .then(data => {data?.forEach( book => {

                for (let key in book) {
                    let booka = document.createElement('li');
                    booka.innerHTML = `${key}: ${book[key]}`;
                    // console.log(booka)
                    books.append(booka);
                    }})});




