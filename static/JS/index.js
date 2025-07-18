/////////   MAKE SUREE TOO PUT CLASSSES AND IDS WITH THEIR APPROPPRIATE SELECTOPRS (. OR #)
//first argumenrt is box's unique class or id to het thet specific field
//second agrument is image id or unique class 
//third argument is image link which is displayed after going mouse pointer out
//fourh and last agrument is image link which is displayed while mouse pointer is upto this specific box 
//note make sure yoiu ARE PASSING THE DIRECT DOWQNLOAD IKMAGE LINKS 
function mouse_in_out_listener(box_class_or_id, img_tag_classs_or_id, image_link_mouseleve, image_link_mouse_enter){
    const image_tag = document.querySelector(img_tag_classs_or_id);
    const box1 = document.querySelector(box_class_or_id);
    box1.addEventListener("mouseenter", ()=> {
        image_tag.style.marginLeft = 0;
        image_tag.style.width = "100%";
        image_tag.src = image_link_mouse_enter
        // image1.src = "https://e7.pngegg.com/pngimages/208/269/png-clipart-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-thumbnail.png";
        //later ill add stylings like heighjt and weidth etxc
    });
    box1.addEventListener("mouseleave", ()=> {
        image_tag.style.width = "70%";
        image_tag.style.marginLeft = "15%";
        image_tag.src = image_link_mouseleve
        // image1.src = "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YT_logo.max-500x3000.format-webp.webp";
    });
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////ITS INCREASING CODE REDUNDENCY TOOO MUCH SO IM GOING TO IMPLEMENT A LOGIC SO THAT ILL ABLE TO 
// CALL ONCXE SIMPLY BY LOOPING OR FUNCTION RECALLS 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function gpt_listener(){
//     const image1 = document.querySelector(".yt_logo");
//     const box1 = document.querySelector(".box1");
//     box1.addEventListener("mouseenter", ()=>{
//         image1.style.marginLeft = 0;
//         image1.style.width = "100%";
//         image1.src = "https://e7.pngegg.com/pngimages/208/269/png-clipart-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-thumbnail.png";
//         //later ill add stylings like heighjt and weidth etxc
//     });
//     box1.addEventListener("mouseleave", ()=> {
//         image1.style.width = "70%";
//         image1.style.marginLeft = "15%";
//         image1.src = "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YT_logo.max-500x3000.format-webp.webp";
//     });
// }

// function fb_listner(){

// }

// function wikiPidia_listner(){

// }

// function acodeDocs_listner(){

// }

// function linkedin_listner(){

// }











// listener for first/yt button
mouse_in_out_listener(
    ".box1",
    ".yt_logo",
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YT_logo.max-500x3000.format-webp.webp",
    "https://e7.pngegg.com/pngimages/208/269/png-clipart-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-thumbnail.png"
)






mouse_in_out_listener(
    ".box2",
    ".GPT",
    "https://botscrew.com/wp-content/uploads/2024/02/GPT-Updates-Article-cover-2.jpg",
    "https://images.prismic.io/codiste-website/08ac7396-b806-4550-b167-8814f6eb0fe2_What+is+the+difference+between+GPT_+GPT3%2C+GPT+3.5%2C+GPT+turbo+and+GPT-4.png?auto=compress,format"
)



mouse_in_out_listener(
    ".box3",
    ".fb",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSNltwo_0z2tjSI9Qv99hSq3-j6kozsgyvQ&s"
)

mouse_in_out_listener(
    ".box4",
    ".insta",
    "https://cdn.abicart.com/shop/images/191459821-origpic-61f31d/ws89/120689/art89/h9821/instagram-logo.png",
    "https://blogassets.airtel.in/wp-content/uploads/2024/10/alexander-shatov-71Qk8ODIBko-unsplash.jpg"
)

mouse_in_out_listener(
    ".box5",
    ".linkedin",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj32MyiT-AcHNOD9qfNNV8pHNhND7ZOUvBfQ&s",
    "https://miro.medium.com/v2/resize:fit:1200/1*tmD_elC_QhRU0Cag2cKoKA.jpeg"
)

mouse_in_out_listener(
    ".box6",
    ".my-live-server",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51K4xCcIv096uiLZLQDRzHIvyjUpstEPP2g&s",
    "https://i0.wp.com/www.bomberbot.com/wp-content/uploads/2024/04/Visual-Studio-Code-Live-Server-Not-Working.jpg"
)

mouse_in_out_listener(
    ".box7",
    ".github",
    "https://images.ctfassets.net/spoqsaf9291f/53kYM8iHg8JMkNM7uFq5DD/9446c583210cf8e1a1e3f72ebf1bcf0e/Connectors_for_GitHub__1_.png",
    "https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/644158d0438c1513788efeb4_1366_2000.jpeg"
)

mouse_in_out_listener(
    ".box8",
    ".amazon",
    "https://m.media-amazon.com/images/I/51HCHFclmmL.jpg",
    "https://www.shutterstock.com/image-photo/palo-alto-california-us-august-600nw-2507295771.jpg"
)

mouse_in_out_listener(
    ".box9",
    ".flipkart",
    "https://www.boardinfinity.com/blog/content/images/2024/09/Flipkart-Logo.png",
    "https://img-cdn.publive.online/fit-in/1200x675/indianstartupnews/media/media_files/2025/04/18/P9HdBWTFenmF3wLXPvWR.jpg"
)

mouse_in_out_listener(
    ".box10",
    ".wikipidea",
    "https://1000logos.net/wp-content/uploads/2021/04/Wikipedia-logo.png",
    "https://miro.medium.com/v2/resize:fill:1200:1200/g:fp:0.5:0.56/1*0sGSMVeyAnujKfwjlNMdrg.jpeg"
)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////NOW ADDIMG THE 0EVENT LIOSTNERS TO REDIRECT TOI THE APPROPRIATE PAGES TO SHOW  RFELATED INFORMATION////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let box1 = document.querySelector(".box1");
// let box2 = document.querySelector("box2");
// let box3 = document.querySelector("box3");
// let box4 = document.querySelector("box4");
// let box5 = document.querySelector("box5");
// let box6 = document.querySelector("box4");
// let box7 = document.querySelector("box4");
// let box8 = document.querySelector("box4");
// let box9 = document.querySelector("box4");
// let box10 = document.querySelector("box4");

    box1.addEventListener("click", ()=> {
        console.log(window.location);
        window.location.href = "/youtube";
    });
