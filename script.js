let btn = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

let allLis = document.querySelectorAll(".act li");
let programming = document.querySelector(".aside1");
let Desining = document.querySelector(".aside3");
let Finnance = document.querySelector(".aside4");
let crypto = document.querySelector(".aside5");

if (allLis.classList === "active") {
  programming.style.display = "none";
}

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    if (allLis[1].classList.contains("active")) {
      programming.style.display = "block";
      Finnance.style.display = "none";
      Desining.style.display = "none";
      crypto.style.display = "none";
    } else if (allLis[2].classList.contains("active")) {
      Desining.style.display = "block";
      programming.style.display = "none";
      Finnance.style.display = "none";
      crypto.style.display = "none";
    } else if (allLis[3].classList.contains("active")) {
      Finnance.style.display = "block";
      programming.style.display = "none";
      Desining.style.display = "none";
      crypto.style.display = "none";
    } else if (allLis[4].classList.contains("active")) {
      crypto.style.display = "block";
      programming.style.display = "none";
      Finnance.style.display = "none";
      Desining.style.display = "none";
    } else {
      programming.style.display = "block";
      Finnance.style.display = "block";
      Desining.style.display = "block";
      crypto.style.display = "block";
    }
  };
});


