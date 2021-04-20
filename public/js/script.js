// slick slider 
$(document).ready( function(){
    $('.img-slide').slick({
        autoplay: true,
        slideToShow: 1,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        fade: true,
        speed: 2000,
        infinite: true,
        loop: true
    });
});


document.addEventListener('DOMContentLoaded', () => {

    if( !localStorage.getItem('emailAccounts') ){
        localStorage.setItem('emailAccounts', '');
    }else {

        localStorage.setItem('emailAccounts', localStorage.getItem('emailAccounts') );
    }


})



const addStockWrapper1 = document.getElementById('add-stock-inner-wrapper-1');
const addStockOverlay1 = document.getElementById('add-stock-wrapper-1');
const addStockWrapper2 = document.getElementById('add-stock-inner-wrapper-2');
const addStockOverlay2 = document.getElementById('add-stock-wrapper-2');
const addStockWrapper3 = document.getElementById('add-stock-inner-wrapper-3');
const addStockOverlay3 = document.getElementById('add-stock-wrapper-3');

let showAddStock1 = () => {

    addStockOverlay1.style.display = 'block';
    addStockWrapper1.style.display = 'block';
    addStockOverlay2.style.display = 'none';
    addStockWrapper2.style.display = 'none';
    addStockOverlay3.style.display = 'none';
    addStockWrapper3.style.display = 'none';
    
}


let showAddStock2 = () => {

    addStockOverlay1.style.display = 'none';
    addStockWrapper1.style.display = 'none';
    addStockOverlay2.style.display = 'block';
    addStockWrapper2.style.display = 'block';
    addStockOverlay3.style.display = 'none';
    addStockWrapper3.style.display = 'none';   
}


let showAddStock3 = () => {

    addStockOverlay1.style.display = 'none';
    addStockWrapper1.style.display = 'none';
    addStockOverlay2.style.display = 'none';
    addStockWrapper2.style.display = 'none';
    addStockOverlay3.style.display = 'block';
    addStockWrapper3.style.display = 'block';
    
}


// remove the modal
let removeModal = () => {
    addStockOverlay1.style.display = 'none';
    addStockWrapper1.style.display = 'none';
    addStockOverlay2.style.display = 'none';
    addStockWrapper2.style.display = 'none';
    addStockOverlay3.style.display = 'none';
    addStockWrapper3.style.display = 'none';
}


let productData1;
let productData2;
let counter1;
let counter2;


// add stock to loaclstorage for product 1
const addStock = (event) => {
    event.preventDefault();
    let weekNumber1 = document.querySelector('#week-number-1').value;
    let product1Name = document.querySelector('#product-name-1').value;
    let noOfProduct1Items = document.querySelector('#product-items-1').value;
    let price1 = document.querySelector('#product-item-price-1').value;

    productData1 = {
        week: parseInt(weekNumber1),
        productName: product1Name,
        numberOfItems: parseInt(noOfProduct1Items),
        price: parseInt(price1),
        total: parseInt(price1) * parseInt(noOfProduct1Items)
    };

    let x = JSON.stringify(productData1);

    let obj = new Object(x);


    counter1 = localStorage.getItem('counter1');

    if( !counter1 ){
        counter1 = 1;
        localStorage.setItem('counter1', counter1);
        localStorage.setItem('product-1-week-'+productData1.week, obj);
    }else {
        counter1++;
        localStorage.setItem('counter1', counter1);
        localStorage.setItem('product-1-week-'+productData1.week, obj);
    }
    

    window.location.reload('file:///C:/Users/Andrica/Music/stock-management/index.html');

}




// add stock to loaclstorage for product 2
const addStock2 = (event) => {
    event.preventDefault();
    let weekNumber2 = document.querySelector('#week-number-2').value;
    let product2Name = document.querySelector('#product-name-2').value;
    let noOfProduct2Items = document.querySelector('#product-items-2').value;
    let price2 = document.querySelector('#product-item-price-2').value;

    productData2 = {
        week: parseInt(weekNumber2),
        productName: product2Name,
        numberOfItems: parseInt(noOfProduct2Items),
        price: parseInt(price2),
        total: parseInt(price2) * parseInt(noOfProduct2Items)
    };

    let x = JSON.stringify(productData2);

    let obj = new Object(x);


    counter2 = localStorage.getItem('counter2');

    if( !counter2 ){
        counter2 = 1;
        localStorage.setItem('counter2', counter2);
        localStorage.setItem('product-2-week-'+productData2.week, obj);
    }else {
        counter2++;
        localStorage.setItem('counter2', counter2);
        localStorage.setItem('product-2-week-'+productData2.week, obj);
    }
    

    window.location.reload('file:///C:/Users/Andrica/Music/stock-management/index.html');

}






