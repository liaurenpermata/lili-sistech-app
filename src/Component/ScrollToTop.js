import React, {useEffect, useState} from 'react'
import { classNames } from './classNames'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

  return (
    <div className='button-scroll'>
        <button type='button' onClick={scrollToTop} className={'visible ' + classNames(
            isVisible ? 'opacity-100' : 'opacity-0'
        )}>
            <i className='fas fa-arrow-up fa-2x'></i>
        </button>
    </div>
  )
}

export default ScrollToTop