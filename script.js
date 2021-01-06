<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>

$(document).ready(function() {
    // Scroll

    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // Typing Animation

    var typed = new Typed(".typing", {
        strings: ["YouTuber", "developer", "freelancer", "Discord bot programmer", "Roblox game creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber.", "developer.", "freelancer.", "Discord bot programmer.", "Roblox game creator."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Toggle Navbar

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Owl Carousel

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});