let movies = {
    "Peter Parker": "Spider-Man",
    "Fiona": "Shrek",
    "Jack Sparrow": "The Pirates of the Caribbean",
    "Master Shifu": "Kung Fu Panda"
  };
  
  while (true) {
    let character = prompt("Enter the main character's name (or '0' to stop): ");
  
    if (character === "0") {
      break;
    }
  
    let movie = movies[character];
  
    if (movie) {
      console.log(movie);
    } else {
      console.log("I don't know him/her yet");
    }
  }