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
    "https://media.telanganatoday.com/wp-content/upload…/05/Instagram-users-irked-with-the-new-update.jpg",
    "https://blogassets.airtel.in/wp-content/uploads/2024/10/alexander-shatov-71Qk8ODIBko-unsplash.jpg"
)

mouse_in_out_listener(
    ".box5",
    ".linkedin",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj32MyiT-AcHNOD9qfNNV8pHNhND7ZOUvBfQ&s",
    "https://business.linkedin.com/etc.clientlibs/setti…ntlibs/resources/images/og-social-share-image.jpg"
)

mouse_in_out_listener(
    ".box6",
    "my-live-server",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51K4xCcIv096uiLZLQDRzHIvyjUpstEPP2g&s",
    "https://i.ytimg.com/vi/1XwAPLe3kwg/maxresdefault.jpg"
)

mouse_in_out_listener(
    ".box7",
    ".github",
    "https://i0.wp.com/build5nines.com/wp-content/uploa…tions_Featured_Image_2024.jpg?fit=900%2C506&ssl=1",
    "https://i0.wp.com/build5nines.com/wp-content/uploa…tions_Featured_Image_2024.jpg?fit=900%2C506&ssl=1"
)

mouse_in_out_listener(
    ".box8",
    "amazone",
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


