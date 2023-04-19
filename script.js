//your code here

let touristSpots=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function removeArticles(touristSpots) {
  words = touristSpots.split(" ");
  if(words.length <= 1) return touristSpots;
  if( words[0] == 'a' || words[0] == 'the' || words[0] == 'an' )
    return words.splice(1).join(" ");
  return touristSpots;
}
	

