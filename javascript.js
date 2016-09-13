document.getElementById("boxModel").innerHTML = "Hello World";

function show() { 
    document.getElementById("demoButton").innerHTML=Date();
    RandomWord();
    RandomwWordComplete();
    
} 
    
function RandomWord() {
        var requestStr = "http://randomword.setgetgo.com/get.php";

        $.ajax({
            type: "GET",
            url: requestStr,
            dataType: "jsonp",
            jsonpCallback: 'RandomWordComplete'
        });
    }

    function RandomWordComplete(data) {
        alert(data.Word);
    }
