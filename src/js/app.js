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
    // console.log(items[0].tags);
    shuffle(items);
    // console.log(items[0].url);
    var randlink = items[0].url;

    $("#random").click(function(e) {
      e.preventDefault();
      window.location = randlink;
    });
  });

  if ( ! $('body').hasClass('archive') ) {
    $(".site-header").delay(3000).fadeTo( "200" , 0);
    $(".more-tab").delay(3000).queue( function(){$(this).addClass("show") });
    $(".site-header").hover(function() {
      $( this ).fadeTo( "fast" , 1);
      $(".more-tab").removeClass("show");
    }, function() {
      $( this ).fadeTo( "fast" , 0)
      $(".more-tab").fadeTo( "fast" , 1);
      $(".more-tab").addClass("show");
    });
  }
  
  $(".single").hover(function() {
      $(this).children(".thumb").toggleClass("show");
  });

});
