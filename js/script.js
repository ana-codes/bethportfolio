document.addEventListener("DOMContentLoaded", () => {

const modal = document.getElementById('mediaModal');
const video = document.getElementById('modalVideo');
const audio = document.getElementById('modalAudio');

// document.querySelectorAll('.view-btn').forEach(btn => {
//   btn.addEventListener('click', () => {
//     modal.style.display = 'flex';
//     if (btn.dataset.type === 'video') {
//       video.src = btn.dataset.src;
//       video.style.display = 'block';
//       audio.style.display = 'none';
//       video.play();
//     } 
//   });
// });

// document.querySelector('.close').onclick = () => {
//   modal.style.display = 'none';
//   video.pause();
//   audio.pause();
// };

// --- Hero face slideshow (auto-fade) ---
(() => {
  const slides = document.querySelectorAll(".face-slide");
  if (!slides.length) return;

  let i = 0;
  const delayMs = 2600;

  setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
  }, delayMs);
})();

  // ALL your existing JS goes inside here

});
