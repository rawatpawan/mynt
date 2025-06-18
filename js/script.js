$(document).ready(function() {

  new WOW().init();

  var counted = false;
  $(window).on("scroll", function () {
    var oTop = $(".counter").offset().top - window.innerHeight;
    if (!counted && $(window).scrollTop() > oTop) {
      var maxDuration = 2000; // Sab counters ko 2 seconds mein complete karne ke liye

      $(".count-number").each(function () {
        var $this = $(this),
            countTo = parseInt($this.attr("data-to"));
        
        // Har counter ke liye step size nikalte hain
        var stepTime = maxDuration / countTo;

        $({ countNum: 0 }).animate(
          { countNum: countTo },
          {
            duration: maxDuration,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          }
        );
      });
      counted = true;
    }
  });

  // popup logic

   if (localStorage.getItem("popupAccepted") === "true") {
      $("#popup-overlay").hide();
    } else {
      $("#popup-overlay").show();
    }

    $(".yes-btn").click(function () {
      localStorage.setItem("popupAccepted", "true");
      $("#popup-overlay").fadeOut();
    });

    $(".no-btn").click(function () {
      window.location.href = "https://www.google.com";
    });

    // Prevent user from closing popup with Esc or clicking outside
    $(window).on('keydown', function (e) {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    });

    $(document).on('click', function (e) {
      if (!$(e.target).closest("#popup-box").length) {
        e.stopPropagation();
      }
    });





    // THiS JS IS USED OF SHOW AND HIDE MOBILE MENU

    $('#trigger-overlay').on('click', function(){
        $(".overlay").addClass('open');	
    });
    $('.overlay-close').on('click', function(){
        $(".overlay").removeClass('open');	
    });


    // carousel with custom nav
    $('.firstcarousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        "<img src='images/icons/leftarrow.png' alt='Left Arrow'>",
        "<img src='images/icons/rightarrow.png' alt='Right Arrow'>"
      ],
      autoplay:true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 4,
        },
      },
    });

    $('.first').owlCarousel({
        loop:true,
        // margin:10,
        nav:true,
        navText :false,
        dots:false,
        autoplay:true,
        autoplayTimeout: 4000,
        smartSpeed: 2000, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});