// add stock to loaclstorage for product 3
const addStock3 = (event) => {
    event.preventDefault();
    let weekNumber3 = document.querySelector('#week-number-3').value;
    let product3Name = document.querySelector('#product-name-3').value;
    let noOfProduct3Items = document.querySelector('#product-items-3').value;
    let price3 = document.querySelector('#product-item-price-3').value;

    productData3 = {
        week: parseInt(weekNumber3),
        productName: product3Name,
        numberOfItems: parseInt(noOfProduct3Items),
        price: parseInt(price3),
        total: parseInt(price3) * parseInt(noOfProduct3Items)
    };

    let x = JSON.stringify(productData3);

    let obj = new Object(x);


    counter3 = localStorage.getItem('counter3');

    if( !counter3 ){
        counter3 = 1;
        localStorage.setItem('counter3', counter3);
        localStorage.setItem('product-3-week-'+productData3.week, obj);
    }else {
        counter3++;
        localStorage.setItem('counter3', counter3);
        localStorage.setItem('product-3-week-'+productData3.week, obj);
    }
    

    window.location.reload('file:///C:/Users/Andrica/Music/stock-management/index.html');

}



// get the items from localStorage

let counterValue1 = localStorage.getItem('counter1');
let counterValue2 = localStorage.getItem('counter2');
let counterValue3 = localStorage.getItem('counter3');
let output = '';
let output2 = '';
let output3 = '';


// output data for product 1
for(let index = 1; index <= counterValue1; index++){

    if( !localStorage.getItem('product-1-week-'+index) ) {
        // product does not exist for this week
        console.log('')
    }else{
        // console.log(localStorage.getItem('product-1-week-'+index))
        let currentObj = JSON.parse(localStorage.getItem('product-1-week-'+index));
        let dataObj = JSON.parse(localStorage.getItem('product-1-week-'+index));
        if( dataObj.numberOfItems != 0 ){
        output = `<tr>
                        <td>${currentObj.week}</td>
                        <td>${currentObj.numberOfItems}</td>
                        <td>R${currentObj.price}</td>
                        <td>R${currentObj.total}</td>
                        <td><button class="btn btn-md" id="product-1-week-${index}" onclick="showSellerModal(event)">sell</button></td>
                <tr>`;

        document.querySelector('.table-1 tbody').innerHTML += output;
        }
    }

}




// output data for product 2
for(let index = 1; index <= counterValue2; index++){

    if( !localStorage.getItem('product-2-week-'+index) ) {
        // product does not exist for this week
        console.log('')
    }else{
        // console.log(localStorage.getItem('product-1-week-'+index))
        let currentObj = JSON.parse(localStorage.getItem('product-2-week-'+index));
        let dataObj = JSON.parse(localStorage.getItem('product-2-week-'+index));
        if( dataObj.numberOfItems != 0 ){
        output2 = `<tr>
                        <td>${currentObj.week}</td>
                        <td>${currentObj.numberOfItems}</td>
                        <td>R${currentObj.price}</td>
                        <td>R${currentObj.total}</td>
                        <td><button class="btn btn-md" id="product-2-week-${index}" onclick="showSellerModal(event)">sell</button></td>
                <tr>`;

        document.querySelector('.table-2 tbody').innerHTML += output2;
        }
    }

}




// output data for product 3
for(let index = 1; index <= counterValue3; index++){

    if( !localStorage.getItem('product-3-week-'+index) ) {
        // product does not exist for this week
        console.log('')
    }else{

        

        let currentObj = JSON.parse(localStorage.getItem('product-3-week-'+index));
        let dataObj = JSON.parse(localStorage.getItem('product-3-week-'+index));
        if( dataObj.numberOfItems != 0 ){
        output3 = `<tr>
                        <td>${currentObj.week}</td>
                        <td>${currentObj.numberOfItems}</td>
                        <td>R${currentObj.price}</td>
                        <td>R${currentObj.total}</td>
                        <td><button class="btn btn-md" id="product-3-week-${index}" onclick="showSellerModal(event)">sell</button></td>
                <tr>`;

        document.querySelector('.table-3 tbody').innerHTML += output3;

        }
    }

}



