import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { gsap } from 'gsap'
import Intro from './Intro';
import Albums from './Albums';

const Banner = ({ skipTo }) => {



    useEffect(() => {

        gsap.set('.banner', { height: window.innerHeight })
        gsap.set('.menu-button', { color: 'white' })

        gsap.timeline()
            .set('.t3, .t2, .t1', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' })
            .set('.menu-button', { opacity: 0 })
            .to('.t1', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
            .to('.t1', { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', delay: 0.6 })
            .to('.t2', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
            .to('.t2', { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', delay: 0.6 })
            .to('.t3', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
            .to('.t3', { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', delay: 0.6 })
            .fromTo('.banner__overlay', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', ease: 'power3.inOut', duration: 1.2 })
            .to('.menu-button', { opacity: 1, duration: 0.2 })
    }, [])

    return (
        <>
            <div className="banner">

                <div className="title">
                    <span>Z</span><span>o</span><span>o</span><span>m</span><span>i</span><span>n</span>
                </div>

                <button className="cta" onClick={() => skipTo('home')}>START</button>

                <div className="banner__overlay">
                    <div className="text-container">
                        <div className="title t1">This</div>
                        <div className="title t2">is</div>
                        <div className="title t3">Zoomin</div>
                    </div>
                </div>

                
            </div>

            <Route path='/intro'>
                <Intro skipTo={skipTo} />
            </Route>

            <Route path='/albums'>
                <Albums skipTo={skipTo} />
            </Route>
        </>
    );
}

export default Banner;