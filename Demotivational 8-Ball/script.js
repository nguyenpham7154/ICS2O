const answers = [
  "obviously",
  "the fuck are you smoking right now",
  "what sort of question is that",
  "kind of depends",
  "how should I know",
  "sure thing buddy",
  "beyond delusional",
  "fuck off",
  "bullshit",
  "that's crazy",
  "bruh",
  "no shit, sherlock",
  "think about how mom would feel",
  "kill yourself",
  "no one needs to hear that",
  "you're fucked, son",
  "who asked",
  "as if that will work",
  "shut up, you worthless piece of shit",
  "L bozo, deserved",
  "you snooze, you lose",
  "make a move, pussy",
  "absolutely ludicrous",
  "gotta envy people who dont know you",
  "skill issue",
  "cry about it",
  "you're stupid and make shitty decisions",
  "god have mercy",
  "asinine take",
  "don't care",
  "no it doesn't, retard",
  "serves zero purpose",
  "take a moment to think before asking",
  "why bother putting in effort",
  "nothing will matter",
  "that doesn't accomplish anything",
  "cringe",
  "that can only go so far",
  "definitely not",
  "try less",
];

function reply() {
  var list = answers;
  document.getElementById("response").innerHTML = list[Math.floor(Math.random() * list.length)];
  setTimeout(reset, 3000);

  function reset() {
    document.getElementById("response").innerHTML=" ";
  }
}