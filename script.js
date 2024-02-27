//ye hai array of objects
const reviews = [
  {
    id: 1,
    name: "Susan Johas",
    job: "web developer",
    img: "https://thumbs.dreamstime.com/b/close-up-photo-goo…lue-color-background-close-up-photo-245031400.jpg",
    text: "hello bro i am a web developer",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "web designer",
    img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    text: "hello bro i am a web dsigner",
  },
  {
    id: 3,
    name: "Peter Johas",
    job: "data scientist",
    img: "https://img.freepik.com/free-photo/curly-man-with-…-indoor-against-white-blank-wall_273609-17092.jpg",
    text: "hello bro i am a data scientist",
  },
  {
    id: 4,
    name: "Ashley Mathhew",
    job: "data analyst",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUDeWoo36nPgSIpKRFhQSEbhiWMDS6queOg&usqp=CAU",
    text: "hello bro i am a data analyst",
  },
];

//ye  hai DOM
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
})

//show person based on item
function showPerson(person){
const item = reviews[person];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//previous person dekhna
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})

randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
