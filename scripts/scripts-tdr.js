function collapse(catId, arrId, headId) {
    console.log(catId + " " + arrId);
    document.getElementById(catId).setAttribute("display", "none");
    document.getElementById(catId).style.display = "none";
    document.getElementById(headId).setAttribute("max-height", "35px");
    document.getElementById(headId).style.maxHeight = "35px";
    document.getElementById(arrId).style.transform = "rotate(0deg)";
}

function show(catId, arrId, headId) {
    console.log(catId + " " + arrId);
    document.getElementById(catId).setAttribute("display", "block");
    document.getElementById(catId).style.display = "block";
    document.getElementById(headId).setAttribute("max-height", "500px");
    document.getElementById(headId).style.maxHeight = "500px";
    document.getElementById(arrId).style.transform = "rotate(180deg)";
}

function trigger(catId, arrId, headId) {
    console.log(document.getElementById(catId).getAttribute("display"));
    console.log(document.getElementById(arrId).getAttribute("transform"));
    if(document.getElementById(catId).getAttribute("display") === "block") {
        console.log("Now collapsing...");
        collapse(catId, arrId, headId);
    } else {
        console.log("Now showing...");
        show(catId, arrId, headId);
    }
}

function removeOption(optionId) {
    document.getElementById(optionId).setAttribute("display", "none");
    document.getElementById(optionId).style.display = "none";
}