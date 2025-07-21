let main_container = document.getElementById("main-container");
let loader = document.getElementById("loader");

    let observer = new IntersectionObserver((element) => {
        if (element[0].isIntersecting){
           insert_new_videos(5);
            console.log(" showing the lpafder ")
        }
    });

observer.observe(loader);

// for now im using it without any agrument in future i'll use an list of youtube urls 
function insert_new_videos(number_of_wanted_videos){
        for (let i = 0; i < number_of_wanted_videos; i++){
            setTimeout(()=>{
                console.log("loading ");
                let new_box = document.createElement("div");
                    new_box.className = "video";
                    main_container.appendChild(new_box);
            }, 3000);

            
        }
}