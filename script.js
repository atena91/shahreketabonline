// prompt("سلام این پروژه دارای دو صفحه اضافی می باشد   say 'ok'😂")
// alert("صفحات :  ورود , تماس با ما")



window.onload = function () {
  var swiper = new Swiper(".myBookSwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

const inp = document.querySelector(".searchInp");
const box = document.querySelector(".search-results");

inp.addEventListener("focus", () => {
  box.style.display = "block";
});

inp.addEventListener("blur", () => {
  box.style.display = "none";
});
;
const openBtn = document.querySelector(".open");
const menu = document.querySelector(".menu-hum");
const closeBtn = document.querySelector(".close-btn");
const logo = document.querySelector(".logo")
const ilogo = document.querySelector(".shop")
const searchBox = document.querySelector(".btnsearch");
const mobile = document.querySelector("#mobile1")


openBtn.addEventListener("click", () => {
  menu.classList.remove("d-none");
  logo.classList.add('d-none')
  ilogo.classList.add("d-none")
  openBtn.classList.add("d-none")
  searchBox.classList.add("d-none");
   mobile.classList.remove("w-100");
  mobile.classList.add("w-75");

});


closeBtn.addEventListener("click", () => {
  menu.classList.add("d-none");
  logo.classList.remove('d-none')
  ilogo.classList.remove("d-none")
  openBtn.classList.remove("d-none")
  searchBox.classList.remove("d-none");
  mobile.classList.add("w-100");
  mobile.classList.remove("w-75");
}); 
