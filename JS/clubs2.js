const pageButton = document.querySelector(".backHome");
pageButton.addEventListener("click", backHomepage);
function backHomepage(){
    window.location.href = "index.html"
}

const kirikaeButton = document.querySelector(".category_kirikae");
kirikaeButton.addEventListener("click", category_changer);
function category_changer(){
    window.location.href = "clubs.html"
}