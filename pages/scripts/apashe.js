document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("myAudio");
  audio.play();
  audio.volume = 0.05;

  document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
          audio.play();
      } else {
          audio.pause();
      }
  });
});

function toggleButtons() {
  let playBtn = document.querySelector('.play-btn');
  let pauseBtn = document.querySelector('.pause-btn');

  playBtn.style.display = playBtn.style.display === 'none' ? 'inline-block' : 'none';
  pauseBtn.style.display = pauseBtn.style.display === 'none' ? 'inline-block' : 'none';
}







document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('#check-5');
  const fond = document.querySelector('body');
  const stars = document.querySelectorAll('.space > span');
  const isChecked = document.cookie.includes('checked=true');

  if (!isChecked) {
    document.cookie = 'checked=true; path=/';
  }

  if (isChecked) {
    stars.forEach(star => star.style.display = 'none');
    fond.classList.add('body');
    fond.classList.remove('sombre');
    btn.checked = true;
  } else {
    stars.forEach(star => star.style.display = 'block');
    fond.classList.add('sombre');
    fond.classList.remove('body');
    btn.checked = false;
  }

  btn.addEventListener('change', function () {
    document.cookie = `checked=${btn.checked}; path=/`;

    if (btn.checked) {
      stars.forEach(star => star.style.display = 'none');
      fond.classList.add('body');
      fond.classList.remove('sombre');
    } else {
      stars.forEach(star => star.style.display = 'block');
      fond.classList.add('sombre');
      fond.classList.remove('body');
    }
  });
});