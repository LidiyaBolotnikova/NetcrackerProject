$(document).ready(function () {
      var leftUIEl=$(document.getElementById("carousel-arrow-left"));
                     var rightUiEl = $(document.getElementById("carousel-arrow-right"));

var elementsList = $(".carousel-list");
	var elemWidth = 200,
        elemOffset = 20,
        elemTotalWidth = 225,
        currentLeftValue = 0,
        elementsCount = elementsList.find("li").length,
        listWidth=(elementsCount-4) * elemWidth,
        maximumOffset = 0;

	leftUIEl.click(function() {
		if (currentLeftValue != maximumOffset) {
			currentLeftValue += listWidth;
			elementsList.animate({ marginLeft : currentLeftValue + "px"}, 500);
		}
	});

    rightUiEl.click(function(){
		if (Math.abs(currentLeftValue) <= listWidth) {
			currentLeftValue -= listWidth;
			elementsList.animate({ marginLeft : currentLeftValue + "px"}, 500);
		}
	});


    $(".show-hide-btn").click(toggleButtonName);

     function toggleButtonName (elem){
        var elemText = $(elem.target)[0].innerText;
        const showMoreText = 'show more';
        const showLessText = 'show less';

        if (elemText == showLessText) {
            $(elem.target)[0].innerText = showMoreText;
        }else{
            $(elem.target)[0].innerText = showLessText;
        }
    }

    $('.show-hide-btn').click(function(){
        $('.opinion-item:nth-child(n+5)').slideToggle('');
    });

 var left=$(document.getElementById("popup-carousel-arrow-left"));
 var right = $(document.getElementById("popup-carousel-arrow-right"));
var elementsList1 = $(".popup-carousel-list1");
	var elemWidth1 = 225,
        elemOffset1 = 25,
        elemTotalWidth1 = 225,
        currentLeftValue1 = 0,
        elementsCount1 = elementsList1.find("li").length,
        listWidth1=(elementsCount1-2) * elemWidth1,
        maximumOffset1 = 0;


	left.click(function() {
		if (currentLeftValue1 != maximumOffset1) {
			currentLeftValue1 += listWidth1;
			elementsList1.animate({ marginLeft : currentLeftValue1 + "px"}, 500);
		}
		else {
                if (currentLeftValue1 = 0){
                currentLeftValue1 -= listWidth1;
                elementsList1.animate({ marginRight : currentLeftValue1 + "px"}, 500);
				}
		}
		}

	);
    right.click(function(){
		if (Math.abs(currentLeftValue1) <= listWidth1) {
			currentLeftValue1 -= listWidth1;
			elementsList1.animate({ marginLeft : currentLeftValue1 + "px"}, 500);
		}
		else  {
        		if (Math.abs(currentLeftValue1)>listWidth1){
        		currentLeftValue1=0;
        		elementsList1.animate({ marginLeft : currentLeftValue1 + "px"}, 500);
        			}
	}
	});


var left1=$(document.getElementById("popup-carousel-arrow-left1"));
 var right1 = $(document.getElementById("popup-carousel-arrow-right1"));
var elementsList2 = $(".popup-carousel-list2");
	var elemWidth2 = 225,
        elemOffset2 = 25,
        elemTotalWidth2 = 225,
        currentLeftValue2 = 0,
        elementsCount2 = elementsList2.find("li").length,
        listWidth2=(elementsCount2-2) * elemWidth2,
        maximumOffset2 = 0;


	left1.click(function() {
		if (currentLeftValue2 != maximumOffset2) {
			currentLeftValue2 += listWidth2;
			elementsList2.animate({ marginLeft : currentLeftValue2 + "px"}, 500);
		}
	});

    right1.click(function(){
		if (Math.abs(currentLeftValue2) <= listWidth2) {
			currentLeftValue2 -= listWidth2;
			elementsList2.animate({ marginLeft : currentLeftValue2 + "px"}, 500);
		}
		else  {
                		if (Math.abs(currentLeftValue2)>listWidth2){
                		currentLeftValue2=0;
                		elementsList2.animate({ marginLeft : currentLeftValue2 + "px"}, 500);
                			}
        	}
	});

var left2=$(document.getElementById("popup-carousel-arrow-left2"));
 var right2 = $(document.getElementById("popup-carousel-arrow-right2"));
var elementsList3 = $(".popup-carousel-list3");
	var elemWidth3 = 225,
        elemOffset3 = 25,
        elemTotalWidth3 = 225,
        currentLeftValue3 = 0,
        elementsCount3 = elementsList3.find("li").length,
        listWidth3=(elementsCount3-2) * elemWidth3,
        maximumOffset3 = 0;


	left2.click(function() {
		if (currentLeftValue3 != maximumOffset3) {
			currentLeftValue3 += listWidth3;
			elementsList3.animate({ marginLeft : currentLeftValue3 + "px"}, 500);
		}
	});

    right2.click(function(){
		if (Math.abs(currentLeftValue3) <= listWidth3) {
			currentLeftValue3 -= listWidth3;
			elementsList3.animate({ marginLeft : currentLeftValue3 + "px"}, 500);
		}
		else  {
                		if (Math.abs(currentLeftValue3)>listWidth3){
                		currentLeftValue3=0;
                		elementsList3.animate({ marginLeft : currentLeftValue3 + "px"}, 500);
                			}
        	}
	});

var left3=$(document.getElementById("popup-carousel-arrow-left3"));
 var right3 = $(document.getElementById("popup-carousel-arrow-right3"));
var elementsList4 = $(".popup-carousel-list4");
	var elemWidth4 = 225,
        elemOffset4 = 25,
        elemTotalWidth4 = 225,
        currentLeftValue4 = 0,
        elementsCount4 = elementsList4.find("li").length,
        listWidth4=(elementsCount4-2) * elemWidth4,
        maximumOffset4 = 0;
	left3.click(function() {
		if (currentLeftValue4 != maximumOffset4) {
			currentLeftValue4 += listWidth4;
			elementsList4.animate({ marginLeft : currentLeftValue4 + "px"}, 500);
		}
	});

    right3.click(function(){
		if (Math.abs(currentLeftValue4) <= listWidth4) {
			currentLeftValue4 -= listWidth4;
			elementsList4.animate({ marginLeft : currentLeftValue4 + "px"}, 500);
		}
		else  {
                		if (Math.abs(currentLeftValue4)>listWidth4){
                		currentLeftValue4=0;
                		elementsList4.animate({ marginLeft : currentLeftValue4 + "px"}, 500);
                			}
        	}
	});


var left4=$(document.getElementById("popup-carousel-arrow-left4"));
 var right4 = $(document.getElementById("popup-carousel-arrow-right4"));
var elementsList5 = $(".popup-carousel-list5");
	var elemWidth5 = 225,
        elemOffset5 = 25,
        elemTotalWidth5 = 225,
        currentLeftValue5 = 0,
        elementsCount5 = elementsList5.find("li").length,
        listWidth5=(elementsCount5-2) * elemWidth5,
        maximumOffset5 = 0;


	left4.click(function() {
		if (currentLeftValue5 != maximumOffset5) {
			currentLeftValue5 += listWidth5;
			elementsList5.animate({ marginLeft : currentLeftValue5 + "px"}, 500);
		}
	});

    right4.click(function(){
		if (Math.abs(currentLeftValue5) <= listWidth5) {
			currentLeftValue5 -= listWidth5;
			elementsList5.animate({ marginLeft : currentLeftValue5 + "px"}, 500);
		}
		else  {
                		if (Math.abs(currentLeftValue5)>listWidth5){
                		currentLeftValue5=0;
                		elementsList5.animate({ marginLeft : currentLeftValue5 + "px"}, 500);
                			}
        	}
	});


var left5=$(document.getElementById("popup-carousel-arrow-left5"));
 var right5 = $(document.getElementById("popup-carousel-arrow-right5"));
var elementsList6 = $(".popup-carousel-list6");
	var elemWidth6 = 225,
        elemOffset6 = 25,
        elemTotalWidth6 = 225,
        currentLeftValue6 = 0,
        elementsCount6 = elementsList6.find("li").length,
        listWidth6=(elementsCount6-2) * elemWidth6,
        maximumOffset6 = 0;


	left5.click(function() {
		if (currentLeftValue6 != maximumOffset6) {
			currentLeftValue6 += listWidth6;
			elementsList6.animate({ marginLeft : currentLeftValue6 + "px"}, 500);
		}
	});

    right5.click(function(){
		if (Math.abs(currentLeftValue6) <= listWidth6) {
			currentLeftValue6 -= listWidth6;
			elementsList6.animate({ marginLeft : currentLeftValue6 + "px"}, 500);
		}
		else  {
                		if (Math.abs(currentLeftValue6)>listWidth6){
                		currentLeftValue6=0;
                		elementsList6.animate({ marginLeft : currentLeftValue6 + "px"}, 500);
                			}
        	}
	});
var left6=$(document.getElementById("popup-carousel-arrow-left6"));
 var right6 = $(document.getElementById("popup-carousel-arrow-right6"));
var elementsList7 = $(".popup-carousel-list7");
	var elemWidth7 = 225,
        elemOffset7 = 25,
        elemTotalWidth7 = 225,
        currentLeftValue7 = 0,
        elementsCount7 = elementsList7.find("li").length,
        listWidth7=(elementsCount7-2) * elemWidth7,
        maximumOffset7 = 0;

	left6.click(function() {
		if (currentLeftValue7 != maximumOffset7) {
			currentLeftValue7 += listWidth7;
			elementsList7.animate({ marginLeft : currentLeftValue7 + "px"}, 500);
		}
	});

    right6.click(function(){
		if (Math.abs(currentLeftValue7) <= listWidth7) {
			currentLeftValue7 -= listWidth7;
			elementsList7.animate({ marginLeft : currentLeftValue7 + "px"}, 500);
		}
		else  {
                		if (Math.abs(currentLeftValue7)>listWidth7){
                		currentLeftValue7=0;
                		elementsList7.animate({ marginLeft : currentLeftValue7 + "px"}, 500);
                			}
        	}
	});


var left7=$(document.getElementById("popup-carousel-arrow-left7"));
 var right7 = $(document.getElementById("popup-carousel-arrow-right7"));
var elementsList8 = $(".popup-carousel-list8");
	var elemWidth8 = 225,
        elemOffset8 = 25,
        elemTotalWidth8 = 225,
        currentLeftValue8 = 0,
        elementsCount8 = elementsList8.find("li").length,
        listWidth8=(elementsCount8-2) * elemWidth8,
        maximumOffset8 = 0;


	left7.click(function() {
		if (currentLeftValue8 != maximumOffset8) {
			currentLeftValue8 += listWidth8;
			elementsList8.animate({ marginLeft : currentLeftValue8 + "px"}, 500);
		}
	});

    right7.click(function(){
		if (Math.abs(currentLeftValue8) <= listWidth8) {
			currentLeftValue8 -= listWidth8;
			elementsList8.animate({ marginLeft : currentLeftValue8 + "px"}, 500);
		}
		else  {
                		if (Math.abs(currentLeftValue8)>listWidth8){
                		currentLeftValue8=0;
                		elementsList8.animate({ marginLeft : currentLeftValue8 + "px"}, 500);
                			}
        	}
	});

function OffScroll () {
var winScrollTop = $(window).scrollTop();
$(window).bind('scroll',function () {
  $(window).scrollTop(winScrollTop);
});}

$('.gallery-line-image').click(openModal);
function openModal(element){
var image = $(element.target);
//var imagesList =$('.gallery-line').find(".gallery-line-image");
//var popupsList = $('.popups-list').find(".modal");
/*for(i=0;i<imagesList.length;i++)
{
  if (imagesList[i] == image[0])
  {
     popupsList[i].style.display='block';
     return;
  }
}
}*/
image.find(".modal")[0].style.display='block';
OffScroll ();
};

$('.closess').click(function()
{
    $(this).parent().parent().hide();
    $(window).unbind('scroll');
  });





});