var steakbtn = document.getElementById("steak");
var saucebtn = document.getElementById("sauce");
var beveragebtn = document.getElementById("beverage");

showMenu(1);

function showMenu(n){
    var menucontainer = document.getElementsByClassName("menuslide");
    for(var i=0; i< menucontainer.length;i++){
        menucontainer[i].style.display = "none";
    }
    steakbtn.style.backgroundColor = "rgb(77, 124, 156)";
    steakbtn.style.color = "thistle";
    saucebtn.style.backgroundColor = "rgb(77, 124, 156)";
    saucebtn.style.color = "thistle";
    beveragebtn.style.backgroundColor = "rgb(77, 124, 156)";
    beveragebtn.style.color = "thistle";

    
    menucontainer[n-1].style.display = "block";
    if(n == 1){
        steakbtn.style.backgroundColor = "black";
        steakbtn.style.color = "white";
    }else if(n==2){
        saucebtn.style.backgroundColor = "black";
        saucebtn.style.color = "white";
    }else{
        beveragebtn.style.backgroundColor = "black";
        beveragebtn.style.color = "white";
    }
}

