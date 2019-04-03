$('.detailing__slider').slick({
    infinite: true,
    dots: false,
    arrows:false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  });

  var acc = document.getElementsByClassName("accordeon");
  var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}