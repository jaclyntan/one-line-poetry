// JS Goes here - ES6 supported

// Say hello
console.log("(c) Jaclyn Tan http://jaclyntan.com");
$(document).ready(function() {
  function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      const index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      const temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  $.getJSON("index.json", function(json) {
    var items = json.items;
    console.log(items[0].tags);
    shuffle(items);
    console.log(items[0].url);
    var randlink = items[0].url;

    $("#random").click(function(e) {
      e.preventDefault();
      window.location = randlink;
    });
  });

});
