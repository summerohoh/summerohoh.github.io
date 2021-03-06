
var projects = [
  {title: "Map of Ithaca", href_path:"https://summerohoh.github.io/map-project/" , img: "img/map.png", type:"Web Application", description: "Knockout.js, Google Map API, Foursquare API"},
  {title: "Item Catalog", href_path:"https://github.com/summerohoh/item-catalog" , img: "img/catalog.png", type:"Web Application", description: "Python Flask, Google & Facebook Sign in"},
  {title: "ISSA", href_path:"http://issa.infosci.cornell.edu" , img: "img/issa.png", type:"Student Association", description: "Web/Graphics Chair"},
  {title: "Logs Analysis", href_path:"https://github.com/summerohoh/logs_analysis" , img: "img/logsanalysis.png", type:"Reporting Tool", description: "SQL, Python"},
  {title: "TIPTOE&", href_path:"http://www.tiptoeand.com" , img: "img/tiptoe.png", type:"Social Business Start-Up", description: "Web Design/Contents"},
  {title: "Aizen Co.", href_path:"http://www.aizen.co", img: "img/aizen.png", type:"Internship", description: "Product Mangement / Research & Analysis"},
  {title: "Pony Up", href_path:"http://gdiac.cis.cornell.edu/courses/showcase.php" , img: "img/ponyup.png", type:"Game Design Class Project", description: "UI/UX, Level Design"},
  {title: "Movie Catalogue", href_path:"https://github.com/summerohoh/Movie-Trailers" , img: "img/moviecatalogue.png", type:"Web Application", description: "Python / OOP"},
  //{title: "Bon VR", href_path:"https://vimeo.com/223665500" , img: "img/bonvr.png", type:"Hackathon", description: "UI/UX, Product Management, Unity"},
  //{title: "Taggle Inc.", href_path:"https://www.taggle.co", img: "img/taggle.png", type:"Internship", description: "Marketing / Wireframing / Data Analysis"},
  {title: "Pro Bonobos", href_path:"http://probonobos.github.io/rhok/", img: "img/probonobos.png", type:"Hackathon", description: "Web Development / Infographics"}
  ];


function displayProjects(){
  var container = document.getElementById("work-container");

  projects.forEach(function(project){
    var workItem = document.createElement('div');
    workItem.className = 'work-image-container';
    workItem.innerHTML =
    '<a href=' + project.href_path + '>' +
          '<img class="work-image" src=' + project.img +' alt='+ project.title +'>' +
          '<div class="overlay"> </div>' +
          '<div class="work-info">'+
              '<h2>' + project.title + '</h2>' +
              '<h3>' + project.type + '</h3>' +
              '<h4>' + project.description + '</h4>' +
            '</div>' +
    '</a>';
    container.appendChild(workItem);
  });
}

displayProjects();