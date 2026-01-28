!function(e) {
    "use strict";
    var t = e(window);
    (t.on("load", function() {
        e("#preloader").fadeOut("slow", function() {
            e(this).remove();
        });
    }), t.on("resizeEnd", function() {
        e(".full_height").height(t.height());
    }), t.on("resize", function() {
        this.resizeTO && clearTimeout(this.resizeTO), this.resizeTO = setTimeout(function() {
            e(this).trigger("resizeEnd");
        }, 300);
    }).trigger("resize"), t.on("scroll", function() {
        t.scrollTop() > 20 ? e(".header-area").addClass("sticky") : e(".header-area").removeClass("sticky");
    }), e('[data-toggle="tooltip"]').tooltip(), e.fn.owlCarousel) && (e(".hero-slides").owlCarousel({
        items: 1,
        margin: 0,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 7e3,
        smartSpeed: 2e3,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    }), e(".hero-post-slide").owlCarousel({
        items: 3,
        margin: 30,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 3500,
        smartSpeed: 1e3,
        center: !0,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    }), e(".world-catagory-s1lider, .world-catagory-slider2").owlCarousel({
        items: 1,
        margin: 0,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 3500,
        smartSpeed: 2e3,
        nav: !0,
        navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ]
    }));
    e.fn.scrollUp && e.scrollUp({
        scrollSpeed: 1e3,
        easingType: "easeInOutQuart",
        scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
    }), e("a[href='#']").on("click", function(e) {
        e.preventDefault();
    });
    var s = document.getElementById("search"), o = document.getElementById("search-wrapper"), a = document.getElementById("close-icon");
    s.onfocus = function() {
        o.classList.add("search-expanded"), this.addEventListener("transitionend", function() {
            a.style.display = "block";
        });
    }, s.onblur = function() {
        o.classList.remove("search-expanded"), a.classList.add("closing"), this.addEventListener("transitionend", function() {
            a.classList.remove("closing"), a.style.display = "none";
        });
    }, a.onclick = function() {
        this.classList.add("closing"), document.activeElement.blur(), setTimeout(function() {
            a.classList.remove("closing");
        }, 1e3);
    };
}(jQuery);