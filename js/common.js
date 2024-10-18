'use strict';

loading();
function loading() {
    // 1.5초 후 로딩창 사라짐
    const roundLoding = document.querySelector('.loading');
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    const loading = document.querySelector('.loading_page');
    const bg = document.querySelectorAll('.bg');
    const plane = document.querySelector('.plane');
    setTimeout(() => {
        roundLoding.style.opacity = '0';
        setTimeout(() => {
            text1.style.opacity = '1';
            text1.style.transform = 'translate(-50%, -50%)';
            setTimeout(() => {
                text1.style.opacity = '0';
                loading.style.backgroundColor = 'transparent';
                setTimeout(() => {
                    text2.style.opacity = '1';
                    text2.style.transform = 'translate(-50%, -50%)';
                    setTimeout(() => {
                        text2.style.opacity = '0';
                        setTimeout(() => {
                            bg.forEach((a) => {
                                a.style.zIndex = '-1';
                            });
                            setTimeout(() => {
                                loading.style.display = 'none';
                                plane.style.opacity = 1;
                            }, 300);
                        }, 200);
                    }, 300);
                }, 1000);
            }, 300);
        }, 1000);
    }, 1500);
}

homePage();
function homePage() {
    const header = document.querySelector('header');
    const plane = document.querySelector('.plane');
    const worldFrame = document.querySelector('.home .world_frame');
    const world = document.querySelector('.home .world_frame .world');
    const castle = document.querySelector('.home .world .castle');
    const cloud = document.querySelector('.home .world .cloud');
    const portfolio = document.querySelector('.home .text_wrap .portfolio');
    const subText = document.querySelector('.home .sub_text');
    const deco = document.querySelector('.home .deco');

    plane.addEventListener('click', () => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
        plane.style.opacity = 0;
        worldFrame.classList.add('windowFrame');
        world.classList.add('windowFrame');
        castle.style.opacity = '1';
        castle.style.right = '-29%';
        cloud.style.opacity = '1';
        subText.style.opacity = '1';
        subText.style.transform = 'translateY(0)';
        portfolio.style.opacity = '1';
        portfolio.style.transform = 'translateY(0)';
        deco.style.opacity = '1';
        //register the plugin (just once)
        gsap.registerPlugin(MotionPathPlugin);

        gsap.to('#plane1', {
            duration: 3,
            repeat: false,
            yoyo: false,
            ease: 'power1.inOut',
            motionPath: {
                path: '#path',
                align: '#path',
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
            },
        });
    });

    const gnb = document.querySelector('.gnb');
    const gnbAbout = document.querySelector('.gnb .about a');
    const plane1 = document.querySelector('#plane1');
    const h1 = document.querySelector('h1');
    const about = document.querySelector('#about');
    const aboutTextWrap = document.querySelector('.about .text_wrap');
    const aboutH3 = document.querySelector('.about .text_wrap h3');
    const aboutP = document.querySelector('.about .text_wrap p');
    const aboutLine = document.querySelector('.about .text_wrap .line');
    plane1.addEventListener('click', () => {
        gnb.classList.add('right');
        h1.style.display = 'none';
        worldFrame.classList.remove('windowFrame');
        world.classList.remove('windowFrame');

        setTimeout(() => {
            about.style.display = 'block';
            gnbAbout.style.padding = '5px 20px';
            gnbAbout.style.backgroundColor = 'rgb(255, 255, 255, 0.1)';
            aboutTextWrap.style.opacity = 1;
            aboutH3.style.opacity = 1;
            aboutH3.style.transform = 'translateY(0)';
            aboutP.style.opacity = 1;
            aboutP.style.transform = 'translateY(0)';
            aboutLine.style.opacity = 1;
            aboutLine.style.transform = 'translateY(0)';
            castle.style.right = '-7%';

            // 기본으로 돌려놓기
            cloud.style.opacity = '0';
            subText.style.opacity = '0';
            subText.style.transform = 'translateY(-50%)';
            portfolio.style.opacity = '0';
            portfolio.style.transform = 'translateY(-50%)';
            deco.style.opacity = '0';
        }, 300);
    });
}
