$(document).ready(function(){
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
    // $projectOptionList.on("mouseout",function(){
    //     if($("#projects:hover").length == 0){
    //             $projectOptionList.hide();
    //             $(".content").css("padding-left", "15%");
    //         return false;
    //     }
    //     });
    $.get( "http://jservice.io/api/random?count=10", showQuestions);
})
function showQuestions(data) {
    $( data ).each ( function () {    
    $("<li>")
    // .append( $("<p>").addClass("question").text("Question: " + this.question))
    .append( $("<span>").addClass("answer").text("Answer: " + this.answer))
     .append( $("<p>").addClass("value").text("Value: "+this.value))
     .append($("<button>").addClass("").text("View statistics"))
    // .append( $("<p>").addClass("createdAt").text("Created at: " + this.created_at))
    // .append( $("<p>").addClass("categoryTitle").text("Category Title: "+this.category.title))
    .appendTo("#project-list")
    // .append( $("<div>").addClass("author_affiliation").text(this.institution))
    // .append( $("<span>").text(this.email))
    // .appendTo("#authors-list")
    });
    
} 
