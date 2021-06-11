import React, { useEffect } from 'react';
import { gsap } from 'gsap'

const Intro = (props) => {

    useEffect(() => {
        console.log('.entered');


        gsap.timeline()

            .set('.intro__title', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', duration: 2, ease: 'power4.inOut' })
            .set('.intro__content', { opacity: 0 })
            .fromTo('.intro',{ translateX: '-100%' }, { translateX: 0, duration: 1.4, ease: 'power3.inOut' })
            .to('.intro__title', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.4, ease: 'power3.out' })
            .to('.intro__content', { opacity: 1 })
            .to('.menu-button', { color: 'dimgrey', duration: 0.2 })
            .to('.intro__next svg', { translateX: '-20px', yoyo: true, repeat: -1 })
    }, [])

    function skipToAlbums() {
        props.skipTo('intro')
    }

    return (
        <div className="intro">
            <div className="marker marker-dark">1</div>

            <div className="intro__title">A quick introduction...</div>

            <div className="intro__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint assumenda est ipsam fuga facilis blanditiis, hic cumque ipsum impedit quisquam odio eum reprehenderit vero!
            </div>

            <div className="intro__next">
                <svg onClick={skipToAlbums} width="81" height="60" viewBox="0 0 81 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="51" cy="30" r="30" fill="#ACACAC" />
                    <path d="M55.7071 30.7071C56.0976 30.3166 56.0976 29.6834 55.7071 29.2929L49.3431 22.9289C48.9526 22.5384 48.3195 22.5384 47.9289 22.9289C47.5384 23.3195 47.5384 23.9526 47.9289 24.3431L53.5858 30L47.9289 35.6569C47.5384 36.0474 47.5384 36.6805 47.9289 37.0711C48.3195 37.4616 48.9526 37.4616 49.3431 37.0711L55.7071 30.7071ZM0 31H55V29H0V31Z" fill="black" />
                </svg>

            </div>
        </div>
    );
}

export default Intro;