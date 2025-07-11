const track = document.getElementById("image-track");


window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0"
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
          nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

          const minPercentage = -100;
const maxPercentage = 0;

          if (nextPercentage < minPercentage) {
            nextPercentage = minPercentage;
        } else if (nextPercentage > maxPercentage) {
            nextPercentage = maxPercentage;
        }

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)` }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`}, {duration: 1200, fill: "forwards"});
}
}