let mytoggleControl= document.getElementById("myToggleControl");
let mcont = document.querySelector(".control");
let pagesView = document.getElementById("pageView");
var clickCount = 1;
let slider = document.getElementsByClassName("slider");
let pageCount = 10;
function changeValues(){

  if (clickCount  == 2){
    pagesView.innerHTML = getMyPageviewValue(slider[0].value)+ " Pageviews";
    document.getElementById("sliderValue").innerHTML = ((Number(slider[0].value))*(0.25)).toString();
    num=(Number(slider[0].value)/(0.25));
    num.toString();
    //month
  }
  //year
  else if (clickCount == 1){
    pagesView.innerHTML = getMyPageviewValue(slider[0].value)+ " Pageviews";
    document.getElementById("sliderValue").innerHTML = slider[0].value ;
  }
}

function toggleFunction()
{
  if (clickCount  == 1 ){
    clickCount =2;
    changeValues();
    document.getElementById("monthORyear").innerHTML = "$/year";
    mcont.style.setProperty("--toggleColor", "hsl(174, 86%, 45%)");
    mcont.style.setProperty("--toggleLeft","55%");
  }
  else if (clickCount == 2 ){
    clickCount =1;
    changeValues();
    document.getElementById("monthORyear").innerHTML = "$/month";
    mcont.style.setProperty("--toggleColor", "hsl(225, 20%, 60%)");
    mcont.style.setProperty("--toggleLeft","20%");
  }
}

mytoggleControl.addEventListener('click',toggleFunction);
mytoggleControl.addEventListener("touchStart", toggleFunction, false);
slider[0].addEventListener("touchStart",changeValues, false);
slider[0].addEventListener('click',changeValues,false);

$('input[type=range]').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;
  
  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
}).trigger('input');

function getMyPageviewValue(number)
{
  var myValue = [10,16,22,28,34,40];
  var myPageValues = ['10K','50K','100K','500K','1M','2M'];
  return(myPageValues[myValue.indexOf(Number(number))]);
}