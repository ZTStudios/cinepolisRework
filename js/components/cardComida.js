const CardComida = (title,emoji1,emoji2,emoji3) =>{
    const $div = document.createElement("div")
    $div.className ="cardComida"
    $div.innerHTML =`
    <div class = "cardComida__container">
        <h2 class="cardComida__container-title">${title}</h2>
        <div class = "cardComida__container-Comida">
            <span class = "cardComida__container-Comida-emojis">${emoji1}</span>
            <span class = "cardComida__container-Comida-emojis">${emoji2}</span>
            <span class = "cardComida__container-Comida-emojis">${emoji3}</span>
        </div>
    </div>
    <div class = "cardComida__container">
        <h2 class="cardComida__container-title">${title}</h2>
        <div class = "cardComida__container-Comida">
            <span class = "cardComida__container-Comida-emojis">${emoji1}</span>
            <span class = "cardComida__container-Comida-emojis">${emoji2}</span>
            <span class = "cardComida__container-Comida-emojis">${emoji3}</span>
        </div>
    </div>
    <div class = "cardComida__container">
        <h2 class="cardComida__container-title">${title}</h2>
        <div class = "cardComida__container-Comida">
            <span class = "cardComida__container-Comida-emojis">${emoji1}</span>
            <span class = "cardComida__container-Comida-emojis">${emoji2}</span>
            <span class = "cardComida__container-Comida-emojis">${emoji3}</span>
        </div>
    </div>
    `

    return $div;

}
export default CardComida