function loadPics(){
    //categories page
   //loads pics and audio to categories page
let containers=document.getElementsByClassName("front");
let back=document.getElementsByClassName("back");

for(let i=0;i<containers.length;i++){

    let img=cards[parseInt(sessionStorage.getItem("key"))+1][i]["image"];
    let aud=cards[parseInt(sessionStorage.getItem("key"))+1][i]["audioSrc"];
   
    containers[i].style.backgroundImage=`url(${img})`;
    containers[i].querySelector("audio").src=`${aud}`;



    back[i].style.backgroundImage=`url(${img})`;
}
}
/////////////////////////////////////////////////////

function changerCat(){
    //makes changes in categories page
    let switcher=document.querySelector(".switch-label");
    let handle=document.querySelector(".switch-handle");
    switcher.addEventListener("click",()=>{
        changeView();
    });
    handle.addEventListener("click",()=>{
        changeView();  
        });
    }

    /////////////////////////////////////////
    function changeView(){
    //changes the how the cards look
    let rotate=document.getElementsByClassName("rotate");
    let cards=document.getElementsByClassName("card");
    let cardHeaders=document.getElementsByClassName("card-header");
//console.log(document.querySelector(".card-header.none"))
    if(!rotate[0].classList.contains("none")){

    for(let i=0;i<rotate.length;i++){
rotate[i].classList.add("none");
cards[i].classList.add("card-cover");
cardHeaders[i].classList.add("none");
    }
  
    }
    else{
        for(let i=0;i<rotate.length;i++){
            rotate[i].classList.remove("none");
            cards[i].classList.remove("card-cover");
            cardHeaders[i].classList.remove("none");
                }
    }
    }
    ///////////////////////////////////////////////////////////////////////////
    function addListenersCards(){
        //adds event listeners to card on categories page
        let cards=document.getElementsByClassName("card");
        for(let i=0;i<cards.length;i++){
            cards[i].addEventListener("mouseup",()=>{
                cards[i].classList.add("translate");
             
                cards[i].querySelector("audio").play();
            }
            )
        }
        for(let i=0;i<cards.length;i++){
            cards[i].addEventListener("mouseleave",()=>{
                cards[i].classList.remove("translate");  
            }
            )
        }
    }