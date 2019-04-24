function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'scissors')
        return 'You Win! Rock beats Scissors';
    if(playerSelection == 'paper' && computerSelection == 'rock')
        return 'You Win! Paper beats Rock';
    if(playerSelection == 'scissors' && computerSelection == 'paper')
        return 'You Win! Scissors beats Paper';
    if(playerSelection == computerSelection)
        return 'Tie';
    return 'You Lose! ' + computerSelection + ' beats ' + playerSelection; 
}

function computerPlay(){
    var play = Math.floor(Math.random() * 3);
    switch(play){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function game(){
    var p = 0, c = 0;
    for(var i = 0; i < 5; i++){
        var player = window.prompt('Pick rock/paper/scissors').toLowerCase();
        var computer = computerPlay();
        var res = playRound(player, computer); 
        alert(res);
        res = res.toLowerCase();
        if(res.includes('win'))
            p++;
        else if(res != 'tie')
            c++;
    }
    alert('Final Score: ' + p + ' - ' + c);
}

game();