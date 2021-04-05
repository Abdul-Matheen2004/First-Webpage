function pressed() {
    var Symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-"]
    var input = document.getElementById("inp").value;
    var teseter = input.split("")
    if (input.length >= 8) {
        document.getElementById("condition5").style.color = "green";
        document.getElementById("condition5").style.fontWeight = "1";
    } else {
        document.getElementById("condition5").style.color = "red";
        document.getElementById("condition5").style.fontWeight = "1000";
    }

    for (i of input.split("")) {
        if (Symbols.indexOf(i) !== -1) {
            document.getElementById("condition3").style.color = "green";
            document.getElementById("condition3").style.fontWeight = "1";
            break;
        } else {
            document.getElementById("condition3").style.color = "red";
            document.getElementById("condition3").style.fontWeight = "1000";
        }

    }
    for (i of input.split("")) {
        if (isNaN(i) == false) {
            document.getElementById("condition4").style.color = "green";
            document.getElementById("condition4").style.fontWeight = "1";
            break;
        } else {
            document.getElementById("condition4").style.color = "red";
            document.getElementById("condition4").style.fontWeight = "1000";
        }
    }
    for (i of input.split("")) {
        if (isNaN(i) == false){
            break;
        }
        else if (i === i.toUpperCase()) {
            document.getElementById("condition1").style.color = "green";
            document.getElementById("condition1").style.fontWeight = "1";
            break;
        } else {
            document.getElementById("condition1").style.color = "red";
            document.getElementById("condition1").style.fontWeight = "1000";
        }
    }
    for (i of input.split("")) {
        if (isNaN(i) == false){
        break;
        }
        if (i === i.toLowerCase()) {
            document.getElementById("condition2").style.color = "green";
            document.getElementById("condition2").style.fontWeight = "1";
            break;
        } else {
            document.getElementById("condition2").style.color = "red";
            document.getElementById("condition2").style.fontWeight = "1000";
        }
    }
}
