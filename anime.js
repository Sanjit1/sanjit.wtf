var canvas;
var context;
init();
drawgrid();
drawlines();

function init() {

    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = (window.innerHeight) - 190 + "px";

    drawgrid();
    //drawlines();

}

function drawgrid() {

    context.strokeStyle = "LightGrey";

}

function drawlines() {

    context.strokeStyle = "blue";
    var curLeft = (canvas.width / 2) - 10;
    var curTop = (canvas.height / 2) - 10;
    var curRight = curLeft + 10;
    var curBottom = curTop + 10;

    var first = 0;
    var second = 1;
    var next = 10;
    var c = 0;
    context.beginPath();
    context.rect(curLeft, curTop, next, next);
    context.stroke();
    //var count = 0;

    for (var i = 1; i <= 9; i++) {

        next = first + second;
        first = second;
        second = next;

        next *= 10;

        count = i % 4
        console.log(count, curLeft, curTop, curRight, curBottom, next)
        //need to sort the offset and positioning because this is super wrong
        switch (count) {
            case 0:

                curRight = curLeft + next
                curLeft = curLeft
                curTop = curBottom
                curBottom = curBottom + next

                break;
            case 1:
                curLeft = curRight
                curRight = curRight + next
                curTop = curBottom - next
                curBottom = curBottom

                break;

            case 2:
                curLeft = curRight - next
                curRight = curRight
                curBottom = curTop
                curTop = curBottom - next
                break;
            case 3:
                curRight = curLeft
                curLeft = curLeft - next
                curBottom = curTop + next
                curTop = curTop
                break;
        }

        context.beginPath();
        context.rect(curLeft, curTop, next, next);
        context.stroke();

        count++;

    }

}