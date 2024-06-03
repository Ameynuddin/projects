let screen = document.getElementById("screen")
buttons = document.querySelectorAll("button")
let screenvalue = ""; // decalring as " " as it is an open value input by user yet

for(item of buttons){
    item.addEventListener("click", (e)=>{
        buttonText = e.target.innerText
        if(buttonText == "x"){
            buttonText = "*"
            screenvalue += buttonText // adding + so the output is not replacing each other
            screen.value = screenvalue 

        }else if(buttonText == "C"){
            screenvalue = " ";
            screen.value = screenvalue

        }else if(buttonText == "="){
            screen.value = eval(screenvalue)
    
        }else{
            screenvalue += buttonText
            screen.value = screenvalue 
        }

    })
}