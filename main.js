const accordionContent = document.querySelectorAll(".accordion");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    
    header.addEventListener("click", () =>{
        item.classList.toggle("open");
        

        let description = item.querySelector(".accordion-content");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("img").replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
        }
        removeOpen(index)
    })
    
    
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".accordion-content");
            des.style.height = "0px";
            item.querySelector("img").classList.replace("fa-miuns, fa-plus")
        }
    })
}