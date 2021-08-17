
let arr=[{
    id:1,
    title:'Наименование товара',
    img:src='./images/Rectangle 31.png',
    info:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price:'10 000 руб.',
}];
const cardsList = document.querySelector('.cards-list')
const addButton = document.querySelector('.add');
const title = document.querySelector('.form-title');
const img = document.querySelector('.form-img');
const info = document.querySelector('.form-info');
const price = document.querySelector('.form-price');
const card = document.querySelector('.card');

addButton.addEventListener('click', function(){
     const newCard = {
         id:1,
         title:title.value,
         img:img.value,
         info:info.value,
         price:price.value
     }
     arr.push(newCard);
     show()
});

function show(){
    let show = '';
    arr.forEach(function(item){
        show += `
        <div class="card">
            <div class="delete">
                <img class="delete-icon" src="./images/delete 1.png"> 
            </div>
            <img class="card-img" src="${item.img}">
            <h2 class="card-title">${item.title}</h2>
            <p class="card-info">${item.info}</p>
            <p class="card-price">${item.price} руб</p>
        </div>
        `
         cardsList.innerHTML= show;
    })
}
show()


conolelog("hi")