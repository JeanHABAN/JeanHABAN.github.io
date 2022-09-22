"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {findTotalScores, findTotalPlayerPoints }; //add all of your function names here that you need for the node mocha tests



/*Be sure to use meaningful variable names and write JSdoc comments for findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */

function findTotalScores(teamStatisticsArr) {
    let arrScore = [];
    for(const player of teamStatisticsArr){
        arrScore.push({jersey : player.jersey, total : findTotalPlayerPoints(player)});
    }
    return arrScore;

}

//map 
function findTotalScores(teamStatisticsArr){
    return teamStatisticsArr.map(player =>{
        return {jersey:scores.jersey, total : findTotalPlayerPoints(player)} 
    })
    }


function findTotalPlayerPoints(player) {
    let totalPoints = 0;
    for(const playerPoint of player.stats){
        totalPoints = totalPoints + playerPoint.points;
    }
    return totalPoints;

}
// reduce 

function findTotalPlayerPoints(player){
    return player.stats.reduce((total, current) => total += current.points,0);
}