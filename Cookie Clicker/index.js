const cookie = document.querySelector(".cookie")

function cookieCounter(){
    let counter = document.querySelector(".counter")
    let value = counter.innerText
    value++
    counter.innerText = value
}

cookie.addEventListener("click", function(){           
    cookieCounter(); 
    console.log("anything");
})