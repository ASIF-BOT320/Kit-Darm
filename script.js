window.addEventListener("keydown", (e) => {

    let AUDIO = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(AUDIO);
    if (!AUDIO) return;
    AUDIO.play();
    console.log(key);
    AUDIO.currentTime = 0;

    key.classList.add("pressed");

    setTimeout(() => {
        key.classList.remove("pressed");
    }, 500);
})