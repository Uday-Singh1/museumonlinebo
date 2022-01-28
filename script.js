function on() {
  document.getElementById("blackopacity").style.display = "block";
}

function off() {
  document.getElementById("blackopacity").style.display = "none";
}
const myImage = document.getElementById("myImage");
const myTitle = document.getElementById("myTitle");
const myInput = document.getElementById("myInput");

const knopslavery = document.getElementById('Slavery');
const knopJohannes = document.getElementById('Johannes');
const knopvergeet = document.getElementById('vergeet');
const knoprembrandt = document.getElementById('Rembrandt');
const knophogelucht = document.getElementById('Hogelucht');

let directionButtons = {
  "Slavery": document.getElementById('Slavery'),
  "Johannes": document.getElementById('Johannes'),
  "Vergeet": document.getElementById('vergeet'),
  "Rembrandt": document.getElementById('Rembrandt'),
  "Hogelucht": document.getElementById('Hogelucht')

}

let current_index = 0;

let locaties = [
  {
    "titel": "Slavernij",
    "image": "images/slavery1.jpeg",
    "directions": {
      "Slavery": 0,
      "Johannes": 1,
      "Vergeet": 2,
      "Rembrandt": 3,
      "Hogelucht": 4
    }
  },
  {
    "titel": "Johannes Vermeer",
    "image": "images/johannesvermeerpaint.jpeg",
    "directions": {
      "Slavery": 0,
      "Johannes": 1,
      "Vergeet": 2,
      "Rembrandt": 3,
      "Hogelucht": 4
    }
  },
  {
    "titel": "Vergeet me niet",
    "image": "images/vergeetmenietportretten1.jpeg",
    "directions": {
      "Slavery": 0,
      "Johannes": 1,
      "Vergeet": 2,
      "Rembrandt": 3,
      "Hogelucht": 4
    }
  },
  {
    "titel": "Rembrandt",
    "image": "images/nachtwachtroute.jpeg",
    "directions": {
      "Slavery": 0,
      "Johannes": 1,
      "Vergeet": 2,
      "Rembrandt": 3,
      "Hogelucht": 4
    }
  },
  {
    "titel": "Hogelucht",
    "image": "images/manneboottings.jpeg",
    "directions": {
      "Slavery": 0,
      "Johannes": 1,
      "Vergeet": 2,
      "Rembrandt": 3,
      "Hogelucht": 4
  },
  }
];

function show(index) {
  console.log(myTitle)
  myTitle.innerHTML = locaties[index].titel;
  myImage.src = locaties[index].image;
  current_index = index;


  updateDirections()
}

function updateDirections() {

  let possible = locaties[current_index].directions;

  let possible_keys = Object.keys(possible);

  console.log(possible);
  console.log(possible_keys);

  let button_keys = Object.keys(directionButtons);

}
function getInput() {
  show(myinput.value);

  myinput.value = "";

  myinput.focus();

}

function goDirection(direction) {
  let punt_index = locaties[current_index].directions[direction]
  console.log(punt_index)
  show(punt_index);
}
show(0);