
import {getProductCategories} from "./modules/model/dummyjasonLib.js";


let categoriesDisplayElement='categoriesNav';
let productDisplayElement='productDisplay';

initApp();



function initApp(){
// just to get things started ... happy coding :)

    getProductCategories().then((categories)=>{
      
       console.log(categories);

    });
    
}



// callBack functions remember hoisting to window eks: window._viewCallBacks = { categoriesCallBack,productCardCallback};

