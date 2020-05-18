var speed = 4;

function showImage(src) {
    var div = document.createElement("div");
    width(div.style)
    width = "300px";
    height = "300px";
    boder = "2px solid black";
    textaling = "center";
    overflow = "hiden";
}
document.body.appendChild(div);
img = document.createElement("img");
img.src = src;
img.width = 300;
img.height = 300;
div.appendChild(img);


function keyDown(key) {
    var k = 0;
    if (key == 187) k = speed;
    if (key == 186) k = -speed;
    if (key != 0) {
        img.width = img.width + k;
        img.height = img.height + k;
        img.style.margin = ((300 - img.height) / 2).toString() + "px";
    }
}