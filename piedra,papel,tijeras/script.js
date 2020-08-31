const play=document.getElementById("game");
const menu=document.getElementById("menu");
const marco=document.getElementById("marco");
const imagen=["piedra.png","papel.png","tigeras.png"];
let seg=3;
let partida=0;
let pc=0;
let player=0;
let ini=0;
window.addEventListener("load",()=>{
         
});
setInterval(()=>{ 
    if(partida>0){
        if(seg>0){
            document.getElementById("gameC").innerHTML="";
            document.getElementById("gameC").innerHTML=seg;
            seg--;
        }else{
            seg=3;
            gamePlayer(4);
        }
    }else{
        if(ini>0){
            document.getElementById("gameC").innerHTML="#";
            if(player>pc){
                document.getElementById("end").innerHTML="player";
            }else if(pc>player){
                document.getElementById("end").innerHTML="pc";
            }else{
                document.getElementById("end").innerHTML="Empate";
            }
            document.getElementById("clase").style.backgroundColor="green";      
        }

    }
},1000);

function playIni(){
    ini=1;
    menu.style.display="none";  
    play.style.display="flex";
    partida=Number(document.getElementById("rondas").value);
    document.getElementById("Rondas").innerHTML="";
    document.getElementById("Rondas").innerHTML=partida;
    document.getElementById("clase").style.backgroundColor="white"; 
    document.getElementById("clase").style.borderStyle="black";

}
function gamePlayer(move){
    if(partida>0){
        if(move!=4) seg=3;
        let comp=ia(); mostrarPC(imagen[comp-1]); partida--;  
        let res=0;
       switch(move){
           case 1:
             if(comp==3){
                 res=1;
             }else if(comp==2){
                 res=-1;
             }    
           break;
           case 2:
            if(comp==1){
                res=1;
            }else if(comp==3){
                res=-1;
            }
           break;
           case 3:
            if(comp==2){
                res=1;
            }else if(comp==1){
                res=-1;
            }
           break;
           case 4:
             res=-1;    
           break;
       }
      if(res>0){
        cambio("Player"); player++;
      }else if(res<0){
        cambio("Pc"); pc++;
      }else{
        cambio("Tie"); player++; pc++;
      }
      console.log(comp+" "+move);
    }

}

function cambio(cadena){
    document.getElementById("gameM").innerHTML="";
    document.getElementById("gameM").innerHTML=cadena;
    document.getElementById("Rondas").innerHTML="";
    document.getElementById("Rondas").innerHTML=partida;
}

function mostrarPC(ruta){
    document.getElementById("mostrarPC").innerHTML="";
    document.getElementById("mostrarPC").innerHTML=`<img src='${ruta}'>`;
}

function ia(){
    return  Math.floor((Math.random() * (4-1))+1);
}

function closeP(){
    menu.style.display="flex";  
    play.style.display="none";
    document.getElementById("mostrarPC").innerHTML="";
    cambio("juego");
    seg=3;
    partida=0;
    document.getElementById("end").innerHTML="";
    pc=0;
    player=0;
    ini=0;
}

