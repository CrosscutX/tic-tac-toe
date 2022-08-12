const player = (name) =>{
   const congrats = () => `${name} has won!`
    return{congrats};
}

//const player1 = player(prompt('Enter the name of player 1.'));
//const player2 = player(prompt('Enter the name of player 2.'));

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
//turn 0 is player 1, turn 1 is player 2, gameboard primed for input
const gameFlow = (() =>{
    let turn = 0;
    let gameBoardArr = [null,null,null,null,null,null,null,null,null];
    return{
        turn,
        gameBoardArr,
    };
})();
//control the turn variable in gameflow
function changeTurn(){
    if(gameFlow.turn === 0){
        gameFlow.turn = 1;
    }else if(gameFlow.turn === 1){
        gameFlow.turn = 0;
    }
}
    //check if each space already has an input
function checkInput(space){
    let flag = true;
    if(space.textContent === ''){
        flag = true;
    }else{
        flag = false;
    }
    return flag;
}
    //update the board and array in gameflow with the proper input
function updateBoard(space,num){
    if(gameFlow.turn === 0){
        space.textContent = 'X';
        gameFlow.gameBoardArr[num] = 'X';
    }else if(gameFlow.turn === 1){
        space.textContent = 'O';
        gameFlow.gameBoardArr[num] = 'O'
    }
}
    //event listeners for clicking on the board
const displayClick = (() =>{
    space1.addEventListener('click', function(){
        console.log('1');
        
        if(checkInput(space1) === true){
            updateBoard(space1, 0);
            changeTurn();
        }else{
            return;
        }
        
        
    })
    
    space2.addEventListener('click', function(){
        console.log('2');

        if(checkInput(space2) === true){
            updateBoard(space2, 1);
            changeTurn();
        }else{
            return;
        }
    })
    
    space3.addEventListener('click', function(){
        console.log('3');

        if(checkInput(space3) === true){
            updateBoard(space3, 2);
            changeTurn();
        }else{
            return;
        }
    })
    
    space4.addEventListener('click', function(){
        console.log('4');

        if(checkInput(space4) === true){
            updateBoard(space4, 3);
            changeTurn();
        }else{
            return;
        }
    })
    
    space5.addEventListener('click', function(){
        console.log('5');

        if(checkInput(space5) === true){
            updateBoard(space5, 4);
            changeTurn();
        }else{
            return;
        }
    })
    
    space6.addEventListener('click', function(){
        console.log('6');

        if(checkInput(space6) === true){
            updateBoard(space6, 5);
            changeTurn();
        }else{
            return;
        }
    })
    
    space7.addEventListener('click', function(){
        console.log('7');

        if(checkInput(space7) === true){
            updateBoard(space7, 6);
            changeTurn();
        }else{
            return;
        }
    })
    
    space8.addEventListener('click', function(){
        console.log('8');

        if(checkInput(space8) === true){
            updateBoard(space8, 7);
            changeTurn();
        }else{
            return;
        }
    })
    
    space9.addEventListener('click', function(){
        console.log('9');

        if(checkInput(space9) === true){
            updateBoard(space9, 8);
            changeTurn();
        }else{
            return;
        }
        console.log(gameFlow.gameBoardArr);
    })
  
})();

function checkWin(){
    
}



