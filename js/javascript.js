function menucontroller() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(e) {   

  function scrollTo(id) {
      // Remove "-section" from the ID
      id = id.replace("-section", "");
      $('html,body').animate({
          scrollTop:$("#" + id).offset().top-30
        },
        'slow');
  }
  $("nav#topnav>a").click(function(event){
    event.preventDefault();
    scrollTo($(this).attr("id"));
  });

  $('#main-title').typeIt({
     strings: 'Web Designer & Developer',
     speed: 80,
     autoStart: false
  });

});


