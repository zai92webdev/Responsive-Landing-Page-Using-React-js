import React, {useEffect} from 'react'
import './stylesheet/Hero.css'
import ScrollReveal from 'scrollreveal'


function Hero() {

    useEffect(() => {

        ScrollReveal().reveal('.scroll', {
            origin:'bottom',
            easing: 'ease-in',
            distance: '30px',
            interval:200,
            duration: 300,
            reset:true
        })
    },[])

    return (
        <div className='hero'>
            <div className='hero__container'>
                <h1 className='scroll'>Pick Your Destination</h1>

                <button className='scroll'>Travel More</button>
            </div>
        </div>
    )
}

export default Hero
