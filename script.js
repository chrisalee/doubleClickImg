const likeMe = document.querySelector(".likeMe");
const times = document.querySelector("#times-liked");

let clickTime = 0;
let timesClicked = 0;

likeMe.addEventListener("click", (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
});

const createHeart = (e) => {
    const heart = document.createElement('span');
    heart.classList.remove("heart");
    heart.classList.add("heart-fill");

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    likeMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}