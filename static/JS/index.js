let image1 = document.querySelector(".yt_logo");
let box1 = document.querySelector(".box1");
box1.addEventListener("mouseenter", ()=>{
    image1.src = "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YT_logo.max-500x3000.format-webp.webp";
    //later ill add stylings like heighjt and weidth etxc
});
box1.addEventListener("mouseout", ()=> {
    image2.src = "https://e7.pngegg.com/pngimages/208/269/png-clipart-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-thumbnail.png";
});