sizeArr = [1, 2, 3, 4, 5];

for (var i = 0; i < 200; i++) {
    var div = document.createElement("div");
    div.className = "snow";
    div.style.width = sizeArr[Math.floor(Math.random() * sizeArr.length)] + "px";
    div.style.height = div.style.width;
    document.body.appendChild(div);
}