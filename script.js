const cover = document.querySelector(".cover");
const coverHeading = document.querySelector(".cover h2");
const name = document.getElementById("name");

setTimeout(() => {
  console.log("hello");
  document.body.style.overflow = "auto";
  cover.style.display = "none";
}, 3500);

const circle = document.querySelector("#circle");
let mouseX = 0,
  mouseY = 0;
let circleX = 0,
  circleY = 0;
let lastX = 0,
  lastY = 0,
  lastTime = Date.now();
let lagFactor = 0.2;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  const now = Date.now();
  const dx = mouseX - lastX;
  const dy = mouseY - lastY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const timeDelta = now - lastTime;

  if (timeDelta > 0) {
    const speed = distance / timeDelta;

    lagFactor = Math.min(0.2, 0.1 + speed * 0.005);
  }

  lastX = mouseX;
  lastY = mouseY;
  lastTime = now;
});

function animate() {
  circleX += (mouseX - circleX) * lagFactor;
  circleY += (mouseY - circleY) * lagFactor;

  circle.style.transform = `translate(${circleX}px, ${circleY}px)`;

  requestAnimationFrame(animate);
}

animate();
