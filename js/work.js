// const works = [
//     "/img/road.jpg", "/img/road.jpg", "/img/road.jpg"
// ];
// const works2 = [
//     "/img/road.jpg", "/img/road.jpg", "/img/road.jpg"
// ];

const works = [
  {
    title: "First Project",
    pic: "/img/road.jpg",
  },
  {
    title: "Second Project",
    pic: "/img/road.jpg",
  },
  {
    title: "Third Project",
    pic: "/img/road.jpg",
  },
  {
    title: "Fourth Project",
    pic: "/img/road.jpg",
  },
];

for (let i = 0; i < works.length; i++) {
  $("#work").append("\
  <div class='col'>\
    <a href='#' class='work-img'>\
      <img class='col proj-img' src='" + works[i].pic + "'>\
      <span class='info'><p class='proj-title'>Title:</p> [WORK TITLE] </span>\
    </a>\
  </div>\
");
};

