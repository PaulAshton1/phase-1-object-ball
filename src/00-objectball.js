function gameObject(){
    return{
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players:{
                "Alan Anderson": {
                    number: 0 ,
                    shoe: 16, 
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30 ,
                    shoe: 14, 
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11 ,
                    shoe: 17, 
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Pumlee": {
                    number: 1 ,
                    shoe: 19, 
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31 ,
                    shoe: 15, 
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        }
        ,away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18, 
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0 ,
                    shoe: 16, 
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2 ,
                    shoe: 14, 
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8 ,
                    shoe: 15, 
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33 ,
                    shoe: 15, 
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        }
    }
}

console.log(gameObject());   
//return the name of home team
function homeTeamName(){
    return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());
//return the name of away team
function awayTeam(){
    return gameObject().away.teamName;
}
console.log(awayTeam());

let oo = {foo : 42,bar : 83, baz: 79};
for (let key in oo){
    let value = oo[key];
    console.log("key: ", key, "value:" , value);
}


function numPointsScored(playerName){
    for (let key in gameObject()){
        if (gameObject()[key].players[playerName]){
            return gameObject()[key].players[playerName].points;
        }
    }
    return "Player not found";
}
console.log(numPointsScored("Jason Terry"));

function shoeSize(playerName){
    for (let key in gameObject()){
        if (gameObject()[key].players[playerName]){
            return gameObject()[key].players[playerName].shoe;
        }
    }
    return "Player not found";
}
console.log(shoeSize("Jeff Adrien"));

function teamColors (teamName){
    for (let key in gameObject()){
        if (gameObject()[key].teamName === teamName){
            return gameObject()[key].colors;
        } else {
            return "Team not found";
        }
    }
}
console.log(teamColors("Brooklyn Nets"));

function teamNames(){
    let teamArray = [];
    for (let key in gameObject()){
    teamArray.push(gameObject()[key].teamName);
}
return teamArray;
}
console.log(teamNames());

function playerNumbers(teamName){
    let teamArray = [];
        if (teamName === gameObject().home.teamName){
            let players = gameObject().home.players;
            for (let key in players){
                teamArray.push(players[key].number);
            }
        } else if (teamName === gameObject().away.teamName) {
            for (let key in gameObject().away.players){
                teamArray.push(gameObject().away.players)
            }
        }
    

    return teamArray;
}
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"))

function playerStats(playerName){
    let teams = Object.values(gameObject()); // Get array of home & away objects

    for (let key in gameObject()) {
        let game = gameObject()[key]; // This is either home or away
        if (game.players[playerName]) {
            return game.players[playerName];
        }
    }
    return "Player not found";
}
console.log(playerStats("Jeff Adrien"));

function bigShoeRebounds(){
    let largestShoeSize = 0;
    let playerWithLargestShoe;

    for(let key in gameObject()){//checks the first keys which is either home or away
        let team = gameObject()[key];

        for (let playerName in team.players){ //this one checks the players key in whatever team is currently iterating
            let playerStats = team.players[playerName];//saves player's stats/path in new variable
                                                       //so that I don't have to keep typing it
            //now we have to find the largest shoe size
            if (playerStats.shoe > largestShoeSize) {
                largestShoeSize = playerStats.shoe;/*if player's shoe size is greater,
                                                    save it in this largestShoeSize variable*/
                playerWithLargestShoe = playerStats;/*Assign the results of this loop into the
                                                    global variable so that it's accessible
                                                    outside of it*/
            }
        }
    }
    return playerWithLargestShoe.rebounds;
}

console.log(bigShoeRebounds());