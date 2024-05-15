const scorecard = require('./scorecard')


// add all pars on each hole for course par
function coursePar(parList) {
    let num = 0;
    for (let i=0; i<parList.length; i++){
        num += parList[i]
    }
    return num;
}


// class for game session 
// main function
function GameSession(parList,playerList) {
    this.playerCount = playerList.length;
    this.parList = parList;
    this.par = coursePar(parList);
    this.playerList = playerList;
    this.playersScores = this.createPlayerScoreRow();
}

GameSession.prototype.getCoursePar = function() {
    return this.par
}
GameSession.prototype.getPlayerCount = function() {
    return this.playerCount
}
GameSession.prototype.createPlayerScoreRow = function() {
    let wyoming = []
    for (let i=0; i<this.playerCount; i++){
        let x = new scorecard.playerScore(this.playerList[i])
        wyoming.push(x)
    }
    return wyoming
}


// set game session class
// parameters (par list, player list)
const x = new GameSession([4,5,3,4,4,4,5,4,3,5,4,4,3,5,4,4,3,4],["denji","makima","pochita","asa"])

// set up player game cards
const y = x.createPlayerScoreRow()

y[0].addHole(3)
y[0].addHole(2)
y[0].addHole(4)
y[0].addHole(6)
y[0].addHole(3)
y[0].addHole(7)
y[0].addHole(3)
y[0].addHole(2)
y[0].addHole(4)
y[0].addHole(6)
y[0].addHole(3)
y[0].addHole(7)
y[0].addHole(3)
y[0].addHole(2)
y[0].addHole(4)
y[0].addHole(6)
y[0].addHole(3)
y[0].addHole(1)


console.log("current total score: ", y[0].getCurrentScore())

console.log("cuurent score: ", y[0].getCurrentScore() - x.par)



