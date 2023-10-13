function getSuperheroDetails(superheroes) {
    return superheroes.map((superhero, index) => {
      let characterLength = superhero.length;
      return `${superhero} is present at ${index} index and has a length of ${characterLength}.`;
    });
  }
  
  let superheroesArray = ['spiderman', 'superman', 'wonder women', 'ironman', 'black widow', 'batman', 'thor'];
  
  let superheroDetails = getSuperheroDetails(superheroesArray);
  
  console.log(superheroDetails);
  