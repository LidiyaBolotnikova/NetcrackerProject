$(document).ready(function () {
      var leftUIEl=$(document.getElementById("carousel-arrow-left"));
                     var rightUiEl = $(document.getElementById("carousel-arrow-right"));

var elementsList = $(".carousel-list");
	var elemWidth = 200,
        elemOffset = 25,
        elemTotalWidth = 225,
        currentLeftValue = 0,
        elementsCount = elementsList.find("li").length,
        listWidth=(elementsCount-4) * elemWidth,
        maximumOffset = 0;

	leftUIEl.click(function() {
		if (currentLeftValue != maximumOffset) {
			currentLeftValue += elemTotalWidth;
			elementsList.animate({ marginLeft : currentLeftValue + "px"}, 500);
		}
	});

    rightUiEl.click(function(){
		if (Math.abs(currentLeftValue) <= listWidth) {
			currentLeftValue -= elemTotalWidth;
			elementsList.animate({ marginLeft : currentLeftValue + "px"}, 500);
		}
	});
});
$(function(){
  $('.show-hide-btn').click(function(){
    $('.opinion-item:nth-child(n+5)').slideToggle('');
  });

});

/*$(".show-hide-btn").click(toggleButtonName);

 function toggleButtonName (elem){
    var elemText = $(elem.target)[0].innerText;
    const showMoreText = 'show more';
    const showLessText = 'show less';

    if (elemText == showLessText) {
        $(elem.target)[0].innerText = showMoreText;
    }else{
        $(elem.target)[0].innerText = showLessText;
    }
*/