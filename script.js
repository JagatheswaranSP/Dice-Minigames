function roll(){
    
    var rollingfirst = Math.floor(Math.random()*6+1);

    if(rollingfirst === 1){
        document.getElementById("firstdice").setAttribute("src", "./assests/Die_face_1b.svg")
    }
    else if(rollingfirst === 2){
        document.getElementById("firstdice").setAttribute("src", "./assests/Die_face_2b.svg")
    }
    else if(rollingfirst === 3){
        document.getElementById("firstdice").setAttribute("src", "./assests/Die_face_3b.svg")
    }
    else if(rollingfirst === 4){
        document.getElementById("firstdice").setAttribute("src", "./assests/Die_face_4b.svg")
    }
    else if(rollingfirst === 5){
        document.getElementById("firstdice").setAttribute("src", "./assests/Die_face_5b.svg")
    }
    else if(rollingfirst === 6){
        document.getElementById("firstdice").setAttribute("src", "./assests/Die_face_6b.svg")
    }

    var rollingsecond = Math.floor(Math.random()*6+1);

    if(rollingsecond === 1){
        document.getElementById("seconddice").setAttribute("src", "./assests/Die_face_1b.svg")
    }
    else if(rollingsecond === 2){
        document.getElementById("seconddice").setAttribute("src", "./assests/Die_face_2b.svg")
    }
    else if(rollingsecond === 3){
        document.getElementById("seconddice").setAttribute("src", "./assests/Die_face_3b.svg")
    }
    else if(rollingsecond === 4){
        document.getElementById("seconddice").setAttribute("src", "./assests/Die_face_4b.svg")
    }
    else if(rollingsecond === 5){
        document.getElementById("seconddice").setAttribute("src", "./assests/Die_face_5b.svg")
    }
    else if(rollingsecond === 6){
        document.getElementById("seconddice").setAttribute("src", "./assests/Die_face_6b.svg")
    }
    
    if(rollingfirst > rollingsecond){
        document.getElementById("heading").innerHTML = "Player 1 Won..!!";
        document.getElementById("player1").style.color = "green";
        document.getElementById("player2").style.color = "red";
        document.querySelector("img#seconddice").classList.add("blend");
        document.querySelector("img#firstdice").classList.remove("blend");
    }
    else{
        document.getElementById("heading").innerHTML = "Player 2 Won..!!";
        document.getElementById("player1").style.color = "red";
        document.getElementById("player2").style.color = "green";
        document.querySelector("img#firstdice").classList.add("blend");
        document.querySelector("img#seconddice").classList.remove("blend");
    }
}