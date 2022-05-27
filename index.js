let player1Name = "";
let player2Name = "";

function startGame(){
    console.log("Working in function");
    //set players name in HTML
    if(player1Name === "" && player2Name === ""){
        player1Name = prompt("Enter first player name..");
        document.getElementById("player1").innerHTML = player1Name;

        player2Name = prompt("Enter Second palyer name..");
        document.getElementById("player2").innerHTML = player2Name;

    }

    let randomNumber1 = Math.floor(Math.random() * 6) +1;//giving random number 1-6
    let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src" , randomDiceImage1)


    let randomNumber2 = Math.floor(Math.random() * 6) +1;//gibing random number 1-6
    let randomDiceImage2 = "images/dice" + randomNumber2 + ".png" ;
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src" , randomDiceImage2);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩 " + player1Name + "   Wins!";
    }
    else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = player2Name + "   wins! 🚩"
    }
    else{
        document.querySelector("h1").innerHTML = "🏳️ !..Draw..! 🏳️";
    
    }
    

}







