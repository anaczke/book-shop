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


let books = document.createElement('div');
books.setAttribute('id','bookList');
bookcatalog.append(books);



fetch('./books.json')
        .then(response => {
            return response.json();
        })


                    .then(data => {data?.forEach( book => {
                        let booka = document.createElement('div');

                            booka.innerHTML =
                             `
                            <img src= ${book.imageLink}>
                            <br/>
                             author: ${book.author}
                             <br/>
                              title: ${book.title}
                              <br/>
                              description: ${book.description}
                              <br/>
                              price: ${book.price} eur
                              `;

                            books.append(booka);
                            })});


