        
        
        
        
        
        //좌표값 찾음 (이미지의 반전의 기준점이 됨.)
        var centerX = $(window).width() / 2;
        var centerY = $(window).height() / 2;

        const item = document.querySelector('.item'); 

        function getCursorTouch(event){
            let x = event.touches[0].clientX;
            let y = event.touches[0].clientY;

            addEventListener("touchstart", (event) => {
                item.style.top = (y) + "px";
                item.style.left = (x) + "px";
            });
            addEventListener("touchmove", (event) => {
                item.style.top = (y) + "px";
                item.style.left = (x) + "px";
            });
            addEventListener("touchend", (event) => {
                console.log(x);
                console.log(y);
                item.style.top = (y) + "px";
                item.style.left = (x) + "px";
            });
        }

/* ------------------------------------------------------------ */

var canvas, context;
function init() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

    context.lineWidth = 2; // 선 굵기를 2로 설정
    context.strokeStyle = "blue";

// 마우스 리스너 등록. e는 MouseEvent 객체
    canvas.addEventListener("mousemove", function (e) { move(e) }, false);
    canvas.addEventListener("mousedown", function (e) { down(e) }, false);
    canvas.addEventListener("mouseup", function (e) { up(e) }, false);
    canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}

var startX=0, startY=0; // 드래깅동안, 처음 마우스가 눌러진 좌표
var drawing=false;
function draw(curX, curY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}
function down(e) {
    startX = e.offsetX; startY = e.offsetY;
    drawing = true;
}
function up(e) { drawing = false; }
function move(e) {
    if(!drawing) return; // 마우스가 눌러지지 않았으면 리턴
    var curX = e.offsetX, curY = e.offsetY;
    draw(curX, curY);
    startX = curX; startY = curY;
}
function out(e) { drawing = false; }