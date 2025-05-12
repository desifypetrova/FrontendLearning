const selectDisplayMenu = document.querySelector(".select-display");
const flexContainer = document.querySelector(".flex-container");
console.log(selectDisplayMenu);
selectDisplayMenu.addEventListener("change",function(){
    flexContainer.setAttribute("data-display",this.value);
})
