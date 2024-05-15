//perhaps this should be an object
// key name and score is a list associated with name
function playerScore(player, currentScores=[]) {
    this.player = player; // player name
    this.currentScores = currentScores // list of current scores
    
}

playerScore.prototype.addHole = function(strokes) {
    this.currentScores.push(strokes)
}

playerScore.prototype.getCurrentScore = function(parList) {
    let score = 0
    for(let i=0; i<this.currentScores.length;i++){
        score += this.currentScores[i]
    }
    return score;
}

module.exports = {playerScore}