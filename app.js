

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
var getRandomName = () => $.get('txt/levesek.txt', function(txt) {
    var lines = txt.responseText.split("\n");
    var randLineNum = Math.floor(Math.random() * lines.length);
    return lines[randLineNum]; // random line from the text file
    });
    
    var setRandomName = () => {
        document.getElementById("random-name").innerText = getRandomName();
      }
      
      
      setRandomName();