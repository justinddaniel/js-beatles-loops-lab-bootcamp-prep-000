function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < 4; i++) {array.push
    (musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  let array = []
  let i = 0
  while (i >= 0 & i < facts.length)  {
    console.log (i++); array.push (facts[i-1] + "!!!")
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  let i = 0
  if (n < 15) do {console.log (i++); array.push("I love the Beatles!")}
  while (n - i > 0);
  return array
}
