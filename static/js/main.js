$(function() {

    var wind = $(window);

    // wow = new WOW({
    //     boxClass: 'wow',
    //     animateClass: 'animated',
    //     offset: 200,
    //     mobile: false,
    //     live: false
    // });
    // wow.init();


    // -------- dark_light themes --------
    $("#dark-icon").on("click", function() {
        $("body").addClass("dark-theme");
        localStorage["theme"] = "dark"
    })

    $("#light-icon").on("click", function() {
        $("body").removeClass("dark-theme");
        localStorage["theme"] = "ligth"
    })


    // -------- dark_light themes --------
    $(".subs").on("click", function() {
        $(".nav-subs-card").addClass("show");
    })

    $(".nav-subs-card .cls").on("click", function() {
        $(".nav-subs-card").removeClass("show");
    })



    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('.to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    /* ===============================  Preloader page  =============================== */

    // paceOptions = {
    //     ajax: true,
    //     document: true,
    //     eventLag: false
    // };

    // Pace.on('done', function () {
    //     $('#preloader').addClass("isdone");
    //     $('.loading').addClass("isdone");
    // });




    // -------- counter --------
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });

    // -------- searching effect --------
    $(".search-btn-style1 , .search-btn-style2").on("click", function() {
        $(".nav-search-style1 , .nav-search-style2").slideToggle();
        $(this).children(".sOpen-btn").fadeToggle();
        $(this).children(".sClose-btn").fadeToggle();
    })


    // -------- darkLight-btn --------

    $(".darkLight-btn").on("click", ".icon", function() {
        $(this).addClass("active").siblings().removeClass("active");
    })


    // -------- posts-tabs-style4 --------

    $('.tc-posts-tabs-style4 .tc-tabs-head a').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

    var containerEl = document.querySelector('.tc-posts-tabs-style4 .tc-tabs-body');
    var mixer = mixitup(containerEl);

});

$(document).ready(function() {

    // --------- fav btn ---------
    $(".fav-btn").on("click", function() {
        $(this).toggleClass("active");
    })

    // ------------ increase products -----------
    $(".qt-plus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    });

    $(".qt-minus").click(function() {

        child = $(this).parent().children(".qt");

        if (parseInt(child.html()) > 1) {
            child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");

    });
});

// ---------- hover dropdown -----------
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";


$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});





// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ breaking-news slider -----------
    var swiper = new Swiper('.tc-breaking-news-style1 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-slider-style1 .swiper-button-next',
            prevEl: '.tc-slider-style1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ breaking-news slider -----------
    var swiper = new Swiper('.tc-breaking-news-slider4 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-breaking-news-slider4 .swiper-button-next',
            prevEl: '.tc-breaking-news-slider4 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-trends-news-slider1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-trends-news-slider1 .swiper-button-next',
            prevEl: '.tc-trends-news-slider1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-trends-news-slider3 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-trends-news-slider3 .swiper-button-next',
            prevEl: '.tc-trends-news-slider3 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });

    // ------------ breaking-news slider -----------
    var swiper = new Swiper('.tc-google-stories-slider1 .swiper-container', {
        slidesPerView: 8,
        spaceBetween: 20,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-google-stories-slider1 .swiper-button-next',
            prevEl: '.tc-google-stories-slider1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 8,
            }
        }
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-video-slider1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-video-slider1 .swiper-button-next',
            prevEl: '.tc-video-slider1 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-header-slider2 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-header-slider2 .swiper-button-next',
            prevEl: '.tc-header-slider2 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ columnist slider1 -----------
    var swiper = new Swiper('.columnist-slider1 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.columnist-slider1 .swiper-button-next',
            prevEl: '.columnist-slider1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ columnist slider -----------
    var swiper = new Swiper('.columnist-slider2 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.columnist-slider2 .swiper-button-next',
            prevEl: '.columnist-slider2 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-trends-news-slider2 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".tc-trends-news-slider2 .swiper-pagination",
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ popular-topics slider -----------
    var swiper = new Swiper('.tc-popular-topics-slider2 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-popular-topics-slider2 .swiper-button-next',
            prevEl: '.tc-popular-topics-slider2 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            }
        }
    });

    // ------------ columnist slider -----------
    var swiper = new Swiper('.tc-hot-videos-slider2 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-hot-videos-slider2 .swiper-button-next',
            prevEl: '.tc-hot-videos-slider2 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ home3 header slider -----------
    var swiper = new Swiper('.tc-header-slider-style3 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        speed: 1000,
        pagination: {
            el: ".tc-header-slider-style3 .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-header-slider-style3 .swiper-button-next',
            prevEl: '.tc-header-slider-style3 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ popular-categories slider -----------
    var swiper = new Swiper('.tc-popular-categories-slider3 .swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-popular-categories-slider3 .swiper-button-next',
            prevEl: '.tc-popular-categories-slider3 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            }
        }
    });

    // ------------ editor’s-choice slider -----------
    var swiper = new Swiper('.tc-editors-choice-slider3 .swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-editors-choice-slider3 .swiper-button-next',
            prevEl: '.tc-editors-choice-slider3 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ tc-latest-posts-slider3 -----------
    var swiper = new Swiper('.tc-latest-posts-slider3 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-latest-posts-slider3 .swiper-button-next',
            prevEl: '.tc-latest-posts-slider3 .swiper-button-prev',
        },
        scrollbar: {
            el: '.tc-latest-posts-slider3 .swiper-scrollbar',
            hide: false,
            clickable: true,
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ tc-editors-pick-slider -----------
    var swiper = new Swiper('.tc-editors-pick-slider .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 60,
        speed: 1000,
        pagination: {
            el: ".tc-editors-pick-slider .swiper-pagination",
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ tc-editors-pick-slider -----------
    var swiper = new Swiper('.tc-breaking-news-slider5 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-breaking-news-style5 .swiper-button-next',
            prevEl: '.tc-breaking-news-style5 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ tc-editors-pick-slider -----------
    var swiper = new Swiper('.tc-breaking-news-slider6 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-breaking-news-style6 .swiper-button-next',
            prevEl: '.tc-breaking-news-style6 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ home5 overlay slider -----------
    var swiper = new Swiper('.tc-post-overlay-slider5 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-post-overlay-slider5 .swiper-button-next',
            prevEl: '.tc-post-overlay-slider5 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ home5 videos slider -----------
    var swiper = new Swiper('.tc-post-videos-slider5 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-post-videos-slider5 .swiper-button-next',
            prevEl: '.tc-post-videos-slider5 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-trends-news-slider6 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-trends-news-slider6 .swiper-button-next',
            prevEl: '.tc-trends-news-slider6 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-latest-posts-slider4 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 50,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: '.tc-latest-posts-slider4 .swiper-button-next',
            prevEl: '.tc-latest-posts-slider4 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ results-slider1 slider -----------
    var swiper = new Swiper('.results-slider1 .swiper-container', {
        // direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.results-slider1 .swiper-button-next',
            prevEl: '.results-slider1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
    });

    // ------------ tc-featured-news slider8 -----------
    var swiper = new Swiper('.tc-featured-news-slider8 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 10,
        speed: 1000,
        pagination: {
            el: ".tc-featured-news-slider8 .swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: '.tc-featured-news-slider8 .swiper-button-next',
            prevEl: '.tc-featured-news-slider8 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ tc-featured-news slider8 -----------
    var swiper = new Swiper('.tc-breaking-news-slider8 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".tc-breaking-news-slider8 .swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: '.tc-breaking-news-slider8 .swiper-button-next',
            prevEl: '.tc-breaking-news-slider8 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.columnist-slider8 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 80,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.columnist-slider8 .swiper-button-next',
            prevEl: '.columnist-slider8 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-sponsored-slider8 .swiper-container', {
        // slidesPerView: 2,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-sponsored-slider8 .swiper-button-next',
            prevEl: '.tc-sponsored-slider8 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 7000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-popular-posts-blog-slider9 .swiper-container', {
        // slidesPerView: 2,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-popular-posts-blog-slider9 .swiper-button-next',
            prevEl: '.tc-popular-posts-blog-slider9 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 7000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-next-prev-post-slider .swiper-container', {
        // slidesPerView: 2,
        spaceBetween: 60,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-next-prev-post-slider .swiper-button-next',
            prevEl: '.tc-next-prev-post-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: false,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-single-post-slider-style1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: '.tc-single-post-slider-style1 .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.tc-single-post-slider-style1 .swiper-button-next',
            prevEl: '.tc-single-post-slider-style1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-contact-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: '.tc-contact-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-contact-slider .swiper-button-next',
            prevEl: '.tc-contact-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-breaking-news-slider2 .swiper-container', {
        // slidesPerView: 2,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: true,
        loop: false,
        scrollbar: {
            el: '.tc-breaking-news-slider2 .swiper-scrollbar',
            hide: false,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // ------------ gallery-thumbs-slider -----------
    var galleryThumbs = new Swiper('.product .gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    });
    var galleryTop = new Swiper('.product .gallery-top', {
        spaceBetween: 10,
        navigation: false,
        thumbs: {
            swiper: galleryThumbs
        }
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.related-products-slider .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.related-products-slider .swiper-button-next',
            prevEl: '.related-products-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.tc-google-stories-slider10 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-google-stories-slider10 .swiper-button-next',
            prevEl: '.tc-google-stories-slider10 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // ------------ tc-about-history-slider -----------
    var swiper = new Swiper('.tc-about-history-slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 60,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-about-history .swiper-button-next',
            prevEl: '.tc-about-history .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.tc-trends-news-slider10 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-trends-news-slider10 .swiper-button-next',
            prevEl: '.tc-trends-news-slider10 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            480: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-header-slider10 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-header-slider10 .swiper-button-next',
            prevEl: '.tc-header-slider10 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-hot-videos-slider11 .swiper-container', {
        slidesPerView: 1,
        effect: "fade",
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-hot-videos-slider11 .swiper-button-next',
            prevEl: '.tc-hot-videos-slider11 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });


});



// ------------ loader -----------
//$(window).on("load", function() {
//    $(".loading-page").fadeOut(1000);
//});


// ------------ working in desktop -----------
if ($(window).width() > 1200) {
    $('.parallaxie').parallaxie({});
}



if (localStorage["theme"] == "ligth"){

    $("body").removeClass("dark-theme");
    $(".nav-subs-card").removeClass("show");
    $("#light-icon").addClass("active");
    $("#dark-icon").removeClass("active");

}

var survey = `
	    <div class="text color-666">
			Awesome, I’m satisfied!
	    </div>
		<div style="margin-bottom: 7px;font-size: 12px;">
		  <div class="w3-container w3-red w3-center" style="width:70%">70%</div>
		</div>     
	    <div class="text color-666">
			Normal 
	    </div>
		<div style="margin-bottom: 7px;font-size: 12px;">
		  <div class="w3-container w3-red w3-center" style="width:27%">27%</div>
		</div> 			
	    <div class="text color-666">
			Bad! Need improve more
	    </div>
	    </label>
		<div style="margin-bottom: 7px;font-size: 12px;">
		  <div class="w3-container w3-red w3-center" style="width:3%">3%</div>
		</div>
	`


function vote(){
	var peoples = $(".tc-widget-survey-style1 .pl-num span").text();
	localStorage["peoples"] = parseInt(peoples) + 1;
	$(".tc-widget-survey-style1 .pl-num span").html(localStorage["peoples"]);		
	localStorage["vote"] = 1;
	$(".tc-widget-survey-style1 .ansr-content").html(survey);
	$(".tc-widget-survey-style1 .btns").hide();
	//console.log("Vote")
}

// start-image-redactor

if (!window.Clipboard) {
    var pasteCatcher = document.createElement("div");

    pasteCatcher.setAttribute("contenteditable", "");

    pasteCatcher.style.display = "none";
    document.body.appendChild(pasteCatcher);

    pasteCatcher.focus();
    document.addEventListener("click", function() { pasteCatcher.focus(); });
}
window.addEventListener("paste", pasteHandler);

function pasteHandler(e) {
    if (e.clipboardData) {
        var items = e.clipboardData.items;
        if (items) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") !== -1) {
                    var blob = items[i].getAsFile();
                    var URLObj = window.URL || window.webkitURL;
                    var source = URLObj.createObjectURL(blob);
                    createImage(source);
                }
            }
        }
        } else {
        setTimeout(checkInput, 1);
    }
}

function checkInput() {
    var child = pasteCatcher.childNodes[0];
    pasteCatcher.innerHTML = "";
    if (child) {
        if (child.tagName === "IMG") {
            createImage(child.src);
        }
    }
}


function createImage(source) {
    var pastedImage = new Image();
    pastedImage.onload = function() {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        const newWidth = 1170;
        const newHeight = pastedImage.height * (newWidth / pastedImage.width);
        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx.drawImage(pastedImage, 0, 0, newWidth, newHeight);
        var resizedImage = canvas.toDataURL();
        document.getElementById("contenteditable").src = resizedImage;
        document.getElementById("base64img").value = resizedImage;
        let imagesrc = document.getElementById("contenteditable").src
        $("#base64").css("background","url('" + imagesrc + "') top left no-repeat");
        $("#base64").css("height","" + newHeight + "px");
        $('#fullsize').html("Roll Up");
        $('#fullsize').attr("id", "rollup");

    }
    pastedImage.src = source;
}

function convertToBase64() {
    var fileInput = document.getElementById('imageInput');
    var file = fileInput.files[0];

    var reader = new FileReader();
    reader.onload = function(event) {
        var base64String = event.target.result;
        createImage(base64String);
    };
    reader.readAsDataURL(file);
}

// end-image-redactor


//--- START Ready
$(document).ready(function () {

    let imagesrc = document.getElementById("contenteditable").src
    $("#base64").css("background","url('" + imagesrc + "') center left no-repeat");

    $(document).on('change', ".input-file-span input[type=file]", function () {
	    let file = this.files[0];
	    $(this).next().html(file.name);
    });

    $(document).on('click', "#fullsize", function () {
        let height = $('#contenteditable').height();
        $('#base64').height(height - 40);
        $('#fullsize').html("Roll Up");
        $('#fullsize').attr("id", "rollup");
        $('#rollup:focus').css("box-shadow", "none");
    });

    $(document).on('click', "#rollup", function () {
        $('#base64').height(210);
        $('#rollup').html("Full Size");
        $('#rollup').attr("id", "fullsize");
        $('#fullsize:focus').css("box-shadow", "none");
    });

});
//--- END Ready

	//localStorage["vote"] = 0
	var i = 0;

	$('#temp').html(localStorage["temp"]);
	$('#city').html(localStorage["city"]);
	$('#weather').html(localStorage["weather"]);
	//$('#icon i').hide();
	//$('#icon').append(localStorage["icon"]);


    if (localStorage["vote"] == 1){
		$(".tc-widget-survey-style1 .ansr-content").html(survey);
		$(".tc-widget-survey-style1 .btns").hide();
		$(".tc-widget-survey-style1 .pl-num span").html(localStorage["peoples"]);
	}

setInterval(function() {

	temp = $('#ww_732d3d52f15bd > div > div.ww_current > div.ww_temp').text();
	city = $('#ww_732d3d52f15bd > div > div.ww_name').text();
	icon = $('#ww_732d3d52f15bd > div > div.ww_current > div.ww_icon > svg').clone();
	weather = $('#ww_732d3d52f15bd > div > div.ww_current > div.ww_cond').text();

	if (localStorage["temp"] != temp && temp.trim() != ""){
		localStorage["temp"] = temp;
		$('#temp').html(temp.trim());
	}
	if (localStorage["city"] != city && city.trim() != ""){
		localStorage["city"] = city;
		$('#city').html(city);
	}
	if (localStorage["weather"] != weather && weather.trim() != ""){
		localStorage["weather"] = weather;
		$('#weather').html(weather);
	}
	if (localStorage["icon"] != icon){
	localStorage["icon"] = icon;
	i = 0;
	}
	if (i < 1 && city.trim() != ""){
	$('#icon i').hide();
	$('#icon').append(icon);
	i = 1;
	}
	color = $('#icon i').css("color");
	$('#icon svg').css("fill",color);


}, 500);
