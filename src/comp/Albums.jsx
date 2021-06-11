import React, { useEffect } from 'react';
import { gsap } from 'gsap'

const Albums = (props) => {

    useEffect(() => {

        var links = document.querySelectorAll('.link span')
        links.forEach(node => {
            node.addEventListener('pointerenter', () => gsap.to(node, { letterSpacing: 3 }))
            node.addEventListener('pointerleave', () => gsap.to(node, { letterSpacing: 0 }))
        })

        gsap.set('.albums__content', { opacity: 0 })
        gsap.set('.link', { translateX: '-30px', opacity: 0 })
        gsap.set('.albums__skip', { translateX: '-30px', opacity: 0 })
        gsap.timeline()
        .set('.albums', { opacity: 1 })
            .fromTo('.albums', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.9, ease: 'power3.inOut' })
            .to('.albums__content', { opacity: 1 })
            .to('.link', { opacity: 1, translateX: 0, stagger: 0.3 })
            .delay(0.5)
            .to('.albums__skip', { translateX: 0, opacity: 1 })
            .to('.albums__skip', { translateX: '-20px', yoyo: true, repeat: -1 })

    }, [])

    function skipToContact() {
        props.skipTo('albums')
    }

    return (
        <div className="albums">
            <div className="marker marker-light">2</div>

            <div className="albums__main-title">Great collections...</div>

            <div className="albums__content">
                We never let beautiful moments slip by without making a few memories, and those moments are enclosed in our collections... <br />
                Have a look at them
            </div>

            <div className="links">
                <div className="link">
                    <span>Essence</span>
                </div>

                <div className="link">
                    <span>Alankara</span>
                </div>
            </div>

            <div className="albums__skip">
                <svg onClick={skipToContact} width="81" height="60" viewBox="0 0 81 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="51" cy="30" r="30" fill="#ACACAC" />
                    <path d="M55.7071 30.7071C56.0976 30.3166 56.0976 29.6834 55.7071 29.2929L49.3431 22.9289C48.9526 22.5384 48.3195 22.5384 47.9289 22.9289C47.5384 23.3195 47.5384 23.9526 47.9289 24.3431L53.5858 30L47.9289 35.6569C47.5384 36.0474 47.5384 36.6805 47.9289 37.0711C48.3195 37.4616 48.9526 37.4616 49.3431 37.0711L55.7071 30.7071ZM0 31H55V29H0V31Z" fill="#f0f0f0" />
                </svg>
            </div>
        </div>
    );
}

export default Albums;