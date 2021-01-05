import React, {useEffect} from 'react'
import './stylesheet/Choose.css'
import ScrollReveal from 'scrollreveal'


function Choose() {

    useEffect(() => {

        ScrollReveal().reveal('.choose__card', {
            origin:'left',
            easing: 'ease-in',
            distance: '80px',
            interval:100,
            duration: 400,
            reset:true
        })
    },[])

    return (
        <div className='choose'>
            <h1>Why Choose Us?</h1>

            <div className='choose__grids'>
                <div className='choose__card'>
                <box-icon color='green' size='4rem' name='world'></box-icon>
                    <div className='choose__card_content'>
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo.</p>
                    </div>
                </div>

                <div className='choose__card'>
                <box-icon color='orange' size='4rem' type='solid' name='plane-alt'></box-icon>
                    <div className='choose__card_content'>
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo.</p>
                    </div>
                </div>

                <div className='choose__card'>
                <box-icon color='brown' size='4rem' name='timer' ></box-icon>
                    <div className='choose__card_content'>
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo.</p>
                    </div>
                </div>

                <div className='choose__card'>
                <box-icon color='skyblue' size='4rem' name='notepad' ></box-icon>
                    <div className='choose__card_content'>
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose
