var category_messages = [];

var category_name = [
    "Roads and pedestrians",
    "Mobility and Traffic safety",
    "Green Spaces",
    "Arrangement of public spaces",
    "Educational and cultural",
    "Digital city"
]

var Eligible_projects = [7, 4, 3, 3, 5, 9]

var category_icons = ["fa-road", "fa-bus", "fa-tree", "fa-street-view", "fa-university", "fa-code-fork"]

var procent_data = [
    [
        ['Task', 'Proposed'],
        ['Total budget', 8],
        ['Spend for this project', 2]
    ],
    [
        ['Task', 'Proposed'],
        ['Total budget', 7],
        ['Spend for this project', 3]
    ],
    [
        ['Task', 'Proposed'],
        ['Total budget', 6],
        ['Spend for this project', 4]
    ],
    [
        ['Task', 'Proposed'],
        ['Total budget', 8],
        ['Spend for this project', 2]
    ],
    [
        ['Task', 'Proposed'],
        ['Total budget', 9],
        ['Spend for this project', 1]
    ],
    [
        ['Task', 'Proposed'],
        ['Total budget', 6],
        ['Spend for this project', 4]
    ]
]


var accepted_proposes_data = [

    [
        ['Stage', 'Proposed', 'Accepted', 'Finished', 'In progress',
            'Early stages', { role: 'style' }, { role: 'annotation' }
        ],
        ['Proposed', 100, 0, 0, 0, 0, '#b87333', ''],
        ['Accepted', 0, 70, 0, 0, 0, '#b87333', ''],
        ['Details', 0, 0, 20, 25, 25, '#b87333', '']
    ],


    [
        ['Stage', 'Proposed', 'Accepted', 'Finished', 'In progress',
            'Early stages', { role: 'style' }, { role: 'annotation' }
        ],
        ['Proposed', 160, 0, 0, 0, 0, '#b87333', ''],
        ['Accepted', 0, 80, 0, 0, 0, '#b87333', ''],
        ['Details', 0, 0, 40, 20, 20, '#b87333', '']
    ],


    [
        ['Stage', 'Proposed', 'Accepted', 'Finished', 'In progress',
            'Early stages', { role: 'style' }, { role: 'annotation' }
        ],
        ['Proposed', 90, 0, 0, 0, 0, '#b87333', ''],
        ['Accepted', 0, 70, 0, 0, 0, '#b87333', ''],
        ['Details', 0, 0, 30, 20, 20, '#b87333', '']
    ],


    [
        ['Stage', 'Proposed', 'Accepted', 'Finished', 'In progress',
            'Early stages', { role: 'style' }, { role: 'annotation' }
        ],
        ['Proposed', 130, 0, 0, 0, 0, '#b87333', ''],
        ['Accepted', 0, 100, 0, 0, 0, '#b87333', ''],
        ['Details', 0, 0, 35, 35, 30, '#b87333', '']
    ],


    [
        ['Stage', 'Proposed', 'Accepted', 'Finished', 'In progress',
            'Early stages', { role: 'style' }, { role: 'annotation' }
        ],
        ['Proposed', 110, 0, 0, 0, 0, '#b87333', ''],
        ['Accepted', 0, 70, 0, 0, 0, '#b87333', ''],
        ['Details', 0, 0, 25, 25, 20, '#b87333', '']
    ],


    [
        ['Stage', 'Proposed', 'Accepted', 'Finished', 'In progress',
            'Early stages', { role: 'style' }, { role: 'annotation' }
        ],
        ['Proposed', 140, 0, 0, 0, 0, '#b87333', ''],
        ['Accepted', 0, 90, 0, 0, 0, '#b87333', ''],
        ['Details', 0, 0, 30, 40, 20, '#b87333', '']
    ],



]

var chart_details = [" Project Count statistics", " Money statistics"]

function generate_category_message() {
    var category_message = [];
    for (var i = 0; i < category_name.length; i++) {
        var message = "";
        message += "<h2>" + category_name[i] + "</h2>";
        message += "<i class=\"fa " + category_icons[i] + " fa-4x\" aria-hidden=\"true\"></i>";
        message += "<h3>Eligible Projects : " + Eligible_projects[i] + " </h3>";
        category_message.push(message);
    }
    return category_message;
}

var index = 0;


var chart_type = 0;

