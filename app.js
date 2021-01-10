function check(form) {
    console.log(form)
    if (form.userid.value == "myuserid" && form.pswrd.value == "mypswrd") {
        localStorage.setItem("sarmscode", "mypswrd");
        //window.open('target.html')
        //window.location.href = "target.html";
        location.replace("target.html")
    } else {
        alert("Error Password or Username")
    }
}

function cancelFunc(){
    localStorage.removeItem("sarmscode");

    location.replace("index.html")

}

