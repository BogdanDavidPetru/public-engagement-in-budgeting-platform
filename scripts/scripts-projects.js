$(document).ready(function(){
    var $loginForm = $(".backdrop");
    $loginForm.hide();
    var $loginOption=$("#login-option");
    var $onlyForm = $("#login-form");
    $loginOption.on("click",function(){
        if($loginForm.is(":visible")){
           // $onlyForm.animate({height:"0px"},1000,function(){$onlyForm.animate({width:"0px"},1000,function(){$onlyForm.hide().delay(500); $questionForm.animate({height:"0px"},1000,function(){$questionForm.animate({width:"0px"},1000,function(){$questionForm.hide().delay(500)})})})});
           // $questionForm.animate({width: "100%" }, 1000, function() { $questionForm.animate({ height: "100%"  }, 1000, function(){$onlyForm.animate({width: "400px" }, 1000, function() { $onlyForm.animate({ height: "500px"  }, 1000)}) })});
        }
        else{
            $loginForm.show();
            $loginForm.animate({width: "100%" }, 1000, function() { $loginForm.animate({ height: "100%"  }, 1000, function(){$onlyForm.show();$onlyForm.animate({width: "400px" }, 1000, function() { $onlyForm.animate({ height: "500px"  }, 1000)}) })});

        }
    });

    var $cancelForm = $("#cancel");
    $cancelForm.on("click",function(){
        if($loginForm.is(":visible")){
            $onlyForm.animate({height:"0px"},1000,function(){$onlyForm.animate({width:"0px"},1000,function(){$onlyForm.hide().delay(500); $loginForm.animate({height:"0px"},1000,function(){$loginForm.animate({width:"0px"},1000,function(){$loginForm.hide().delay(500)})})})});
        }
        return false;
    })
    var $projects = $("#projects");
    var $projectOptionList = $("#project-option");
    $projectOptionList.hide();
    $projects.on("mouseover",function(){
     $projectOptionList.show();
     $(".content").css("padding-left", "20%");
     return false;
    });
    $projects.on("mouseout",function(){
        if($("#project-option:hover").length == 0){
            $projectOptionList.hide();
            $(".content").css("padding-left", "15%");
        }
        return false;
    });
    function allowDrop(ev) {
        ev.preventDefault();
      }
    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
    
    $( ".feedback-header" ).html( " <i class='fas fa-arrow-left'></i> <span>" + stages[index] + "</span> <i class='fas fa-arrow-right'></i>");
    $( ".feedback-body" ).html( "<p>" + feedbacks[index] + "</p>" );
    $(".fa-arrow-left").on("click",left_feedbacks);  
    $(".fa-arrow-right").on("click",right_feedbacks);
})

var index=0;

var stages = ["Finance","Architecture","Voting"];
var feedbacks=["Your proposed project fits our budget for the year","The architects state that the spot on Sports Street is suitable for your proposed project.","Your project got a 35% majority from the total nr of votes."];

function left_feedbacks(){
    index--;
        if(index<0)
        {
            index=2;
        }
    $( ".feedback-header" ).html( "<i class='fas fa-arrow-left'></i> <span>" + stages[index] + "</span> <i class='fas fa-arrow-right'></i>");
    $( ".feedback-body" ).html( "<p>" + feedbacks[index] + "</p>" );
    $(".fa-arrow-left").on("click",left_feedbacks);
    $(".fa-arrow-right").on("click",right_feedbacks);
}

function right_feedbacks(){
    index++;
    index=index%3;
    $( ".feedback-header" ).html( " <i class='fas fa-arrow-left'></i> <span>" + stages[index] + "</span> <i class='fas fa-arrow-right'></i>");
    $( ".feedback-body" ).html( "<p>" + feedbacks[index] + "</p>" );
    $(".fa-arrow-left").on("click",left_feedbacks);
    $(".fa-arrow-right").on("click",right_feedbacks);
}