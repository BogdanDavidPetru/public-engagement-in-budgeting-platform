$(document).ready(function(){
    var $projects = $("#projects");
    var $projectOptionList = $("#project-option");
    $projectOptionList.hide();
    $projects.on("mouseover",function(){
     $projectOptionList.show();
     return false;
    });
    $projects.on("mouseout",function(){
        if($("#project-option:hover").length == 0){
            $projectOptionList.hide();
        }
        return false;
    });
})