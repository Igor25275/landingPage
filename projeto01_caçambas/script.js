const mobile_btn = document.querySelector(".btn_mobile");
const nav_links = document.getElementById("nav_links");

mobile_btn.addEventListener("click", () => {

    nav_links.classList.toggle("show");
})