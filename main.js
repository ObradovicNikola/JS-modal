let magicModal = document.getElementById("magicModal");
let btn = document.getElementById("magicButton");
let close = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    magicModal.style.display = "block";
}

close.onclick = function () {
    magicModal.style.display = "none";
}

window.onclick = function (e) {
    if(e.target == magicModal){
        magicModal.style.display = "none";
    }
}