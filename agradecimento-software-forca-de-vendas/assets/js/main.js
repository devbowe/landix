$(document).ready(function(){
    $('.carousel').slick({
        infinite: false,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                centerMode: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
          ]
    });
});

// Show Form mobile
function showForm(formElement){
    $(formElement).addClass('show');
}

function closeForm(formElement){
    $(formElement).removeClass('show');
}