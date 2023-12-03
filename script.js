const images = document.querySelectorAll('img');
let frame = 0;
let previousFrame = 0;
images.forEach(el => {
    el.style.display = 'none';
});
setInterval(()=>{
    if(frame === null || frame === 4){
        frame = 0;
    } else if(frame < 4){
        frame++;
    }
    previousFrame = frame - 1;
    images[frame].style.display = 'block';
    images[previousFrame].style.display = 'none';
},45);
