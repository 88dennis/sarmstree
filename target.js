

const backBtn = document.querySelector('.back');
console.log(backBtn);
  

let lastNameVar = localStorage.getItem("sarmscode");

if (!lastNameVar) {
    // alert('no stored')
    location.replace("index.html");

} else {
    document.getElementById("result").innerHTML = localStorage.getItem("sarmscode");
}


backBtn.addEventListener('click', function(){
    // location.replace("tech.html")
    // window.location.href = "tech.html";
    localStorage.removeItem("sarmscode");
    location.replace("index.html")

    // alert('back');

});