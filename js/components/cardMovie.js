
const Card = (title, array) =>{
  const $div = document.createElement("div")
  $div.className = "card"
  $div.innerHTML=`
    <h2 class="card__title">${title}</h2>
  `
  const $divMovies = document.createElement("div")
  $divMovies.className = "card__movies"
  for (const url of array) {
    const $divImagen= document.createElement("div")
    $divImagen.className = "card__movies-container"
    $divImagen.innerHTML = `
      <img src="${url}" class="card__movies-container-img">
    `
    $divMovies.appendChild($divImagen)
  }
  $div.appendChild($divMovies)
  return $div;
}


export default Card
