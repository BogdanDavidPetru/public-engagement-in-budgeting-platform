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
})
