$(function(){
  $(window).scroll(function(){
    $(".fadein").each(function(){
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if(scroll > position - windowHeight + 200){
        $(this).addClass("active");
      }
    })
  })
})