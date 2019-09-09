if (accessCookie("name") == "noCookie" || accessCookie("name") == null || accessCookie("name") == "" || accessCookie("name") == " ") {
    requestName();
} else {
    document.getElementById("nameIndex").innerHTML = "Hello " + accessCookie("name") + ", Good too see you!";
}

function accessCookie(cookieName) {
    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    for (var i = 0; i < allCookieArray.length; i++) {
        var temp = allCookieArray[i].trim();
        if (temp.indexOf(name) == 0)
            return temp.substring(name.length, temp.length);
    }
    return "noCookie";
}

function requestName() {
    var txt;
    var person = prompt("Hmm, Looks like you are new to this site. What is your name?", "");
    if (person == null || person == "" || person == " ") {
        sendSad();
    } else {
        document.cookie = "name=" + person;
    }
}

