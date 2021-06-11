import { useEffect, useState } from 'react';
import './App.css';
import './styles/banner.scss';
import './styles/intro.css';
import './styles/albums.css';
import './styles/contact.css';
// import { gsap } from "gsap";
// import { Power3 } from 'gsap/gsap-core';
import { Route, Switch, useHistory } from 'react-router-dom';
import Banner from './comp/Banner';
import { gsap } from 'gsap'
import Intro from './comp/Intro';
import Albums from './comp/Albums';
import Contact from './comp/Contact';

function App() {

  const history = useHistory()

  const [selected, setSelected] = useState(null)

  const links = [
    { text: 'ABOUT US' },
    { text: 'ALBUMS' },
    // { text: 'GALLERY' },
    // { text: 'PRODUCTS' },
    { text: 'CONTACT' }
  ]

  const routes = [
    '/intro',
    '/albums',
    // '/gallery',
    // '/products',
    '/contact'
  ]

  useEffect(() => {

    gsap.set('.menu', { zIndex: -99, clipPath: 'circle(0% at 50% 50%)' })

    var menuElems = document.querySelectorAll('ul.nav li')
    console.log(menuElems);

    menuElems.forEach((link, index) => {
      link.addEventListener('pointerenter', () => gsap.set(link, { borderBottom: '1px solid white' }))
      link.addEventListener('pointerleave', () => gsap.set(link, { borderBottom: '0' }))
      link.addEventListener('click', () => handleMenuClick(index))
    })

  }, [])

  const exitTransitions = [
    //Intro exit
    (callback) => {
      gsap.timeline()
        .to('.menu-button', { color: 'white' })
        .fromTo('.intro__title, .intro__content', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' })
        .to('.intro', { translateX: '-100%', duration: 1.3, ease: 'power3.inOut', onComplete: callback })
    },

    //Album exit
    (callback) => {
      gsap.timeline()
        .to('.albums', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', onComplete: callback })
    },
    
    //Contact exit
    (callback) => {
      gsap.timeline()
      .to('.contact__title', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', duration: 1, ease: 'power4.inOut' })
      .fromTo('.contact', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', duration: 2, ease: 'power4.inOut', onComplete: callback })
    }
  ]

  function handleMenuClick(index) {
    console.log(window.location.href);

    switch (window.location.href) {
      case 'http://localhost:3000/':
        closeMenu(() => history.push(routes[index]))
        break;

      case 'http://localhost:3000/intro':
        if (index === 0) {
          closeMenu()
        } else {
          closeMenu(() => {
            exitTransitions[0](() => history.push(routes[index]))
          })
        }
        break;

      case 'http://localhost:3000/albums':
        if (index === 1) {
          closeMenu()
        } else {
          closeMenu(() => {
            exitTransitions[1](() => history.push(routes[index]))
          })
        }
        break;

      case 'http://localhost:3000/contact':
        if (index === 2) {
          closeMenu()
        } else {
          closeMenu(() => {
            exitTransitions[2](() => history.push(routes[index]))
          })
        }
        break;

      default:
        closeMenu(() => history.push(routes[index]))
        break;
    }
  }

  function skipTo(source) {

    if (source === 'intro') {
      exitTransitions[0](() => {
        setSelected(1)
        history.push('/albums')
      })
    }

    if(source === 'albums') {
      exitTransitions[1](() => {
        setSelected(2)
        history.push('/contact')
      })
    }

    if(source === 'home') {
        history.push('/intro')
    }
  }

  function closeMenu(callback) {
    gsap.set('.menu', { clipPath: 'circle(100% at 50% 50%)' })
    gsap.timeline()
      .to('ul.nav li', { translateX: '-30px', opacity: 0, stagger: 0.1 })
      .to('.menu', { clipPath: 'circle(0% at 50% 50%)', duration: 1.2, ease: 'power2.inOut', onComplete: callback })
      .set('.menu', { zIndex: -9 })
  }

  function openMenu() {
    gsap.set('.menu', { zIndex: 99 })
    gsap.timeline()
      .to('.menu', { clipPath: 'circle(100% at 50% 50%)', duration: 1.2, ease: 'power2.inOut' })
      .to('ul.nav li', { translateX: 0, opacity: 1, stagger: 0.1 })
  }

  return (

    <div className="App">

      <button className="menu-button" onClick={openMenu}><i className="bi bi-list"></i></button>

      <div className="menu">

        <button className="menu-button" onClick={closeMenu}>&times;</button>

        <ul className="nav">
          {links.map(link => {
            return <li>
              {link.text}
            </li>
          })}
        </ul>
      </div>

      <Switch>
        <Route path='/' exact>
          <Banner skipTo={skipTo} />
        </Route>

        <Route path='/intro'>
          <Intro skipTo={skipTo} />
        </Route>

        <Route exact path='/albums'>
          <Albums skipTo={skipTo} />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>

    </div>
  );
}

export default App;