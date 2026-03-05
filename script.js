window.onload = () => {

const videos = [
"MidTermHand.mp4",
"MidTermHandRig.mp4",
"FinalAFX2.mp4",
"FinalAFX.mp4"
];

let index = 0;
const video = document.getElementById("heroVideo");

function playVideo(){
    video.src = videos[index];
    video.play();
}   

video.addEventListener("ended", () => {

    video.classList.add("fade");
    
   setTimeout(()=>{
    index = (index + 1) % videos.length;
    video.src = videos[index];
    video.play();
    video.classList.remove("fade");
},1000);

});

playVideo();

};