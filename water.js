const wrapper = document.querySelector(".wrapper");
const loginLnk =document.querySelector(".login-link");
const registerLink = document.querySelector(".Register-link");
const btnPopup = document.querySelector(".btnLogin");

registerLink.addEventListener(".click", ()=> {
    wrapper.classList.add("active");
});
loginlink.addEventListener(".click", ()=> {
    wrapper.classList.remove("active");
});
btnPopup.addEventListener("click", ()=>{
    wrapper.classList.add("active-popup")
});

iconClose.addEventListener("click", ()=>{
    wrapper.classList.remove("active-popup")
});
