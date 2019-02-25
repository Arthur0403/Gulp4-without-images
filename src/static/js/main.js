'use strict';

// let arr = [];
// while(true){
//     let num = prompt('Введите число','');
//     if(num == null || num == '' || isNaN(num)){
//         break
//     }

//     arr.push(+num);

//     var sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//       }
// };

    function find(array, value){
    if(array.indexOf(value)){
        // console.log(arr[i]);
        return array.indexOf(value);
    }
    }

    let arr = ['test', 2, 1.5, false];
    console.log(find(arr, false));
// console.log(arr);

function onScroll(){
    let header = document.querySelector('.header');
    let searchBlock = document.querySelector('.header-middle-wrapper');
    let headerBottom = document.querySelector('.header-bottom');
    let shapeItem = document.querySelectorAll('.shape-item');

    window.addEventListener("scroll", callbackFunc);

    function callbackFunc(){
        let changeY = window.pageYOffset;
        if(changeY > 150) {
            header.classList.add('scroll');
            searchBlock.classList.add('resize');
            headerBottom.classList.add('header-bottom-resize');
        } else {
            header.classList.remove('scroll');
            searchBlock.classList.remove('resize');
            headerBottom.classList.remove('header-bottom-resize')
        }

        if(changeY > 900) {
            for(let i = 0; i < shapeItem.length; i++){
                shapeItem[i].classList.add('shape-item-visible');
            }

        } 
        // else {
        //     for(let i = 0; i < shapeItem.length; i++){
        //         shapeItem[i].classList.remove('shape-item-visible');
        //     }
        // }
    }
}

window.onload = function() {
    onScroll();
}


