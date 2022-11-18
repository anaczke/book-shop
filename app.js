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
                                <p><span>price:</span>  ${book.price} eur</p>
                                <button class='showMore'>Show more</button>
                                <div class='description' hidden>
                                 ${book.description}
                                 <p class='showLess'>Show less...</p>
                                 </div>
                                <button class='addToCart'>Add to chart</button>
                            </div>
                              `;

                            books.append(booka);
                            })});

const bookList = document.getElementById('bookList');

const showDescription = e => {
    let target = e.target;
    if(target.className != 'showMore') return;
    target.nextElementSibling.removeAttribute('hidden')
};
bookList.addEventListener('click', showDescription);

const hideDescription = e =>{
    let target = e.target;
    if(target.className != 'showLess') return;
    target.parentElement.setAttribute('hidden','hidden');
}
bookList.addEventListener('click', hideDescription);
