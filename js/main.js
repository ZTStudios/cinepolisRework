import '../css/style.css';
import javascriptLogo from '../public/javascript.svg'
import { setupCounter } from './counter'
import Header from "./components/header.js"

document.querySelector('#app').appendChild(Header)
 
setupCounter(document.querySelector('#counter'))