// show selling products modal
function showSellerModal(event){
    event.preventDefault();
    let modalOverlay = document.getElementById('last-overlay');
    let modal = document.getElementById('sell-product-modal');

    modalOverlay.style.display = 'block';
    modal.style.display = 'block';  
    
    // get localStorage data
    let idOfWeek = event.target.getAttribute('id');
    let data = JSON.parse(localStorage.getItem(idOfWeek) );

    document.getElementById('price-amount').innerText = parseInt(data.price);
    document.getElementById('total-amount').innerText = parseInt(data.price);
    document.getElementById('buyitems').setAttribute('max', data.numberOfItems);


    document.getElementById('buyitems').addEventListener('keyup', () => {
    
        let itemsValue = document.getElementById('buyitems').value;
    
        document.getElementById('total-amount').innerText = parseInt(data.price) * parseInt(itemsValue);
        console.log('keypress activated');

    
    
            
    //click sell button
    document.forms['sell-product-form'].addEventListener('submit', (event) => {
        event.preventDefault();

        let email = document.getElementById('email').value;

        let emailAccounts =  localStorage.getItem('emailAccounts');
        console.log('Email Accounts: ', emailAccounts);

        // check if user already bought items
        if( emailAccounts.indexOf(email) !== -1 ){
            // alert('Email Address has already been used, Sorry you cannot purchase any more items using this email address.');
            console.log('Email Address has already been used');
            showUsedEmailBox();
        }else{
           


            if( itemsValue > data.numberOfItems ){
                // alert('Your number of items is greater than available items');
            }
            else{
                // alert('You have sold these items to the customer!');

                 
                console.log('else code has been executed');
                if( itemsValue == 0 ){
                    console.log('There are no products available');
                }else{

                    emailAccounts = emailAccounts.concat(email);
                    localStorage.setItem('emailAccounts', emailAccounts);
    
                    let totalResult = parseInt(data.total) - parseInt(document.getElementById('total-amount').innerText);
                    let itemsCountResult = parseInt(data.numberOfItems) - parseInt(itemsValue);
    
                    let newDataObj = {
                        numberOfItems: itemsCountResult,
                        price: data.price,
                        productName: data.productName,
                        total: totalResult,
                        week: data.week
                    }
    
                    localStorage.setItem(idOfWeek, JSON.stringify(newDataObj) );
    
                    console.log('success');
                    document.getElementById('items-sold-modal').style.display = 'block';
                    document.getElementById('items-sold-overlay').style.display = 'block';
    
    
                    document.querySelector('.success-btn').addEventListener('click', (event) => {
                        window.location.reload('file:///C:/Users/Andrica/Music/stock-management/index.html');
                    });
    
                   
    
    
                }
                
            }

        }


      

    })
    
        
        
    })

}



// remove selling products modal
function removeSellerModal(){
    let modalOverlay = document.getElementById('last-overlay');
    let modal = document.getElementById('sell-product-modal');

    modalOverlay.style.display = 'none';
    modal.style.display = 'none';
    console.log('this modal is to be removed');

}


// used email alert box function
function showUsedEmailBox(){
    let itemsSoldOverlay = document.getElementById('items-sold-overlay');
    let usedEmailWrapper = document.getElementById('used-email-wrapper');

    itemsSoldOverlay.style.display = 'block';
    usedEmailWrapper.style.display = 'block';

}

  


document.querySelector('#used-email-btn').addEventListener('click', () => {
    let itemsSoldOverlay = document.getElementById('items-sold-overlay');
    let usedEmailWrapper = document.getElementById('used-email-wrapper');
    
    itemsSoldOverlay.style.display = 'none';
    usedEmailWrapper.style.display = 'none';
})


document.querySelector('#add-stock-form-1').addEventListener('submit', addStock)
document.querySelector('#add-stock-form-2').addEventListener('submit', addStock2)
document.querySelector('#add-stock-form-3').addEventListener('submit', addStock3)


