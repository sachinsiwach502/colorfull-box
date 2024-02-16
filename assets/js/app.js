var react = document.querySelector("#box");
react.addEventListener("mousemove", function (mouselocation) {
    var boxlocation = react.getBoundingClientRect();
    var insideboxvalue = mouselocation.clientX - boxlocation.left;

    if (insideboxvalue < boxlocation.width / 2) {
        react.style.backgroundColor = "red";
    } else {
        react.style.backgroundColor = "blue";
    }
});
