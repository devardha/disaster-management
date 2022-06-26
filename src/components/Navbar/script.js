const menu = document.querySelector(".menu input");
const nav = document.querySelector("ul");

menu.addEventListener('click', function(){
nav.classList.toggle('slide')
});	

export default menu