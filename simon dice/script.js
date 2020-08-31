let activo=0;
let turno=0;
let nivel=0;
let jugador=[];
let movJ=0;
let movPC=0;
let aux=0;
let pc=[];
let local=0;
let mejorJ='';
let puntajeM=0;
let puntajeA=0;
let nombre='';
const colors=["red","blue","green","yellow"];
const ligthcolor=["pink","lightblue","lightgreen","lightyellow"];

window.addEventListener("load",()=>{
if (typeof(Storage) !== "undefined"){
    local=1;
    /*localStorage.clear();*/
    
    puntajeM=parseInt(localStorage.getItem("mejor"));
    if(puntajeM>0){
        cargarLS();
        document.getElementById("mejorJ").innerHTML=mejorJ;
       }else{
        localStorage.setItem("mejor","0");
        localStorage.setItem("jugador"," ");
        puntajeM=0;
    }
      
}else{
    local=0;
}
      
});

function actualizarLS(){
    localStorage.setItem("mejor", new String(puntajeM));
    localStorage.setItem("jugador",mejorJ);
}

function cargarLS(){
    mejorJ=localStorage.getItem("jugador");
    puntajeM=localStorage.getItem("mejor");
}

function cargar(){
    nombre=new String(document.getElementById("nombre").value);
   if(nombre.length>0){
       if(puntajeM==0){
           mejorJ=nombre;
           actualizarLS();
       }
       document.getElementById("mejorJ").innerHTML=mejorJ;
    
       /*
       validar si tengo un nombre guardado o colocar nuevo nombre
       */
       document.getElementById("fm").style.display="none";
       document.getElementById("game").style.display="block";

   }else{
    document.getElementById("estado").style.color="red";   
    document.getElementById("estado").innerHTML="No ingreso nombre";
     setInterval(limpiar,2000);
   }
}

function game(){
   if(activo==0){
      activo=1;
    document.getElementById("star").style.backgroundColor="white";
    document.getElementById("star").innerHTML="Off";
    moviPC();
   }else{
       activo=0; apagar();              
   }
}
function apagar(){
    document.getElementById("star").innerHTML="Star";
    document.getElementById("star").style.backgroundColor="grey";
    turno=0;
    nivel=0;
    jugador=[];
    movJ=0;
    pc=[];
    puntajeA=0;
    clearInterval(mostrar);
}

function limpiar(){
    document.getElementById("estado").innerHTML="";
}

function move(mov){
   if(activo==1){
     if(turno==1){
         jugador.push(mov);
            console.log(pc[movJ]+" "+jugador[movJ]+" "+jugador+" "+movJ);
            if(pc[movJ]==jugador[movJ]){
                console.log(pc);
                console.log(pc[movJ-1]);
                colorear(pc[movJ]-1);
                movJ++;
                console.log(movJ+" "+pc.length);
                if(movJ==pc.length){
                    movJ=0;
                    jugador=[];
                    nivel++;puntajeA++;
                    if(puntajeA>puntajeM){
                        puntajeM=puntajeA;
                        mejorJ=nombre;
                        actualizarLS();
                        document.getElementById("mejorJ").innerHTML=mejorJ;
                    }
                    setInterval(moviPC(),3000);
                }
            }else{
                document.getElementById("estado").style.color="black";   
                document.getElementById("estado").innerHTML="game over";
                setInterval(limpiar,2000);
            }
        }else{
        document.getElementById("estado").style.color="red";   
        document.getElementById("estado").innerHTML="Calma un no es turno de jugador";
         setInterval(limpiar,2000);

     }
   }
}
let mostrar;
function mostrarC(){
    let i=0;
    mostrar=setInterval(function(){
         colorear(pc[i]-1);
         i++;
         if(i==pc.length){
             clearInterval(mostrar);
             setInterval(limpiar,1000);
         }
    },1000);
}
function moviPC(){
    document.getElementById("estado").style.color="green";  
    turno=2;
    if(nivel==0){
        pc.push(color());
        colorear(pc[0]-1);
    }else{
        pc.push(color());
        console.log(pc);
        mostrarC();
    document.getElementById("estado").innerHTML="Turno del pc";
    }
    turno=1;
}


function colorear(numero){
    document.getElementById(colors[numero]).style.backgroundColor=colors[numero];
    setInterval(()=>{ 
        document.getElementById(colors[numero]).style.backgroundColor=ligthcolor[numero];
    },1000);
}


function color(){
    return  Math.floor((Math.random() * (5-1))+1);
}