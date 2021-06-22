$(document).ready(function(){

  //Sticky Menu 

   $(".js--service-section").waypoint(function(direction){

        if(direction=="down"){
            $("nav").addClass("sticky")
        }else{
            $("nav").removeClass("sticky")
        }
   });


    //MIXITUP for Portfolio Section
    var mixer = mixitup('.content');
});



//Smoth Scroll in IE,Microsoft Edge,Safari

$("a").on('click',function(event){
    if(this.hash !==""){
        event.preventDefault();

        var hash = this.hash;
        $('html, body').animate({
            scrollTo: $(hash).offset().top
        },800, function() {
            window.location.hash = hash;
            
        });
    }
});


//Creating Mobile Menu
function openNav(){
    document.getElementById("myNav").style.width="100%";
}

function closeNav(){
    document.getElementById("myNav").style.width="0%";
}

