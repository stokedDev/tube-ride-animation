const images = document.querySelectorAll('img');
const oneSec = 1000;
let frame = 0;
let previousFrame = 0;
images.forEach(el => {
    el.style.display = 'none';
});
setInterval(()=>{
    previousFrame = frame - 1;
    if(frame === null || frame === 4){
        frame = 0;
    } else if(frame >= 0 && frame < 4){
        frame++;
    }
    images[frame].style.display = 'block';
    images[previousFrame].style.display = "none";
},45);
