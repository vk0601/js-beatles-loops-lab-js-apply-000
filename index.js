const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instuments){
  var list = []
  for (var i = 0; i < musicians.length; i++){
      list.push(`${musicians[i]} plays ${instruments[i]}`);
      }
      return list 
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0;
  var list = [];
  while(i < facts.length){
    list.push(`${facts[i]}!!!`)
    i++
  }
  return list
}

function iLoveTheBeatles(i){
    var text = [];
    do {
        text.push("I love the Beatles!");
        i++;
    }
    while (i < 15);
    return text;
}
