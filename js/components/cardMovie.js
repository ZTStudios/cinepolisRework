
const Card = (title, img1,img2,img3) =>{
  const $div = document.createElement("div")
  $div.className = "card"
  $div.innerHTML=`
    <h2 class="card__title">${title}</h2>
    <div class="card__movies">
      <div class="card__movies-container">
        <img src="${img1}" class="card__movies-container-img">
      </div>
      <div class="card__movies-container">
        <img src="${img2}" class="card__movies-container-img">
      </div>
      <div class="card__movies-container">
        <img src="${img3}" class="card__movies-container-img">
      </div>
    </div>
  `
  return $div;
}


export default Card
