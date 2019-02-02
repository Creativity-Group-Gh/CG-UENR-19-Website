var instructors = [
  {
    address: "Hello!",
    name: "I am Botwe Emmanuel",
    job1: "I am a Software Engineer,",
    job2: "a Game developer",
    job3: "and I am going to be your  Instructor"
  },
  {
    address: "Welcome!",
    name: "I am Edward Gyampo",
    job1: "I am an Artist",
    job2: " a Web UI Engineer",
    job3: "and  a Game Designer"
  },
  {
    address: "Hello World!",
    name: "I am Acquah Samuel ",
    job1: "a programmer,",
    job2: "who loves business and reading",
    job3: "and am going to be your course assistant"
  }
];

var images = [
  "./images/asteroids.jpg",
  "./images/science.png",
  "./images/background.png",
  "./images/design.jpg",
  "./images/cuadros.png"
];

var index = 2;

// var head = "Welcome!";
// var des1 ="Edward Gyampo.";
// var des2 = "an Artist.";
// var des3 =  "Web UI Engineer.";
// var des4 =  "I am a Game Designer.";
//
// var raw_text = "Welcome!I am "+des1+"."+des2+".a "+des3+"."+des4+".Explore!";
//
//
var head = "";
var des1 = "";
var des2 = "";
var des3 = "";
var des4 = "";

var simple_text = "";

async function startBlinkingText() {
  if (index >= 2) {
    index = 0;
  } else {
    index++;
  }
  console.log(index);
  var temp = await instructors[index];

  head = await temp.address;
  des1 = temp.name;
  des2 = temp.job1;
  des3 = temp.job2;
  des4 = temp.job3;

  simple_text =
    head + " " + des1 + " " + des2 + " " + des3 + " " + des4 + " Explore!";

  console.log(temp);
  let elem = document.querySelector(".typing-simulator__text");
  elem.innerHTML = "";
  await startBlinkingTextWrapper();
  let image_ = document.querySelector("#wallpaper");
  image_.style.backgroundImage = "url(" + images[index] + ")";
  image_.style.transition = "background-image 0.2s ease-in-out";
}
