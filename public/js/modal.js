document.getElementById("click1").addEventListener("click",()=>{
    document.getElementById("modalbox1").style.display = "block";
    document.getElementById("close1").addEventListener("click",()=>{
        document.getElementById("modalbox1").style.display = "none";
    })
})

document.getElementById("click2").addEventListener("click",()=>{
    document.getElementById("modalbox2").style.display = "block";
    document.getElementById("close2").addEventListener("click",()=>{
        document.getElementById("modalbox2").style.display = "none";
    })
})