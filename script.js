const cover = document.querySelector(".cover");
const coverHeading = document.querySelector(".cover h2");
const name = document.getElementById("name");

setTimeout(() => {
  console.log("hello");
  document.body.style.overflow = "auto";
  cover.style.display = "none";
}, 3500);
