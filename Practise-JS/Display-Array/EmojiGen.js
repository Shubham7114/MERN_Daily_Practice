let emojis =[ "👩‍❤️‍👩","💔","🛣","😊","💢","😇","🧖‍♂️",
              "👶","🕺","📰","👊","👿","🐾","🐩"
              ,"😧","😑","🤡","🥶","😞","🕶","😲",
              "🎰","😒","🚰" 
            ]

//generator random number

function getRandomNumber(){
    let emoji = emojis[Math.floor(Math.random() *emojis.length)]
    document.getElementById("Generator").textContent = emoji
}

genrateBtn.addEventListener("Generator", () =>{
    emojis.textContent = emojis[getRandomNumber()];
})