function randomCode() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}
  
  console.log(randomCode());

  $(document).ready(function(){
      $("#codebtn").click(function(){
          $("#promocode").html(randomCode())
          $("#codebtn").hide()
      })
  })

  $(document).ready(function(){
    $("#codebtn1").click(function(){
        $("#promocode1").html(randomCode())
        $("#codebtn1").hide()
    })
})

$(document).ready(function(){
    $("#codebtn2").click(function(){
        $("#promocode2").html(randomCode())
        $("#codebtn2").hide()
    })
})

$(document).ready(function(){
    $("#codebtn3").click(function(){
        $("#promocode3").html(randomCode())
        $("#codebtn3").hide()
    })
})

$(document).ready(function(){
    $("#codebtn4").click(function(){
        $("#promocode4").html(randomCode())
        $("#codebtn4").hide()
    })
})