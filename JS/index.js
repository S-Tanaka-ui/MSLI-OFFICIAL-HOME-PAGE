const newsimgList = [
    "img/newsimage1.jpeg",
    "img/newsimage2.jpeg",
    "img/newsimage3.jpeg",
]

for(var i = 0; i < newsimgList.length; i++){
    var slide = document.createElement("li");
    slide.innerHTML = "<img src='" + newsimgList[i] + "'>";
    document.querySelector(".slider_inner ul").appendChild(slide);
}