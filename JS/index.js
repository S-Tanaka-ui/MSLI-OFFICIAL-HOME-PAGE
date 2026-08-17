const newsimgList = [
    "img/newsimage1.jpeg",
    "img/newsimage2.jpeg",
    "img/newsimage3.jpeg",
    "img/newsimage4.jpeg",
]

for(var i = 0; i < newsimgList.length; i++){
    var slide = document.createElement("li");
    slide.innerHTML = "<img src='" + newsimgList[i] + "'>";
    document.querySelector(".slider_inner ul").appendChild(slide);
}

const buttons = document.querySelectorAll(".news_slide");
const slider = document.querySelector(".slider_inner ul");
let position = 0;
const move = 260;

//＜
buttons[0].addEventListener("click", function(){
    position += move;
    if(position > 0){
        position = 0;
    }
    slider.style.transform = `translateX(${position}px)`;
});

//＞
buttons[1].addEventListener("click", function(){
    position -= move;
    if(position < -520){
        position = -520;
    }
    slider.style.transform = `translateX(${position}px)`;
});