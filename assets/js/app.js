
import {getProductCategories, getAllProducts, getProductsByCategory,getProductById } from "./modules/model/dummyjasonLib.js";


let categoriesDisplayElement='categoriesNav';
let productDisplayElement='productDisplay';

initApp();



function initApp(){
// just to get things started ... happy coding :)

    getProductCategories().then((categories)=>{
      
        buildCategories(categories, "categoriesNav");

    });
    getAllProducts(3,5).then((products) => {
        let productHeadline = "featured products";
        buildProductGalleri(products, "productDisplay", productHeadline);
    });
    
}

function buildCategories(categoreyArray, elementId) { 

    let categoreyElement = document.getElementById(elementId);

    categoreyArray.forEach(categoreyName => {
        categoreyElement.innerHTML += `<button onclick="window._viewCallBacks.categoreyCallback('${categoreyName}')">${categoreyName}</button>` 
    });
}

function buildProductGalleri(productArray, elementId, headline) {
    
    let productGalleryElement = document.getElementById(elementId);
    productGalleryElement.innerHTML = "";
    productGalleryElement.innerHTML += `<h2>${headline}</h2>`
    productArray.forEach(product => {
       productGalleryElement.innerHTML += `<div class='productCard'><img src="${product.thumbnail}" alt="" onclick="window._viewCallBacks.productCallback('${product.id}')"><h4>${product.title}</p><p>Price: ${product.price}</p><p>Stock: ${product.stock}</p></div>`
    });
}

window._viewCallBacks = { categoreyCallback, productCallback};

function categoreyCallback(categoreyName) {
    
    getProductsByCategory(categoreyName).then((productArray)=>{
        
        buildProductGalleri(productArray, "productDisplay", categoreyName);
        // do stuff with returned data
    });
}


function productCallback(id) {
    
    getProductById(id).then((product) =>{
        
        buildProductId(product, "productDisplay");
        // do stuff with returned data
    });
}



function buildProductId(product, elementId,) {
    
    let productIdElement = document.getElementById(elementId);
    productIdElement.innerHTML = "";
    
        productIdElement.innerHTML += `<div class='singleCard'><img src="${product.thumbnail}" alt=""><h4><b>${product.brand}</b></h4><h4>${product.title}</p><p>${product.category}</p><p>Description: <br><br>${product.description}</p><p>Id: ${product.id}</p><p>Price: ${product.price}</p><p>Stock: ${product.stock}</p><button onclick="window._viewCallBacks.categoreyCallback('${product.category}')">${product.category}</button></div>`
    
}
    
/*  product data structure reference
brand: "Huawei"
category: "smartphones"
description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK."
discountPercentage:10.58
id: 5
images: ['https://i.dummyjson.com/data/products/5/1.jpg', 'https://i.dummyjson.com/data/products/5/2.jpg', 'https://i.dummyjson.com/data/products/5/3.jpg']
price: 499
rating: 4.09
stock: 32
thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
title: "Huawei P30" 
*/


  // productGalleryElement.innerHTML += `<div class='productCard'><img src="${product.thumbnail}" alt="" onclick=""><h3><b>${product.brand}</b></h4><h4>${product.title}</p><p>${product.category}</p><p>Description: <br><br>${product.description}</p><p>Id: ${product.id}</p><p>Price: ${product.price}</p><p>Stock: ${product.stock}</p><button onclick="window._viewCallBacks.categoreyCallback('${product.category}')">${product.category}</button></div>






// callBack functions remember hoisting to window eks: window._viewCallBacks = { categoriesCallBack,productCardCallback};

