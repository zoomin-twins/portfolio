import React, { useEffect } from 'react';
import { gsap } from 'gsap'

const Contact = () => {

    useEffect(() => {
        gsap.set('.contact', { opacity: 1 })

        gsap.timeline()
        .to('.contact', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 2, ease: 'power4.inOut' })
        .fromTo('.contact__title', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.5, ease: 'power4.inOut' })
        .fromTo('.contact__details', { opacity: 0 }, { opacity: 1 })
        .fromTo('.container__item', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 0.8, ease: 'power4.inOut' })
        .fromTo('.cta-email', { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.2, ease: 'power4.inOut' })
        .to('.menu-button', { color: 'dimgrey' }, 1)
    }, []);

    return ( 
        <div className="contact">
            <div className="contact__title">
                <span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span>
            </div>

            <div className="contact__details">
                Do you have a project or photoshoot to discuss? <br />
                Let's get in touch!
            </div>

            <div className="contact__container">
                <div className="container__item">
                    <div className="item__icon"><i className="bi bi-instagram"></i></div>
                    <div className="item__content">@_._zoomin</div>
                </div>

                <div className="container__item">
                    <div className="item__icon"><i className="bi bi-telephone-fill"></i></div>
                    <div className="item__content">+91 99612 98486</div>
                </div>
            </div>

            <a href="mailto:zoomintwins01@gmail.com"><button className="cta-email">DROP AN EMAIL</button></a>
        </div>
     );
}
 
export default Contact;