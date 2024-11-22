var aacard=document.getElementById("card");
var aasum=document.getElementById("sum");
var aares=document.getElementById("res");
var aacsum=document.getElementById("csum");
var cont1=document.querySelector("#cont");
var body=document.querySelector("body");
aatotal=0;
var cctotal=0;
var aastorage=[];
var start=false;
var player=prompt("Enter your name:");
var stake=prompt("Enter the stake:");
var st=document.querySelector("#start");
        

function ran(){
    var ra=(Math.floor(Math.random()*13)+1);
    if(ra>10){
    return 10
    }
    else if(ra==1){
        return 11

    }
    else{
        return ra
    }
}

function startgame(){
    var aafirst=ran();
    var aasecond=ran();
    var ccfirst=ran();
    var ccsecond=ran();
    cctotal=ccfirst+ccsecond;
    st.style.display="none";
    aatotal=aafirst+aasecond;
    aastorage=[aafirst,aasecond];
    start=true;
    main();
}
function main(){
    aacard.innerHTML="Cards :";
    // aasum.innerHTML="Sum :"
    for(var i=0;i<aastorage.length;i++){
        aacard.innerHTML +=` ${aastorage[i]} `;
    }
    
        aasum.innerHTML = `Player Total : ${aatotal}`
        aacsum.innerHTML=`Computer Total: ${cctotal}`

    if (aatotal<21 && cctotal!=21) {
        aares.innerHTML=`Do you want new card?`
    }
    else if (aatotal>21 || cctotal==21) {
        aares.innerHTML=`Sorry ${player} you lost Rs.${stake}`
        body.style=`background-image: url(./images/laughing-kitty-cat.gif)`
    }
    else{
        aares.innerHTML=`Congrats ${player} you won Rs.${stake*2}!!!!`
        cont1.style="background-color:yellow;";
    }
}
function newCard(){
    if(aatotal<21&&start==true){
    var aathird=ran();
    aastorage.push(aathird);
    aatotal += aathird;
    main();
    }
}
function stand(){
if (start==true&&aatotal<21) {
while(cctotal<=17){
    var ccthird=ran();
    cctotal+=ccthird;
    aacsum.innerHTML=`Computer Total: ${cctotal}`;
    // console.log(ccthird)
    }
    if(aatotal>cctotal && aatotal<=21){
        aares.innerHTML=`Congrats ${player} you won Rs.${stake*2}!!!!`
        cont1.style="background-color:yellow;";

    } else if(cctotal>aatotal && cctotal<=21){
        aares.innerHTML=`Sorry ${player} you lost Rs.${stake}`;
        body.style=`background-image: url(./images/laughing-kitty-cat.gif)`

    }else if(aatotal<=21 && cctotal>21){
        aares.innerHTML=`Congrats ${player} you won Rs.${stake*2}!!!!`
        cont1.style="background-color:yellow;";

    }else if(aatotal==cctotal){
        aares.innerHTML=`The game is Draw`
    }
    else{
        aares.innerHTML=`The game is Draw`
    }
    start=false;
  }
}