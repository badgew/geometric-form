CanvasRenderingContext2D.prototype.clear = 
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }           
};

var data = {};
var allLines = [];

var shapeDrawer = function (){
    allLines = [];

    data = {
        canvas: null,
        ctx: null,
        clickedDot: null,
        dots: [ {x:0.5006, y:0.1113}, {x:0.4007, y:0.1663}, {x:0.5964, y:0.1663}, {x:0.5006, y:0.2234}, {x:0.5332, y:0.2152}, {x:0.4618, y:0.2152}, {x:0.4435, y:0.2071}, {x:0.5536, y:0.2071}, {x:0.8879, y:0.3355}, {x:0.1133, y:0.3355}, {x:0.5006, y:0.3355}, {x:0.4190, y:0.3355}, {x:0.3681, y:0.3355}, {x:0.5719, y:0.3355}, {x:0.6331, y:0.3355}, {x:0.2050, y:0.2784}, {x:0.7900, y:0.2784}, {x:0.2152, y:0.3355}, {x:0.7757, y:0.3355}, {x:0.5006, y:0.4069}, {x:0.5352, y:0.4028}, {x:0.5413, y:0.4191}, {x:0.5515, y:0.3987}, {x:0.5923, y:0.3906}, {x:0.6086, y:0.4293}, {x:0.6534, y:0.3804}, {x:0.7900, y:0.3865}, {x:0.7798, y:0.3559}, {x:0.5719, y:0.4252}, {x:0.8165, y:0.4171}, {x:0.1805, y:0.4191}, {x:0.2050, y:0.3906}, {x:0.2172, y:0.3559}, {x:0.3436, y:0.3824}, {x:0.3986, y:0.3906}, {x:0.3864, y:0.4293}, {x:0.4190, y:0.4252}, {x:0.4496, y:0.4191}, {x:0.4598, y:0.4028}, {x:0.4414, y:0.3987}, {x:0.3069, y:0.4477}, {x:0.6942, y:0.4477}, {x:0.5006, y:0.4477}, {x:0.5617, y:0.4477}, {x:0.5943, y:0.4477}, {x:0.6147, y:0.4477}, {x:0.8879, y:0.4477}, {x:0.8349, y:0.4314}, {x:0.8043, y:0.4314}, {x:0.8165, y:0.4171}, {x:0.4312, y:0.4477}, {x:0.4007, y:0.4477}, {x:0.3782, y:0.4477}, {x:0.1133, y:0.4477}, {x:0.1642, y:0.4314}, {x:0.1948, y:0.4314}, {x:0.5943, y:0.5007}, {x:0.6269, y:0.4844}, {x:0.6432, y:0.5313}, {x:0.6636, y:0.5313}, {x:0.6534, y:0.5150}, {x:0.7309, y:0.5150}, {x:0.3986, y:0.5007}, {x:0.3681, y:0.4844}, {x:0.3517, y:0.5313}, {x:0.3314, y:0.5313}, {x:0.3416, y:0.5150}, {x:0.2661, y:0.5150}, {x:0.5006, y:0.5598}, {x:0.6229, y:0.5598}, {x:0.6534, y:0.5598}, {x:0.6942, y:0.5598}, {x:0.7554, y:0.5598}, {x:0.3681, y:0.5598}, {x:0.3375, y:0.5598}, {x:0.2967, y:0.5598}, {x:0.2356, y:0.5598}, {x:0.5943, y:0.6210}, {x:0.6269, y:0.6353}, {x:0.6432, y:0.5904}, {x:0.6657, y:0.5924}, {x:0.6534, y:0.6108}, {x:0.7309, y:0.6108}, {x:0.3986, y:0.6210}, {x:0.3681, y:0.6353}, {x:0.3517, y:0.5904}, {x:0.3314, y:0.5924}, {x:0.3416, y:0.6088}, {x:0.2661, y:0.6088}, {x:0.6942, y:0.6720}, {x:0.2967, y:0.6720}, {x:0.5006, y:0.6720}, {x:0.5617, y:0.6720}, {x:0.5964, y:0.6720}, {x:0.6167, y:0.6720}, {x:0.8879, y:0.6720}, {x:0.8308, y:0.6862}, {x:0.8022, y:0.6923}, {x:0.4312, y:0.6720}, {x:0.4007, y:0.6720}, {x:0.3782, y:0.6720}, {x:0.1133, y:0.6720}, {x:0.1642, y:0.6862}, {x:0.1948, y:0.6862}, {x:0.5006, y:0.7127}, {x:0.1805, y:0.7025}, {x:0.8145, y:0.7025}, {x:0.5495, y:0.6985}, {x:0.5372, y:0.7189}, {x:0.5536, y:0.7229}, {x:0.5821, y:0.6923}, {x:0.5923, y:0.7331}, {x:0.6555, y:0.7433}, {x:0.7757, y:0.7637}, {x:0.7859, y:0.7331}, {x:0.2091, y:0.7331}, {x:0.2152, y:0.7637}, {x:0.3456, y:0.7433}, {x:0.3986, y:0.7331}, {x:0.4190, y:0.6944}, {x:0.4598, y:0.7189}, {x:0.4435, y:0.7229}, {x:0.4496, y:0.7025}, {x:0.8879, y:0.7841}, {x:0.1133, y:0.7841}, {x:0.5006, y:0.7841}, {x:0.4190, y:0.7841}, {x:0.3681, y:0.7841}, {x:0.5719, y:0.7841}, {x:0.6331, y:0.7841}, {x:0.2152, y:0.7841}, {x:0.7757, y:0.7841}, {x:0.2029, y:0.8453}, {x:0.7961, y:0.8453}, {x:0.5006, y:1.0084}, {x:0.4007, y:0.9533}, {x:0.5964, y:0.9533}, {x:0.5006, y:0.8962}, {x:0.5332, y:0.9024}, {x:0.4618, y:0.9024}, {x:0.4394, y:0.9126}, {x:0.5556, y:0.9126} ]
    };

    var dotScale = 500;

    function circleCollision (c1, c2) {
        var a = c1.r + c2.r,
            x = c1.x - c2.x,
            y = c1.y - c2.y;

        if ( a > Math.sqrt( (x*x) + (y*y) ) ) return true;
        else return false;
    };

    function prepCanvas () {
        var res = window.devicePixelRatio || 1,
            scale = 1 / res,
            containerW = 500,
            containerH = 558;
        data.canvas = document.getElementById('dots');
        data.ctx = data.canvas.getContext('2d');
        // testCtx = data.canvas.getContext('2d');

        data.canvas.width = containerW * res;
        data.canvas.height = containerH * res;
        data.canvas.style.width = containerW + 'px';
        data.canvas.style.height = containerH + 'px';
        
        data.ctx.scale(res, res);
        
        data.canvas.addEventListener('mousedown', function (e) {
            checkForDot(e);
        });
    };

    function drawDots () {
        var i = 0;
        for (; i < data.dots.length; i++) {
            var d = data.dots[i];
            data.ctx.beginPath();
            data.ctx.arc(d.x * dotScale, d.y * dotScale, 3, 0, 2*Math.PI);
            data.ctx.fillStyle = '#fff';
            data.ctx.fill();
            data.ctx.closePath();
        }
    };

    function drawLine (toDot) {
        data.ctx.beginPath();
        data.ctx.moveTo(data.clickedDot.x * dotScale, data.clickedDot.y * dotScale);
        data.ctx.lineTo(toDot.x * dotScale, toDot.y * dotScale);
        data.ctx.lineWidth = 5;
        data.ctx.strokeStyle = '#fff';
        data.ctx.stroke();
        data.ctx.closePath();
    };

    function checkForDot (e) {
        var offsets = document.getElementById("dots").getBoundingClientRect();
        var canvasTop = offsets.top;
        var canvasLeft = offsets.left;
        var mouseX = e.clientX - canvasLeft;
        var mouseY = e.clientY - canvasTop;
        var i = 0, col = null;
        for (; i < data.dots.length; i++) {
            var d = data.dots[i];
            var c1 = {x: d.x * dotScale, y: d.y * dotScale, r: 10};
            var c2 = {x: mouseX, y: mouseY, r: 10};
            if (circleCollision(c1, c2)) col = d;
        }
        if (col !== null) {
            if (data.clickedDot !== null){
                drawLine(col);
                allLines.push( [data.clickedDot, col] );
            }
            data.clickedDot = col;
        } else data.clickedDot = null;
    };

    prepCanvas();
    drawDots();
};

shapeDrawer();

$(document).ready(function(){
    applyClickHandlerToGallery();
});

function applyClickHandlerToGallery(){
    $(".letter").each(function(){
        console.log("letter each");
        var $thisImg = $(this);
        
        $thisImg.click(function(event){
            event.preventDefault();
            var $clone = $(this).clone();            
            $clone.addClass("small-image")
            $("#line").append($clone);
        });
    });    
}

function deleteLetter(){
    var length = $("#line").find('img').length;
    $("#line").find('img')[(length - 1)].remove();
}

function saveLines(){
    
    $.post({
      type: "POST",
      url: "script.php",
      data: { 
         imgBase64: data.canvas.toDataURL()
      }
    }).done(function(o) {
      location.reload();
    });

    applyClickHandlerToGallery();
    shapeDrawer();
}

$( "#save" ).click(function(event) {
  event.preventDefault();
  saveLines();});

$( "#clearLines" ).click(function(event) {
  event.preventDefault();
  shapeDrawer();});

$( "#deleteLetter" ).click(function(event) {
  event.preventDefault();
  deleteLetter();});




