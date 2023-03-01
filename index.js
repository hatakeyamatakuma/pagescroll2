$(function(){
  $(window).scroll(function(){
    $(".fadein").each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if(scroll > position - windowHeight + 200){
        $(this).addClass("active");
      }
    })
  })
})