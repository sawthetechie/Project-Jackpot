let slot1 = document.getElementById("image1");
let slot2 = document.getElementById("image2");
let slot3 = document.getElementById("image3");
let casinoM =document.getElementById("casinoMachine")
let lever = document.getElementById("lever");
var imgArray = new Array();

imgArray[0] = 'slotitem/tile000.png';
imgArray[1] = 'slotitem/tile001.png';
imgArray[2] = 'slotitem/tile002.png';
imgArray[3]= 'slotitem/tile003.png';
imgArray[4] = 'slotitem/tile004.png';
imgArray[5] = 'slotitem/tile005.png';

const slotcreate = function(slot){
    slot.innerHTML = "";
    let slotImgArr = imgArray.sort(() => Math.random() - 0.5);
 
    for(let i = 0; i < slotImgArr.length; i++){
        slot.innerHTML += `<img src="${slotImgArr[i]}"> `
    }
}
//create jackpot slotitems
const create = function (){
        slotcreate(slot1);
        slotcreate(slot2);
        slotcreate(slot3);
}

slot1.onload = create();

lever.addEventListener("click", ()=>{
    lever.style.transform = 'rotateX(180deg)';
    slot1.classList.add("anim");
    slot2.classList.add("anim");
    slot3.classList.add("anim");

    setTimeout(()=>{
        lever.style.transform = 'rotateX(0deg)';
    },500)

    setTimeout(()=>{
        displayResult();

        setTimeout(()=>{
            create();
        },1000);

        if(slot1.innerHTML == slot2.innerHTML && slot1.innerHTML == slot3.innerHTML){
            setTimeout(()=>{
                alert("Baby Jackpot");
            },500)
        }
    },10000)
  
})


const displayResult = function (){
        slot1.classList.remove("anim");
        slot2.classList.remove("anim");
        slot3.classList.remove("anim");

        let picid1 = Math.floor( Math.random() * (5 - 0) + 0);
        let picid2 = Math.floor( Math.random() * (5 - 0) + 0);
        let picid3 = Math.floor( Math.random() * (5 - 0) + 0);

        slot1.innerHTML =`<img src="${imgArray[picid1]}" class="aftereffect"> `;
        slot2.innerHTML =`<img src="${imgArray[picid2]}" class="aftereffect"> `;
        slot3.innerHTML =`<img src="${imgArray[picid3]}" class="aftereffect"> `;
}

