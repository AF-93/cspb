const canvas = document.getElementById("Matrix");
const contex = canvas.getContext("2d");

const color = ["red","blue","yellow","purple","green"]

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const emotes = "❤✌♪♫☼♫►↕◄‼↑↓→←▲▼╚╔╦╠═╬"

const fontsize = 32;
const collumns = canvas.width/fontsize;

const lluvia = [];



for (let x=0; x < collumns; x++){
    lluvia[x]=1
};

const draw= () => {
    contex.fillStyle = "rgba(0,0,0,0.08)";
    contex.fillRect(0,0, canvas.width, canvas.height);

    contex.fillStyle = color[Math.round(Math.random()*color.length)]
    contex.font = fontsize+"px monospace";
    for(let i=0;i<lluvia.length;i++){
        const texto = emotes.charAt(Math.floor(Math.random()*emotes.length));
        contex.fillText(texto,i*fontsize,lluvia[i]*fontsize);
        if (lluvia[i]*fontsize>canvas.height && Math.random()>0.975){
            lluvia[i]=0
        }
        lluvia[i]++
    }
}
setInterval(draw,50)