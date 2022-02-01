document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline4 = new TimelineMax();
    timeline4
        .to('.section_4_01', 4, {
            autoAlpha: 0
        })
        .from('.section_4_02', 4, {
            autoAlpha: 0
        }, '-=4')
        .from('.section_4_03', 4, {
            autoAlpha: 0
        })
        .from('.section_4_04', 4, {
            autoAlpha: 0
        })

    let scene4 = new ScrollMagic.Scene({
            triggerElement: '.forth-section',
            duration: '100%',
            triggerHook: 0,
            offset: '200'
        })
        .setTween(timeline4)
        .setPin('.forth-section')
        .addTo(controller);
})