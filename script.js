const player = (name) =>{
   const congrats = () => name + " has won!";
    return {name, congrats};
}

const player1 = player(prompt('Enter the name of player 1.'));
const player2 = player(prompt('Enter the name of player 2.'));

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
let title = document.querySelector('h1');
//turn 0 is player 1, turn 1 is player 2, gameboard primed for input
const gameFlow = (() =>{
    let turn = 0;
    let gameBoardArr = ['','','','','','','','',''];
   
    return{
        turn,
        gameBoardArr,
    };
})();
 //check to see who has won the game

function checkWin(){
  
    gameFlow.gameBoardArr.forEach(element =>{
    //player 1 victory horizontal
        if(gameFlow.gameBoardArr[0] == 'X' && gameFlow.gameBoardArr[1] =='X' && gameFlow.gameBoardArr[2] == 'X'){
            title.innerText = player1.congrats();
        }else if(gameFlow.gameBoardArr[3] == 'X' && gameFlow.gameBoardArr[4] =='X' && gameFlow.gameBoardArr[5] == 'X'){
            title.innerText = player1.congrats();
        }else if(gameFlow.gameBoardArr[6] == 'X' && gameFlow.gameBoardArr[7] =='X' && gameFlow.gameBoardArr[8] == 'X'){
            title.innerText = player1.congrats();
        }

        //player 1 victory vertical
        if(gameFlow.gameBoardArr[0] == 'X' && gameFlow.gameBoardArr[3] =='X' && gameFlow.gameBoardArr[6] == 'X'){
            title.innerText = player1.congrats();
        }else if(gameFlow.gameBoardArr[1] == 'X' && gameFlow.gameBoardArr[4] =='X' && gameFlow.gameBoardArr[7] == 'X'){
            title.innerText = player1.congrats();
        }else if(gameFlow.gameBoardArr[2] == 'X' && gameFlow.gameBoardArr[5] =='X' && gameFlow.gameBoardArr[8] == 'X'){
            title.innerText = player1.congrats();
        }

        //player 1 diagonal victory
        if(gameFlow.gameBoardArr[0] == 'X' && gameFlow.gameBoardArr[4] =='X' && gameFlow.gameBoardArr[8] == 'X'){
            title.innerText = player1.congrats();
        }else if(gameFlow.gameBoardArr[6] == 'X' && gameFlow.gameBoardArr[4] =='X' && gameFlow.gameBoardArr[2] == 'X'){
            title.innerText = player1.congrats();
        }

         //player 2 victory horizontal
         if(gameFlow.gameBoardArr[0] == 'O' && gameFlow.gameBoardArr[1] =='O' && gameFlow.gameBoardArr[2] == 'O'){
            title.innerText = player2.congrats();
        }else if(gameFlow.gameBoardArr[3] == 'O' && gameFlow.gameBoardArr[4] =='O' && gameFlow.gameBoardArr[5] == 'O'){
            title.innerText = player2.congrats();
        }else if(gameFlow.gameBoardArr[6] == 'O' && gameFlow.gameBoardArr[7] =='O' && gameFlow.gameBoardArr[8] == 'O'){
            title.innerText = player2.congrats();
        }

        //player 2 victory vertical
        if(gameFlow.gameBoardArr[0] == 'O' && gameFlow.gameBoardArr[3] =='O' && gameFlow.gameBoardArr[6] == 'O'){
            title.innerText = player2.congrats();
        }else if(gameFlow.gameBoardArr[1] == 'O' && gameFlow.gameBoardArr[4] =='O' && gameFlow.gameBoardArr[7] == 'O'){
            title.innerText = player2.congrats();
        }else if(gameFlow.gameBoardArr[2] == 'O' && gameFlow.gameBoardArr[5] =='O' && gameFlow.gameBoardArr[8] == 'O'){
            title.innerText = player2.congrats();
        }
        
        //player 2 diagonal victory
        if(gameFlow.gameBoardArr[0] == 'O' && gameFlow.gameBoardArr[4] =='O' && gameFlow.gameBoardArr[8] == 'O'){
            title.innerText = player2.congrats();
        }else if(gameFlow.gameBoardArr[6] == 'O' && gameFlow.gameBoardArr[4] =='O' && gameFlow.gameBoardArr[2] == 'O'){
            title.innerText = player2.congrats();
        }
        //checks array for empty spaces, creates a tie if none.
        if(gameFlow.gameBoardArr.indexOf('') > -1){
            
        }else{
            title.innerText = "It's a tie!";
        }
   })
}
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
//Used to stop input when there's a winner
function checkTitle(){
    if (title.innerText != 'Tic Tac Toe'){
        return true;
    }else{
        return false;
    }
}

   
    //event listeners for clicking on the board
const displayClick = (() =>{
    space1.addEventListener('click', function(){
       if(checkTitle() === true){
        return;
       }else{
        
        if(checkInput(space1) === true){
            updateBoard(space1, 0);
            checkWin();
            changeTurn();
        }else{
            return;
        }   
    }
    })
    
    space2.addEventListener('click', function(){
        if(checkTitle() === true){
            return;
           }else{
        if(checkInput(space2) === true){
            updateBoard(space2, 1);
            checkWin();
            changeTurn();
        }else{
            return;
        }
    }
    })
    
    space3.addEventListener('click', function(){
        if(checkTitle() === true){
            return;
           }else{
        if(checkInput(space3) === true){
            updateBoard(space3, 2);
            checkWin();
            changeTurn();
        }else{
            return;
        }
    }
    })
    
    space4.addEventListener('click', function(){
        if(checkTitle() === true){
            return;
           }else{
        if(checkInput(space4) === true){
            updateBoard(space4, 3);
            checkWin();
            changeTurn();
        }else{
            return;
        }
    }
    })
    
    space5.addEventListener('click', function(){
        if(checkTitle() === true){
            return;
           }else{
        if(checkInput(space5) === true){
            updateBoard(space5, 4);
            checkWin();
            changeTurn();
        }else{
            return;
        }
    }
    })
    
    space6.addEventListener('click', function(){
        if(checkTitle() === true){
            return;
           }else{
        if(checkInput(space6) === true){
            updateBoard(space6, 5);
            checkWin();
            changeTurn();
        }else{
            return;
        }
    }
    })
    
    space7.addEventListener('click', function(){
        if(checkTitle() === true){
            return;
           }else{
        if(checkInput(space7) === true){
            updateBoard(space7, 6);
            checkWin();
            changeTurn();
        }else{
            return;
        }
    }
    })
    
    space8.addEventListener('click', function(){
        if(checkTitle() === true){
            return;
           }else{
        if(checkInput(space8) === true){
            updateBoard(space8, 7);
            checkWin();
            changeTurn();
        }else{
            return;
        }
    }
    })
    
    space9.addEventListener('click', function(){
        if(checkTitle() === true){
            return;
           }else{
        if(checkInput(space9) === true){
            updateBoard(space9, 8);
            checkWin();
            changeTurn();
        }else{
            return;
        }
    }
    })
  
})();
//reload page to restart program
const restartBtn = document.querySelector('button');

restartBtn.addEventListener('click', function(){
    location.reload();
})



