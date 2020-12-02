
function addListeners(){
    //main page
//gives categories on the main page listeners
let pics=document.getElementsByClassName("main-card");
console.log(pics[0].getElementsByTagName("img")[0])
for(let i=0;i<pics.length;i++){
    let pic=pics[i].getElementsByTagName("img")[0];
    pics[i].addEventListener("click",()=>{
     
        sessionStorage.clear();
         sessionStorage.setItem("key",i);
         location="categories.html";
            });

    pic.addEventListener("click",()=>{
     
sessionStorage.clear();
 sessionStorage.setItem("key",i);
 location="categories.html";
    }
        )
    }

}///////////////////////////////////////////

function changer(){
    //main page
   //changes the main color of cards on the main page and does some other work
let switcher=document.querySelector(".switch-label");
let handle=document.querySelector(".switch-handle");
switcher.addEventListener("click",()=>{
    changeBgColor();
});
handle.addEventListener("click",()=>{
    changeBgColor();  
    });
}

//////////////////////////////////////////////////////////////////////////
    function changeBgColor(){
        //main page
        //does the changing of the color. created to avoid code repetition with listeners
        let cards=document.getElementsByClassName("main-card");
   
    if(document.querySelector(".main-card.green")===undefined||document.querySelector(".main-card.green")===null){
    
        for(let i=0;i<cards.length;i++){
            cards[i].classList.add("green");
        }
    }
    else{
        for(let i=0;i<cards.length;i++){
            cards[i].classList.remove("green");
        }
    }
    }
///////////////////////////////////////////////////////////////////////////////

    
