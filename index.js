$("button").click(function(){
    $("h1").css("color", "purple")
})

$(document).keypress(function(event){
    $("h1").text(event.key)
    console.log(event.key)
})

// $(document).on("mouseover", function(){
//     $("h1").css("color", "purple")
// })

$(document).on("click", function(){
    $("h1").css("color", "purple")
})
