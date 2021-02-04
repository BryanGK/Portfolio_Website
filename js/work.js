const works = [
    "/img/road.jpg", "/img/road.jpg", "/img/road.jpg"
];
const works2 = [
    "/img/road.jpg", "/img/road.jpg", "/img/road.jpg"
];

for (let i = 0; i < works.length; i++) {
    $("#work").append("\
  <div class='col'>\
    <img class='col proj-img' src='" + works[i] + "' class='img - fluid'>\
  </div>\
");
};

for (let i = 0; i < works.length; i++) {
    $("#work2").append("\
  <div class='col'>\
    <img class='col proj-img' src='" + works2[i] + "' class='img - fluid'>\
  </div>\
");

};