let participants = [
    "John M.", "David H.", "Rajesh A.",
    "Sunita S.", "Mohammed A.", "Ram J.",
    "Anita R.", "Suresh R.", "Sara M.",
    "Nick C.", "Lakshmi N."
  ];
let shuffledParticipants = participants.sort(() => Math.random() - 0.5);
let team1 = [];
let team2 = [];
for (let i = 0; i < shuffledParticipants.length; i++) {
  if (i % 2 === 0) {
    team1.push(shuffledParticipants[i]);
  } else {
    team2.push(shuffledParticipants[i]);
  }
}
while (Math.abs(team1.length - team2.length) > 1) {
  if (team1.length > team2.length) {
    let removedParticipant = team1.pop();
    team2.push(removedParticipant);
  } else {
    let removedParticipant = team2.pop();
    team1.push(removedParticipant);
  }
}
console.log("Team 1:", team1);
console.log("Team 2:", team2);