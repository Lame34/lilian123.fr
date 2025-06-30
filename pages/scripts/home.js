document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("loader1").classList.add("loaded");
        document.body.style.overflow = "visible";
    }, 3000);
});

let glitchElement = document.querySelector('.glitch');

if (glitchElement && window.innerWidth > 650) {
    glitchElement.textContent = '';
}

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