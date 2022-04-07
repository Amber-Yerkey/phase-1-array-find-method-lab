// code your solution here
// function superbowlWin(array){
//     return array.find(element => element === "W");
// }


function superbowlWin(array) {
    function isWinningYear(year) {
        return year.result === "W"
    }
    const winningYearObj = array.find(isWinningYear)

    if (winningYearObj) {
        return winningYearObj.year
    }
}