function ChangeImg() {
    var img = document.getElementById("sweethome");
    var e = document.getElementById("floar");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    if (value == "Floot 1") {
        img.innerHTML = '<img class="img" src="floot1.jpg" >'
    }
    if (value == "basement") {
        img.innerHTML = '<img class="img" src="basment.jpg" >'

    }
    if (value == "Attic") {
        img.innerHTML = '<img class="img"  src="attic.jpg" >'

    }
    if (value == "new") {
        img.innerHTML = '<h2>Value Not Found !<\h2>'

    }
    console.log("value is " + value);
}