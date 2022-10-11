import '../css/style.css';
import javascriptLogo from '../public/javascript.svg'
import { setupCounter } from './counter'
import Card from "./components/cardMovie.js"
import CardComida from "./components/cardComida.js"

document.querySelector('#app').appendChild(Card("Estrenos",["https://w5.cuevana3.me/wp-content/uploads/2022/04/sonic-2-la-pelicula-55969-poster-200x300.jpg","https://w5.cuevana3.me/wp-content/uploads/2022/04/morbius-55973-poster-200x300.jpg","https://w5.cuevana3.me/wp-content/uploads/2022/03/the-batman-55046-poster-200x300.jpg","https://w5.cuevana3.me/wp-content/uploads/2022/08/bullet-train-61045-poster-200x300.jpg","https://w5.cuevana3.me/wp-content/uploads/2022/09/pokemon-las-cronicas-de-arceus-62767-poster-200x300.jpg","https://w5.cuevana3.me/wp-content/uploads/2022/01/megaboa-53190-poster-200x300.jpg"]))
document.querySelector('#app').appendChild(CardComida("Comboloco", "🍔","🍟","🥤"))
document.querySelector('#app').appendChild(Card("Preventa",["https://es.web.img2.acsta.net/pictures/22/05/10/11/20/2725565.jpg","https://ver.cuevana.pro/resize/200/storage/54198/WWn29ij6eEbhrgYsJcv6nehNoI4H9Zb0Zx7suhhz.jpg","https://ver.cuevana.pro/resize/200/storage/54212/iyqPgWDBPXyu43p3X3XSxRVJXBQLQ0j8ZRouSH2o.jpg","https://pics.filmaffinity.com/spider_man_across_the_spider_verse_part_one-524691364-mmed.jpg","https://decine21.com/img/upload/obras/el-gato-con-botas-el-ultimo-deseo-45262/el-gato-con-botas-el-ultimo-deseo-45262-c.jpg","https://w5.cuevana3.me/wp-content/uploads/2022/01/megaboa-53190-poster-200x300.jpg"]))


