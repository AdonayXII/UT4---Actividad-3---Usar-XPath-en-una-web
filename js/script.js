var xhttp = new XMLHttpRequest();

function consult(v) {
    showResult(xhttp.responseXML, v);
}

xhttp.open("GET", "monsters.xml", true);
xhttp.send();

function showResult(xml, value) {
    var txt = "";
    var array = [
        /*1*/"//monster[@id='Elder']//name",
        /*2*/"//monster[@id='Brutal']//name",
        /*3*/"//monster/maxSize[@id='colosal']/../name",
        /*4*/"//monster[@id='Fly']//name",
        /*5*/"//monster//weaknessElements[weakElement='Débil al hielo']/../../name",
        /*6*/"//monster//elements/elementsInflicting[elementName='Inflinge plaga de rayo']/../../name",
        /*7*/"//monster//elements/elementsInflicting[elementName='Inflinge plaga de draco']/../../name",
        /*8*/"//monster[@id='Fanged']//name",
        /*9*/"//monster[@id='Temnoceran']//name",
        /*10*/"//monster[@id='unclasified']//name"
    ];
    path = array[value];
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            if (xml.evaluate) {
                var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
                var result = nodes.iterateNext();
                while (result) {
                    txt += result.childNodes[0].nodeValue + "<br>";
                    result = nodes.iterateNext();
                }
            }
        }
        // Code For Internet Explorer
    } else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
    }
    document.getElementById("text").innerHTML = txt;
}