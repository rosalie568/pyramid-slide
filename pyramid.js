
var form = document.getElementById('range');
var h = document.getElementById('range').value;
var height = parseInt(h);
drawPyramid(height);

//Draws Pyramid
function drawPyramid(height) {

     var clear = document.querySelector("#pyramid");
     clear.textContent = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr1 = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr1 += ".";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr1 += "#";
        }

        var para = document.createElement("p");
        var name = document.createTextNode(rowStr1);
        para.appendChild(name);
        document.getElementById("pyramid").appendChild(para);

    }
}
