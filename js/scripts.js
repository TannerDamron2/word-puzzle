$(document).ready(function() {
  $("button#scramble").click(function(event) {
    var inputSentence = $("input#inputSentence").val();
    if (!inputSentence) {
      alert('Please enter a sentence');
    }
    var letters = inputSentence.split("");
    var vowels = ["a", "e", "i", "o", "u"];
    for (var index = 0; index < letters.length; index += 1) {
      if (vowels.includes(letters[index])){
        letters[index]="-";
      }
    }
    var outputSentence = letters.join("");
    $("#output").append(outputSentence);
    (event).preventDefault();
  });
});
