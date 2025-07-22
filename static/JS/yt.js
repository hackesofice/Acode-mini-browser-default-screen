let main_container = document.getElementById("main-container");
let loader = document.getElementById("loader");

    let observer = new IntersectionObserver((element) => {
        if (element[0].isIntersecting){
           insert_new_videos(5);
        }
    });

observer.observe(loader);

// for now im using it without any agrument in future i'll use an list of youtube urls 
function insert_new_videos(number_of_wanted_videos){
        for (let i = 0; i < number_of_wanted_videos; i++){
            ask_for_url_from_server()
            .then(response =>{
                setTimeout(()=> {
                console.log(` calld from insert video function response is ==> ${response.uri}`);
                let new_box = document.createElement("div");
                    new_box.className = "video";
                    main_container.appendChild(new_box);
                    let iframe = document.createElement("iframe");
                        iframe.src =`https://www.youtube.com/embed/${response.uri}`;
                        iframe.title = "Acode - Video Player";
                        iframe.style.cssText = `width: 100%; height: 100%;`;
                        new_box.appendChild(iframe)
            }, 1000)});
            // setTimeout(()=>{
                

            // }, 1000);

            
        }
}

async function ask_for_url_from_server(){
    try {
        const response =  await fetch("/youtube/get_video_link", {
            method: "GET"
        });
        return response.json()
    }catch(err){
        console.log(`hey dear we got some err ==>>> ${err}`);
    }
}








//<iframe width="560" height="315" src="https://www.youtube.com/embed/hLAc7OO3wHI?si=6-94vxnnotvWzS-F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
