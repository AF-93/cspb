function leer(texto){
    var texto = document.getElementById("texto").value
    var bot = new SpeechSynthesisUtterance()
    bot.pitch = 0.5
    bot.rate = 0.95
    bot.text = texto
    bot.lang = "es-ES"
    speechSynthesis.speak(bot)
};
function titulo(texto){
    var texto = document.querySelector("#bienvenida").innerText
    
    var bot = new SpeechSynthesisUtterance()
    bot.pitch = 0
    bot.rate = 1
    bot.text = texto
    bot.lang = "es-ES"
    speechSynthesis.speak(bot)
}
const enter = window.addEventListener("keypress",(event)=>{
    const tecla = event.key
    if(tecla=="Enter"){
        leer(texto)
    }
})