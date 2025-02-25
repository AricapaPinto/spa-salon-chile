import setupMenu  from "./menu.js"
import darkTheme from "./tema_oscuro.js";

document.addEventListener("DOMContentLoaded",(e)=>{
   setupMenu();
   
})

// como el menu trae el dom interno no es necesario ponerlo adentro

darkTheme(".dark-theme-btn", "dark-mode");
