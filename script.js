// 🌟 Start Surprise Page
function startPage() {
  document.querySelector('.hero').style.display = 'none';
  document.getElementById('mainContent').classList.remove('hidden');
  typeWriterEffect();

  // 🔊 Start Background Music on Button Click
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.play().catch((e) => {
    console.log("Autoplay prevented:", e);
  });
}
// 💌 Typewriter Effect for Love Letter
const text = `From the day I saw you, my world changed.
Your smile lights up my darkest days.
I don't just love you… I adore you, my Princess.`;
let i = 0;

function typeWriterEffect() {
  if (i < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriterEffect, 50);
  }
}

// ❤️ Love Slider Logic
const slider = document.getElementById("loveSlider");
const loveMsg = document.getElementById("loveMsg");

slider.addEventListener("input", () => {
  if (slider.value >= 90) {
    loveMsg.textContent = "I’ll love to choose you without any reason, with every fiber of my being, with every beat of my heart.. 💖";
  } else {
    loveMsg.textContent = "";
  }
});

// 🤗 Hug & Kiss Response
function sendLove() {
  const message = document.getElementById("loveResponse");
  if (message) {
    message.style.display = "block";
  }
}

// 🌠 Meteor Trail Shooting Stars (Glowing Effect)
function spawnMeteor() {
  const meteor = document.createElement("div");
  meteor.classList.add("meteor");

  // Random top and left starting point
  meteor.style.top = `${Math.random() * window.innerHeight * 0.6}px`;
  meteor.style.left = `${Math.random() * window.innerWidth * 0.4}px`;

  document.body.appendChild(meteor);

  // Remove the meteor after animation completes
  setTimeout(() => {
    meteor.remove();
  }, 1600);
}

// 🔁 Launch new meteor every 1–1.5 seconds
setInterval(() => {
  spawnMeteor();
}, Math.random() * 2000 + 2000);
