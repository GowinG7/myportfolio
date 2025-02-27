
// project video ma cursor layeC play huney ani move out vayeC
// rokiney, so yo type ko interactivity banauna js used grney by giving
// id to video elements
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
//yo chaie teha hmle tyo uppointing finger emojii interactive grna project section ko
//  css section ma xa hover-sign ma xa .
// hover-sign.active{
// display: none;} so active bako bela (matlab jaba hmle cursor lanxau teti bela active ) tyo emojii hatxa

//this only select the first one so used querySelectorAll

// ani hmle teha euta video ma cursor lagayerw demo deka xau for better understandabality
const hoverSign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover', function () {
        video.play();
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout', function () {
        video.pause();
        hoverSign.classList.remove("active")
    })
})
