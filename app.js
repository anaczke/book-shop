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

let innerWrapper = document.createElement('div');
innerWrapper.setAttribute('id','innerWrapper');
wrapper.append(innerWrapper);

let bookcatalog = document.createElement('div');
bookcatalog.setAttribute('id','bookcatalog');
innerWrapper.append(bookcatalog);

let catTitle = document.createElement('h3');
catTitle.setAttribute('class', 'midTitle');
catTitle.textContent = 'Book Catalogue';
bookcatalog.append(catTitle);


let books = document.createElement('div');
books.setAttribute('id','bookList');
bookcatalog.append(books);



fetch('../books.json')
        .then(response => {
            return response.json();
        })
                    .then(data => {data?.forEach( book => {
                        let fragment = document.createDocumentFragment();
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
                                <button class='addToOrder'>Order</button>
                            </div>
                              `;

                            fragment.append(booka);
                            books.append(fragment);
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

//order books
let cart = document.createElement('div');
cart.setAttribute('id','cart');
innerWrapper.append(cart);

let cartTitle = document.createElement('h3');
cartTitle.setAttribute('class', 'midTitle');
cartTitle.textContent = 'Order Books';
cart.append(cartTitle);

let buttons = document.getElementsByTagName('button');


const addToOrder = e => {
    let target = e.target;
    if(target.className != 'addToOrder') return;
    let cloneBook = target.parentElement.parentElement.cloneNode(true);
    cart.append(cloneBook);
    target.parentElement.parentElement.style.borderLeftWidth = "10px";
    target.parentElement.parentElement.style.backgroundColor = "lightgrey";
    e.target.disabled = 'true';

    let closeBtn = document.createElement('button');
    closeBtn.textContent= 'X';
    closeBtn.setAttribute('class','delFromOrder');
    cloneBook.append(closeBtn);

    cloneBook.style.justifyContent = 'space-between'
};
bookList.addEventListener('click', addToOrder);

const delFromOrder = e =>{
    let target = e.target;
    if(target.className != 'delFromOrder') return;
    target.parentElement.remove()
}
//może jest jakieś odwracanie działąnia funkcji??? np. addToOrder revert

cart.addEventListener('click', delFromOrder);

let confBtn = document.createElement('button');
confBtn.textContent = 'Confirm Order';
confBtn.setAttribute('id','confBtn');
confBtn.innerHTML = '<a href="./DeliveryForm/deliveryForm.html ">Confirm Order</a>'
cart.append(confBtn);



