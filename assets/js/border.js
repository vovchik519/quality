var canvases = document.querySelectorAll(".border-dashed-680");

canvases.forEach(function (canvas) {
    var ctx = canvas.getContext("2d");

    function draw() {
        var dashLen = 34;
        var dashGap = 34;
        var dashColor = "#EE7F01";
        var bgColor = "#000000";
        var x = 0;
        var y = 0;
        var width = 680;
        var height = 480;

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = dashColor;
        ctx.lineWidth = 30;
        ctx.setLineDash([dashLen, dashGap]);
        ctx.strokeRect(x, y, width, height);
    }

    draw();
});

var canvases = document.querySelectorAll(".border-dashed-280");

canvases.forEach(function (canvas) {
    var ctx = canvas.getContext("2d");

    function draw() {
        var dashLen = 34;
        var dashGap = 34;
        var dashColor = "#EE7F01";
        var bgColor = "#000000";
        var x = 0;
        var y = 0;
        var width = 280;
        var height = 295;

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = dashColor;
        ctx.lineWidth = 30;
        ctx.setLineDash([dashLen, dashGap]);
        ctx.strokeRect(x, y, width, height);
    }

    draw();
});

var canvases = document.querySelectorAll(".border-dashed-300");

canvases.forEach(function (canvas) {
    var ctx = canvas.getContext("2d");

    function draw() {
        var dashLen = 34;
        var dashGap = 34;
        var dashColor = "#EE7F01";
        var bgColor = "#000000";
        var x = 0;
        var y = 0;
        var width = 300;
        var height = 400;

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = dashColor;
        ctx.lineWidth = 30;
        ctx.setLineDash([dashLen, dashGap]);
        ctx.strokeRect(x, y, width, height);
    }

    draw();
});