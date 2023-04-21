const mainCon=document.querySelector(".main-box");
const thxCon=document.querySelector(".thankyou-box");
const submitBtn=document.getElementById("sub");
const rating=document.getElementById("rating-outcome");
const rates=document.querySelectorAll(".ratings");

function func(){
    thxCon.classList.remove("hidden");
    mainCon.style.display="none";
}

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    console.log(rate.innerHTML);
    rating.innerHTML=rate.innerHTML;
  });
});