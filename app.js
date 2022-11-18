let wrapper = document.getElementById('wrapper');
let header = document.createElement('div');
header.setAttribute('id','header');
wrapper.append(header);

let welcome = document.createElement('p');
welcome.textContent = "Welcome to";
header.append(welcome);

let title = document.createElement('div');
title.innerHTML = "<h1>Amazing Bookshop Online</h1>";
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
                            booka.setAttribute('class','book');
                            booka.innerHTML =
                             `
                            <div>
                                 <img src= ${book.imageLink}>
                            </div>
                            <div>
                                <p><span> author:</span> ${book.author}</p>
                                <p><span>title:</span>  ${book.title}</p>
                                <p><span>description:</span>  ${book.description}</p>
                                <p><span>price:</span>  ${book.price} eur</p>
                            </div>
                              `;

                            books.append(booka);
                            })});



