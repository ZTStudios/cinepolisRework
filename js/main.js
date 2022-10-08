import '../css/style.css';
import javascriptLogo from '../public/javascript.svg'
import { setupCounter } from './counter'
import Card from "./components/cardMovie.js"
import CardComida from "./components/cardComida.js"

document.querySelector('#app').appendChild(Card("Estrenos","https://ver.cuevana.pro/resize/200/storage/52637/Yia0FAkvqOBMpvi83TtKxbHTM2ZDnnajBUvH3RRz.jpg","https://ver.cuevana.pro/resize/200/storage/54198/WWn29ij6eEbhrgYsJcv6nehNoI4H9Zb0Zx7suhhz.jpg","https://ver.cuevana.pro/resize/200/storage/54212/iyqPgWDBPXyu43p3X3XSxRVJXBQLQ0j8ZRouSH2o.jpg"))
document.querySelector('#app').appendChild(CardComida("Comboloco", "🍔","🍟","🥤"))
document.querySelector('#app').appendChild(Card("Preventa","https://ver.cuevana.pro/resize/200/storage/52637/Yia0FAkvqOBMpvi83TtKxbHTM2ZDnnajBUvH3RRz.jpg","https://ver.cuevana.pro/resize/200/storage/54198/WWn29ij6eEbhrgYsJcv6nehNoI4H9Zb0Zx7suhhz.jpg","https://ver.cuevana.pro/resize/200/storage/54212/iyqPgWDBPXyu43p3X3XSxRVJXBQLQ0j8ZRouSH2o.jpg"))


