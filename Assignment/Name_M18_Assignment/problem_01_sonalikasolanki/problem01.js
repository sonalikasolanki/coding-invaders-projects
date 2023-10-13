function tournamentWinner(competitions, results) {
    let teamPoints = {};

    for (let i = 0; i < competitions.length; i++) {
        let [homeTeam, awayTeam] = competitions[i];
        let winner = results[i] === 1 ? homeTeam : awayTeam;

        if (teamPoints[winner]) {
            teamPoints[winner] += 3;
        } else {
            teamPoints[winner] = 3;
        }
    }

    let maxPoints = 0;
    let winner = '';

    for (let team in teamPoints) {
        if (teamPoints[team] > maxPoints) {
            maxPoints = teamPoints[team];
            winner = team;
        }
    }

    return winner;
}

// Sample input
let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
];
let results = [0, 0, 1];

// Get the winner
let winner = tournamentWinner(competitions, results);
console.log(winner);
