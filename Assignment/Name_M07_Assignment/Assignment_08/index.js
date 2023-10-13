
let participantsInput = prompt("Enter participants' names (separated by commas):");
let participants = participantsInput.split(",");
let participantList = [];
for (let i = 0; i < participants.length; i++) {
  let distributedNumber = i + 1;
  participantList.push({
    name: participants[i],
    number: distributedNumber,
  });
}
for (let i = 0; i < participantList.length; i++) {
  console.log(`${participantList[i].name} - ${participantList[i].number}`);
}

