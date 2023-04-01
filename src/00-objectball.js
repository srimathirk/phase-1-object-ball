function gameObject(){
    return{
    home:{
        teamName: "Brooklyn Nets",
        colors: ["Black","White"],
        players: {
            "Alan Anderson":{
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
            },
            "Reggie Evans":{
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
            },
            "Brook Lopez":{
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
            },
            "Mason Plumlee":{
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
            },
            "Jason Terry":{
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
            },
        },
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise","Purple"],
        players: {
            "Jeff Adrien":{
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
            },
            "Bismak Biyombo":{
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
            },
            "DeSagna Diop":{
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
            },
            "Ben Gordon":{
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
            },
            "Brendan Haywood":{
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
            }, 
    },
},
}
}
function homeTeamName() {
  
  return gameObject().home.teamName
}

//console.log(homeTeamName());
function numPointsScored(playerName){
    
    const homePlayers = gameObject().home.players
    const awayPlayers = gameObject().away.players
    const bothplayers = {...homePlayers,...awayPlayers}
    

for(let player in bothplayers){
    if(player === playerName){
    return bothplayers[playerName].points
    }   
}
}

console.log(numPointsScored("Ben Gordon"))
function shoeSize(playerName){
 const homePlayers = gameObject().home.players
    const awayPlayers = gameObject().away.players
    const bothplayers = {...homePlayers,...awayPlayers}
    

for(let player in bothplayers){
    if(player === playerName){
    return bothplayers[playerName].shoe
    }   
}   
}
console.log(shoeSize("Ben Gordon"))
function teamColors(teamName){
    if (teamName === 'Brooklyn Nets'){
        return gameObject().home.colors
    }
    else if (teamName === 'Charlotte Hornets'){
        return gameObject().away.colors
    }
}
console.log(teamColors('Brooklyn Nets'))
console.log(teamColors('Charlotte Hornets'))
function teamNames(){
    return [gameObject().home.teamName, gameObject().away.teamName]
}
console.log(teamNames())
function playerNumbers(teamName){
    const homePlayers = gameObject().home.players
    const awayPlayers = gameObject().away.players
   const playerNumber=[];
    if(teamName === gameObject().home.teamName){
        for(let player in homePlayers){
    (playerNumber.push(homePlayers[player].number));
        }
}
    else if(teamName === gameObject().away.teamName){
        for(let player in awayPlayers){
            (playerNumber.push(awayPlayers[player].number));
        }
        }
    return playerNumber;
}

console.log(playerNumbers("Brooklyn Nets"))
console.log(playerNumbers("Charlotte Hornets"))
function playerStats(playersName){
    const homePlayers= gameObject().home.players;
    const awayPlayers = gameObject().away.players;
    const bothplayers = {...homePlayers,...awayPlayers}
    for(let player in bothplayers){
        if(player === playersName){
            return bothplayers[playersName];
        }
    }
}
    console.log(playerStats("Alan Anderson"))
console.log(playerStats("Ben Gordon"))
