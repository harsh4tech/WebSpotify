// let switchm =0;
let audio = document.getElementById("myAudio");

let select = document.querySelector(".play-pause")
select.addEventListener("click" , (e)=> {
    e.stopPropagation();
    toggleAudio();
    // switchm++;
    toggleIcon();
})

function toggleAudio() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
}
function toggleIcon() {
    if (!audio.paused) {
      select.innerHTML= `<img src="assets/playing.svg" alt=""></img>`
      console.log(audio);
      
    } else {
      select.innerHTML= `<img src="assets/playsong.svg" alt=""></img>`
      switchm =0;
    }
}