$(document).ready(function() {
    // $("#logging_div").hide();
    // $("#menu").hide();
    // $(".modal").hide();
    // $("#loginForm").on("submit", formSubmit);

    console.log(-1 % 6)
    $("#test_icon").attr("title", "Previous Category : " + category_name[5]);

    $("#test_icon3").attr("title", "Next Category : " + category_name[index + 1]);

    $("#loadingAnimation").hide();
    category_messages = generate_category_message();

    var topic_ref = document.getElementById("category_sel");
    var topic = category_messages[index];
    topic_ref.innerHTML = topic;

    var title_ref = document.getElementById("category-title");




    // $("#piechart").hide();

    // var chart = new google.visualization.PieChart(chart_ref);
    var $changeButton = $("#test_icon3");
    var $backButtton = $("#test_icon");

    $changeButton.on("click", function() {

        $("#loadingAnimation").show();
        $("#category-title").hide();
        $("#change_chart").hide();

        $("#category_sel").animate({ width: "1%" }, 1000, function() { $("#category_sel").animate({ width: "25%" }, 500) });

        setTimeout(function() {
            $("#category-title").show();
            $("#change_chart").show();
            console.log("change button clicked");

            index += 1;
            index = index % 6;

            var topic = category_messages[index];
            topic_ref.innerHTML = topic;

            title_ref.innerHTML = category_name[index] + " " + chart_details[chart_type % 2];

            drawChart();
            $("#loadingAnimation").hide();



            $("#test_icon3").attr("title", "Next Categoey : " + category_name[(index + 1) % 6]);
            $("#test_icon").attr("title", "Previous Category : " + category_name[(index - 1)]);

        }, 1000);



    });


    $backButtton.on("click", function() {

        $("#loadingAnimation").show();
        $("#category-title").hide();
        $("#change_chart").hide();

        $("#category_sel").animate({ width: "1%" }, 1000, function() { $("#category_sel").animate({ width: "25%" }, 500) });


        setTimeout(function() {
            $("#category-title").show();
            $("#change_chart").show();
            console.log("change button clicked");


            index += 5;
            index = index % 6;
            var topic = category_messages[index];
            topic_ref.innerHTML = topic;

            title_ref.innerHTML = category_name[index] + " " + chart_details[chart_type % 2];


            console.log(index);
            drawChart();
            $("#loadingAnimation").hide();

            $("#test_icon3").attr("title", "Next Categoey : " + category_name[(index + 1) % 6]);
            $("#test_icon").attr("title", "Previous Category : " + category_name[(index - 1)]);

        }, 1000);



    });


    var $change_chart_button = $("#change_chart");

    $change_chart_button.on("click", function() {

        // add to change the chart type

        $("#category-title").animate({ "font-size": "1px" }, 500, function() { $("#category-title").animate({ "font-size": "30px" }, 500) });

        setTimeout(function() {


            title_ref.innerHTML = category_name[index] + " " + chart_details[chart_type % 2];

        }, 500);

        chart_type++;
        drawChart();
    });


    // Load google charts
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values


    on_load();




});

function on_load() {
    var topic_ref = document.getElementById("category_sel");
    var topic = category_messages[index];
    topic_ref.innerHTML = topic;

    var title_ref = document.getElementById("category-title");

    var topic = category_messages[index];
    topic_ref.innerHTML = topic;

    title_ref.innerHTML = category_name[index] + " " + chart_details[chart_type % 2];
    drawChart();



}


function drawChart() {
    console.log("got here " + index);

    // console.log("document loaded");
    // console.log($("#test_icon").attr("title"));
    // $("#test_icon").attr("title", "Back");
    // console.log($("#test_icon").attr("title"));

    if (chart_type % 2 == 0) {
        var data = google.visualization.arrayToDataTable(accepted_proposes_data[index]);
        var chart = new google.visualization.BarChart(document.getElementById('piechart'));
    } else {
        var data = google.visualization.arrayToDataTable(procent_data[index]);
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    }



    // Optional; add a title and set the width and height of the chart
    var options = {
        'width': 550,
        'height': 400,
        backgroundColor: '#d0d2f8',
        is3D: true,
        isStacked: true
    };

    // Display the chart inside the <div> element with id="piechart"
    // var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    // var chart = new google.visualization.BarChart(document.getElementById('piechart'));
    chart.draw(data, options);
}