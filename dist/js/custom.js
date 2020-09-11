$(document).ready(function () {



  $(document).on('click', function (e) {
    var menu_opened = $('#collapsibleNavbar').hasClass('show');
    if (!$(e.target).closest('#collapsibleNavbar').length && !$(e.target).is('#collapsibleNavbar') && menu_opened === true) {
      $('#collapsibleNavbar').collapse('toggle');
    }
  });





  $('#search').on("click", (function (e) {
    $(".form-group").addClass("sb-search-open");
    e.stopPropagation()
  }));
  $(document).on("click", function (e) {
    if ($(e.target).is("#search") === false && $(".form-control").val().length == 0) {
      $(".form-group").removeClass("sb-search-open");
    }
  });
  $(".form-control-submit").click(function (e) {
    $(".form-control").each(function () {
      if ($(".form-control").val().length == 0) {
        e.preventDefault();
        $(this).css('border', '1px solid black;');
      }
    })
  })


})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "25px 0px";
    document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    document.getElementById("header").style.boxShadow = "black 0px -2px 10px 2px";
    document.getElementById("logo").style.width = "180px";
  } else {
    document.getElementById("navbar").style.padding = "50px 0px";
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header").style.boxShadow = "none";
    document.getElementById("logo").style.width = "200px";
  }
}

$('#myCarousel').carousel({
  interval: false
});

//scroll slides on swipe for touch enabled devices

$("#myCarousel").on("touchstart", function (event) {

  var yClick = event.originalEvent.touches[0].pageY;
  $(this).one("touchmove", function (event) {

    var yMove = event.originalEvent.touches[0].pageY;
    if (Math.floor(yClick - yMove) > 1) {
      $(".carousel").carousel('next');
    }
    else if (Math.floor(yClick - yMove) < -1) {
      $(".carousel").carousel('prev');
    }
  });
  $(".carousel").on("touchend", function () {
    $(this).off("touchmove");
  });
});




$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('#navbar a[href^="#"], #collapsibleNavbar a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('#navbar li.nav-item a, #collapsibleNavbar li.nav-item a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    
    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#navbar li.nav-item a, #collapsibleNavbar li.nav-item a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      // $('#navbar li.nav-item a, #collapsibleNavbar li.nav-item a').removeClass("active");
      currLink.addClass("active");
    }
    else {
      currLink.removeClass("active");
    }
  });
}











