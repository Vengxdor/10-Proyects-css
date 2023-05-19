const icon = document.querySelector(".icon")
const header = document.querySelector("header")
const mobileInfo = document.querySelector(".info-mobile")
const mobileList = document.querySelectorAll(".info-mobile ul li")

icon.addEventListener("click", () =>{
   header.classList.toggle("active")
   
   if(header.classList.contains("active")){
      mobileList.forEach(item => item.style.display = 'block')
   }else{
      mobileList.forEach(item => item.style.display = 'none')
   }
})