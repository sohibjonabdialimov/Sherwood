let elLink = document.querySelectorAll(".elLink");
let elBtn = document.querySelector("#elBtn");

elLink.forEach((item) => {
    item.addEventListener("click", () => {
        elBtn.innerHTML = item.innerHTML;
        console.log(item.innerHTML);
    })
})

