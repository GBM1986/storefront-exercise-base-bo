
import {getProductCategories} from "./modules/model/dummyjasonLib.js";


let categoriesDisplayElement='categoriesNav';
let productDisplayElement='productDisplay';

initApp();



function initApp(){
// just to get things started ... happy coding :)

    getProductCategories().then((categories)=>{
      
        buildCategories(categories, "categoriesNav");

    });
    
}

function buildCategories(categoreyArray, elementId) { 
    console.log(categoreyArray, elementId);
    
}






// callBack functions remember hoisting to window eks: window._viewCallBacks = { categoriesCallBack,productCardCallback};

