
var projects = [
  //{title: "Neighborhood Map", href_path:"" , img: "", type:"Coming Soon!", description: "Google Map API, Knockout.js"},
  //{title: "Information Science Student Association", href_path:"http://issa.infosci.cornell.edu/" , img: "img/issa.png", type:"Organization", description: "Web/Graphics Chair"},
  {title: "Aizen Co.", href_path:"http://www.aizen.co", img: "img/aizen.png", type:"Internship", description: "Product Mangement / Research & Analysis"},
  {title: "Pony Up", href_path:"" , img: "img/ponyup.png", type:"Game Design Class Project", description: "Product Mangement / Research & Analysis"},
  {title: "Movie Catalogue", href_path:"https://github.com/summerohoh/Movie-Trailers" , img: "img/moviecatalogue.png", type:"Internship", description: "Product Mangement / Research & Analysis"},
  {title: "Bon VR", href_path:"" , img: "img/bonvr.png", type:"Internship", description: "Product Mangement / Research & Analysis"},
  {title: "Taggle Inc.", href_path:"http://www.taggle.co", img: "img/taggle.png", type:"Internship", description: "Marketing / Wireframing / Data Analysis"},
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