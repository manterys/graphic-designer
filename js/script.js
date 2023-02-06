// Loader
const appLoader = function() {

    const page = document.querySelector('.page');
    const overlay = document.querySelector('.overlay');
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', function() {
       
        loader.classList.add('loaded')

        loader.addEventListener('transitionend', function() {
            page.classList.add('loaded')
            loader.style.display = 'none'
            overlay.classList.add('anim')
        })
    })
}
appLoader()

// Animation
const appAnimation = () => {
    const animationTop = document.querySelectorAll('.animation-top')

    window.addEventListener('scroll', animation)

    function animation() {
    const triggerBottom = window.innerHeight / 1.1
    
    animationTop.forEach(animationTopEl => {
        const animTop = animationTopEl.getBoundingClientRect().top

        if(animTop < triggerBottom) {
            animationTopEl.classList.add('animationShow')
        } 
    })
    }
}
appAnimation()

// Move to
const appMoveTo = () => {
    const easeFunctions = {
        easeInQuad: function (t, b, c, d) {
            t /= d
        return c * t * t + b
    },
    easeOutQuad: function (t, b, c, d) {
        t /= d
        return -c * t* (t - 2) + b
    },
    easeInOutQuad: function (t, b, c, d) {
        t /= d/2
        if (t < 1) return c/2*t*t + b
        t--
        return -c/2 * (t*(t-2) - 1) + b
    },
    easeInOutCubic: function (t, b, c, d) {
        t /= d/2
        if (t < 1) return c/2*t*t*t + b
        t -= 2
        return c/2*(t*t*t + 2) + b
    }
    }

    const triggers = document.querySelectorAll('.smoothscroll')

    const moveTo = new MoveTo({
        tolerance: 88,
        duration: 1200,
        easing: 'easeInOutCubic',
        container: window
    }, easeFunctions)

    triggers.forEach(function(trigger) {
        moveTo.registerTrigger(trigger)
    })
}
appMoveTo()

// Glightbox
const appGlightbox = () => {
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    })
}
appGlightbox()