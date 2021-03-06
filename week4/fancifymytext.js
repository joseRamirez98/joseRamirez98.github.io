function changeFontSize() {
    document.getElementById("textBox").style.fontSize = "24pt";
}

function makeTextUpper() {
    str = document.getElementById("textBox").value;
    str = str.toUpperCase();
    var parts= str.split(".");
    parts.push("-Moo.");
    str = parts.join('');
    document.getElementById("textBox").value = str;
}

function makeTextLower(textBox) {
    str = textBox.value;
    str = str.toLowerCase();
    document.getElementById("textBox").value = str;
}

function checkRadioButton() {
    var textBox = document.getElementById("textBox");
    var boringBtn = document.getElementById("boringBetty");
    var boringIsChecked = boringBtn.checked;

    if(boringIsChecked) {
        textBox.style.fontSize = "initial";
        textBox.style.fontWeight = "normal";
        textBox.style.color = "black";
        textBox.style.textDecoration = "none";

        makeTextLower(textBox);
    }
    else {
        textBox.style.fontWeight = "bold";
        textBox.style.color = "blue";
        textBox.style.textDecoration = "underline";
    }
}
