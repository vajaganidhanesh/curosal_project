let currentSlide = 1;
let totalSlides = 4;

function next(click)
{
    document.getElementById("slider").style.transition=".7s";
    currentSlide++;
    openSlide(currentSlide);
    if(currentSlide >totalSlides){
        setTimeout(function(){
            document.getElementById("slider").style.transition="0s";
            currentSlide=1;
            openSlide(1);
        },700)
    }
    if(click === true){
        clearInterval(slide);
        slide = setInterval(function(){next(false)},3000);
    }

}

let slide = setInterval(function(){next(false)},3000);

function prev(click)
{
    document.getElementById("slider").style.transition=".7s";
    currentSlide--;
    openSlide(currentSlide);
    if(currentSlide <1 ){
        setTimeout(function(){
            document.getElementById("slider").style.transition="0s";
            currentSlide=4;
            openSlide(4);
        },700)
    }
    if(click === true){
        clearInterval(slide);
        slide = setInterval(function(){next(false)},3000);
    }
}

function openSlide(slideNo)
{
    let margin = (slideNo)*100;
    document.getElementById("slider").style.marginLeft=-margin+"%";

    let indicators = document.getElementsByClassName("indicator");

    for(let i=0;i<indicators.length;i++)
    {
        if((i+1)===slideNo)
        {
            indicators[i].classList.add("activeIndicator");
        }
        else
        {
            indicators[i].classList.remove("activeIndicator");
        }
    }
}

function indicator(slideNo){

    currentSlide = slideNo
    document.getElementById("slider").style.transition=".7s";
    openSlide(currentSlide)

    clearInterval(slide);
    slide = setInterval(function(){next(false)},3000)
}

document.getElementById("nextPage").addEventListener("click",function(){
    next(true);
});
document.getElementById("prePage").addEventListener("click",function(){
    prev(true);
});
