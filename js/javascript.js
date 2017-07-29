function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(e) {   

  function scrollTo(id) {
      // Reove "_section" from the ID
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

});


