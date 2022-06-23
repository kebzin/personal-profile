


let MessageUser1;
 let SubmitButton;
 let Developer = "kebba"


 SubmitButton = document.querySelector(".submit").onclick = function () {
    let UserName  = document.querySelector("#username").value;


while (UserName == "") {
    break
}

    if (UserName == Developer) {
        console.log("Good Afternoon Boss");
        console.log("what our main focuse today");
        let answer1;
        answer1 = window.prompt("what is our main focuse today");
        if (answer1 == "webdevelopment") {
            window.alert("got That " + Developer + " live everything to me " )
            let question2 = window.prompt("Just to know what to do, Which site woul you like me to created for you "
             + " Example you can say created a simple site for me " + " or you can say something diffrent")
            if (question2 == "simple site") {
                window.alert("working on it boss")
            }
        }
        
    }
    else while (!(UserName === Developer)) {
        
    
            window.alert("Welcome to the small AI " + UserName);
           let question1 = window.prompt( UserName + " My name is Assistance and i can do a lot for you, what would you like me to do for you.  For xample you can say created a SIMPLE SITE " + 
            " or you can say CREAT A GAME and i will created a game for you in no time TRYME me " + UserName )
           
            UserName.remove()
 

    }


    
 }


   
    
    
   function GamePlaying() {
    let adding;
    let side1 = document.querySelector(".side1");
    let side2  = document.querySelector(".side2 ");
    let total = document.querySelector(".total");
 
    let correct  = document.querySelector(".correct");
   

    let random1 = Math.floor(Math.random() * 10)
    let random2 = Math.floor(Math.random() * 10)
    side1.innerHTML = random1;
    side2.innerHTML = random2;
    
    
  
   let subMitResult = document.querySelector(".subMitResult").onclick = function () {
        let input  = document.querySelector(".input").value;

        while (random1 + random2 == input) {
            
            correct.style.color = "green";
            total.style.color = "green"
            correct.innerHTML = "correct Answer"
            total.innerHTML = random1 + random2

            break
        }

        while (!(random1 + random2 == input)) {
            total.innerHTML =  + random1 + random2
            correct.style.color = "red";
            total.style.color = "red"
            correct.innerHTML = "Wrong Answer"
            total.innerHTML = input 
            break
        }
        // if (random1 + random2 == input) {
        //     correct.style.color = "green";
        //     total.style.color = "green"
        //     total.innerHTML = random1 + random2
        // }

      
            
        // else if  (!(random1 + random2 == input)) {
        //     correct.style.color = "red";
        //     // total.style.color = "read"
        //     correct.innerHTML = "Wrong answer try again";
           
        // }

        console.log(input);
    
  }
//     submit.addEventListener("click" ,() =>{
//    });
   }
    
   GamePlaying()
function CountDown() {
    var CountDownDate = new Date("37:25").getTime();
    var x = setInterval( function () {
        var now = Date().getTime();
        var distnce = CountDownDate - now;
        var munit = Math.floor((distnce % (100 * 60 * 60)) / (1000 * 60));
        var second = Math.floor((distnce % (1000 * 60 )) / 1000);
        var tim = document.querySelector(".tim").innerHTML = munit
    })
}

    