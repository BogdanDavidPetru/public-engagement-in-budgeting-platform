var projects = ["Sport Equipment Park Iuliu Prodan", "Green Space building", "Auxiliary Energy "]
var descriptions = ["Paving of the main park alley as well as the surrounding streets. Create a new sport area in the park , that will be equipped with sport equipment",
    "Create a new sport area in the park , that will be equipped with sport equipment. Paving of the main park alley as well as the surrounding streets",
    "Nu strica niciodata mai mult verde in oras. Deja sunt solutii tehnice pentru a schimba acoperisurile cladirilor in siguranta, fara a afecta structura sau diferitele beneficii ale unui acoperis."
]

var location_text = ["Str. Memorut, nr. 2", "Zona Parcului Feroviar", "Piata Scanteia"]
var dedline = ["10/12/2020", "12/10/2021", "8/9/2022"]


var data_for_dummy_category = ["Web aplication for Parking spaces",
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus lorem varius felis porta venenatis. Cras nec purus sed mauris viverra gravida et in justo",
    "Web application",
    "10/12/2023"
]

$(document).ready(function() {
    // $("#logging_div").hide();
    // $("#menu").hide();
    // $(".modal").hide();
    // $("#loginForm").on("submit", formSubmit);

    console.log(-1 % 6)

    var loadingAnimation = $("#for_loading_2")
    loadingAnimation.hide();

    var $titleProject = $("#header_text");
    $titleProject.html(projects[0]);

    var $projectDescription = $("#project_detail");
    $projectDescription.html(descriptions[0]);

    var $location = $("#location_text");
    $location.html(location_text[0]);

    var $deadline = $("#deadline_text");
    $deadline.html(dedline[0]);


    var $search_button = $("#myInput");
    $search_button.on("keyup", function() {

        var value = $search_button.val().toLowerCase();
        console.log("the value is", value);

        for (var i = 0; i < projects.length; i++) {
            if (projects[i].toLowerCase().indexOf(value) > -1) {
                console.log("the project is", projects[i]);
                //change the body for the new project

                $titleProject.html(projects[i]);

                $projectDescription.html(descriptions[i]);

                $location.html(location_text[i]);

                $deadline.html(dedline[i]);

                break;
            }
        }
    });

    var dropdown_ref = $("#greed_spaces");
    var dropdown_option3 = $("#digital");
    var dropdown_option2 = $("#educational");
    var dropdown_option1 = $("#greed_spaces");

    dropdown_option1.on("click", function() {
        console.log("the dropdown option clicked", dropdown_option1.html());

        // dropdown_ref.innerHTML = "Green Space building";
        // console.log("the dropdown option clicked", dropdown_ref.html());
        // dropdown_ref.html("Green Space building");
        dropdown_option1.css("background-color", "green");

        dropdown_option2.css("background-color", "");
        dropdown_option3.css("background-color", "");


        $titleProject.html(projects[0]);
        $projectDescription.html(descriptions[0]);
        $location.html(location_text[0]);
        $deadline.html(dedline[0]);

        $("#header_icon").addClass("fa-tree");
        $("#header_icon").removeClass("fa-code-fork");

    });


    dropdown_option2.on("click", function() {
        console.log("the dropdown option clicked", dropdown_option2.html());

        dropdown_option2.css("background-color", "green");
        dropdown_option1.css("background-color", "");
        dropdown_option3.css("background-color", "");

    });


    dropdown_option3.on("click", function() {
        console.log("the dropdown option clicked", dropdown_option3.html());
        dropdown_option3.css("background-color", "green");
        dropdown_option1.css("background-color", "");
        dropdown_option2.css("background-color", "");

        $titleProject.html(data_for_dummy_category[0]);
        $projectDescription.html(data_for_dummy_category[1]);
        $location.html(data_for_dummy_category[2]);
        $deadline.html(data_for_dummy_category[3]);

        $("#header_icon").removeClass("fa-tree");
        $("#header_icon").addClass("fa-code-fork");

    });



    var $loginForm = $(".backdrop");
    $loginForm.hide();

    var $loginOption = $("#information_form");
    var $onlyForm = $("#login-form");


    console.log($("#information_form").html())

    $("#information_form").submit(function() {
        console.log("clicked on  bid");
        if ($loginForm.is(":visible")) {
            // $onlyForm.animate({height:"0px"},1000,function(){$onlyForm.animate({width:"0px"},1000,function(){$onlyForm.hide().delay(500); $questionForm.animate({height:"0px"},1000,function(){$questionForm.animate({width:"0px"},1000,function(){$questionForm.hide().delay(500)})})})});
            // $questionForm.animate({width: "100%" }, 1000, function() { $questionForm.animate({ height: "100%"  }, 1000, function(){$onlyForm.animate({width: "400px" }, 1000, function() { $onlyForm.animate({ height: "500px"  }, 1000)}) })});
        } else {
            $loginForm.show();
            $loginForm.animate({ width: "100%" }, 600, function() {
                $loginForm.animate({ height: "100%" }, 600, function() {
                    $onlyForm.show();
                    $onlyForm.animate({ width: "400px" }, 600, function() { $onlyForm.animate({ height: "400px" }, 600) })
                })
            });

        }

        return false;
    });

    var $cancelForm = $("#cancel_bid");
    $cancelForm.on("click", function() {
        if ($loginForm.is(":visible")) {
            $onlyForm.animate({ height: "0px" }, 600, function() {
                $onlyForm.animate({ width: "0px" }, 600, function() {
                    $onlyForm.hide().delay(500);
                    $loginForm.animate({ height: "0px" }, 600, function() { $loginForm.animate({ width: "0px" }, 600, function() { $loginForm.hide().delay(500) }) })
                })
            });
        }
        return false;
    })


    var $bidForm = $("#finalize_bid");
    $bidForm.on("click", function() {
        if ($loginForm.is(":visible")) {
            // if ($("#money_sum").val() === '') {
            //     allert("empty slot");
            // }
            console.log("look here");
            console.log($("#money_sum").val().length);

            if ($("#money_sum").val().length == 0) {
                alert("empty slot");
                return false;
            }
            // console.log($("#money_sum").val().length());
            confirm("Are you sure you want to place this bid?");
            loadingAnimation.show();
            // loadingAnimation.hide().delay(200);

            setTimeout(function() {
                loadingAnimation.hide()
            }, 800);

            setTimeout(function() {
                alert("Bid placed successfully!");

                $onlyForm.animate({ height: "0px" }, 600, function() {
                    $onlyForm.animate({ width: "0px" }, 600, function() {
                        $onlyForm.hide().delay(500);
                        $loginForm.animate({ height: "0px" }, 600, function() {
                            $loginForm.animate({ width: "0px" }, 600, function() {
                                $loginForm.hide().delay(500);
                            })
                        })
                    })
                });

            }, 1500);

        }
        return false;
    })

});