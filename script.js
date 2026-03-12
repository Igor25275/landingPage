const mobile_btn = document.querySelector(".btn_mobile");
const nav_links = document.getElementById("nav_links");

const btn_box = document.querySelector(".btn_box");
const box_contact = document.getElementById("box_contact");

const btn_close = document.getElementById("btn_close");

btn_close.addEventListener("click", () =>{

    box_contact.classList.remove("show");
    box_contact.style.display = "none";

})

btn_box.addEventListener("click", () =>{

    box_contact.classList.add("show");
    box_contact.style.display = "block";

})


mobile_btn.addEventListener("click", () => {

    nav_links.classList.toggle("show");
})