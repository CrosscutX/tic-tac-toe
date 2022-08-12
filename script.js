//Event listeners for board
let space1 = document.querySelector('.space-1');
let space2 = document.querySelector('.space-2');
let space3 = document.querySelector('.space-3');
let space4 = document.querySelector('.space-4');
let space5 = document.querySelector('.space-5');
let space6 = document.querySelector('.space-6');
let space7 = document.querySelector('.space-7');
let space8 = document.querySelector('.space-8');
let space9 = document.querySelector('.space-9');

const gameFlow = (() =>{
    let turn = 0;
    let gameBoardArr = [space1.textContent,null,null,null,null,null,null,null,null];
    return{
        turn,
        gameBoardArr,
    };
})();



space1.addEventListener('click', function(){
    console.log('fuck');
})

space2.addEventListener('click', function(){
    console.log('fuck');
})

space3.addEventListener('click', function(){
    console.log('fuck');
})

space4.addEventListener('click', function(){
    console.log('fuck');
})

space5.addEventListener('click', function(){
    console.log('fuck');
})

space6.addEventListener('click', function(){
    console.log('fuck');
})

space7.addEventListener('click', function(){
    console.log('fuck');
})

space8.addEventListener('click', function(){
    console.log('fuck');
})

space9.addEventListener('click', function(){
    console.log('fuck');
})
