const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay() {
  var j = []
  for (var i = 0; i < musicians.length; i++) {
  //  var k = console.log(musicians[i] + 'plays' + instruments[i])
    j.push(musicians[i] + " " + 'plays'+ " " + instruments[i])

  }
  return j
}
function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive",  "He was never a vegetarian",  "He was a choir boy and boy scout",  "He hated the sound of his own voice"]
var i = 0
 while (facts.length>i) {
  console.log(facts[i] + '!!!')
  i++
}
  return i
}
