function greeter(person) {
    return "Hello, " + person;
}
var user = "Deep Sea";
document.body.innerHTML = greeter(user);

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