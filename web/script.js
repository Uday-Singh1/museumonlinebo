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
  "johannes": document.getElementById('Johannes'),
  "vergeet": document.getElementById('vergeet'),
  "rembrandt": document.getElementById('Rembrandt'),
  "hogelucht": document.getElementById('Hogelucht')

}
let current_index = 0;

let locaties = [
    {
        "titel":"Slavernij",
        "image":"img/slavery1.jpeg",
        "directions" : {
          "Slavery": 1
        }
    },
    {
        "titel":"Slavernij",
        "image":"img/slaver2.jpeg",
        "directions" : {
          "Slavery": 1
        }
    },
    {
        "titel":"Johannes Vermeer",
        "image":"BL.png",
         
    },
    {
        "titel":"Vergeet me niet",
        "image":"img/vergeetmenietportretten2.jpeg",
        "directions" : {
          "vergeet" : 3
        }
    },
    {
        "titel":"Rembrandt",
        "image":"rembrandtgoat.png",
    },
    {
        "titel":"Hogelucht",
        "image":"mannenboottings.jpg",
    },
    
];
function show(index){
  myTitle.innerHTML = locaties[index].titel;
  myImage.src = lokaties[index].image;
  current_index = index;
    
  
  updateDirections()
}

function updateDirections(){
  
  let possible = locaties[current_index].directions;

  let possible_keys = Object.keys(possible);

  console.log(possible);
  console.log(possible_keys);

  let button_keys = object.keys(directionButtons);

  for(const key of button_keys ){
    directionButtons[key].style.visibility = "hidden";

  }

  for(const key of possible_keys){
    directionButtons[key].style.visibility ='visible';
  }

}
function getInput(){
  show(myinput.value);

  myinput.value = "";

  myinput.focus();
    
}

function goDirection(direction){
  let punt_index = locaties[current_index].directions[richting]
    show(punt_index);
}
show(0);