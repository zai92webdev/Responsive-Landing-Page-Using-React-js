import React, {useEffect} from 'react'
import './stylesheet/Experience.css'
import ScrollReveal from 'scrollreveal'


function Experience() {

    useEffect(() => {

        ScrollReveal().reveal('.experience__card', {
            origin:'left',
            easing: 'ease-in',
            distance: '80px',
            interval:100,
            duration: 400,
            reset:true
        })
    },[])
    
    return (
        <div className='experience'>
            <h1>Experience It</h1>

            <p>What are They Saying!</p>

            <div className='experience__grids'>
                <div className='experience__card'>
                    <div className='experience__card__content'>
                        <h1>Lorem Ipsum</h1>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel nobis distinctio minima ipsa! Vel nobis hic esse expedita nesciunt cupiditate rem quaerat ex! Ad hic quos tempore assumenda nesciunt officiis quas officia, sunt cupiditate architecto aliquid amet quia rem."</p>
                    </div>
                    <img src="img7.jpg" alt=""/>
                </div>
            </div>

            <div className='experience__card'>
                    <img src="img8.jpg" alt=""/>
                    <div className='experience__card__content'>
                        <h1>Lorem Ipsum</h1>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel nobis distinctio minima ipsa! Vel nobis hic esse expedita nesciunt cupiditate rem quaerat ex! Ad hic quos tempore assumenda nesciunt officiis quas officia, sunt cupiditate architecto aliquid amet quia rem."</p>
                    </div>
                </div>

                <div className='experience__card'>
                    <div className='experience__card__content'>
                        <h1>Lorem Ipsum</h1>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel nobis distinctio minima ipsa! Vel nobis hic esse expedita nesciunt cupiditate rem quaerat ex! Ad hic quos tempore assumenda nesciunt officiis quas officia, sunt cupiditate architecto aliquid amet quia rem."</p>
                    </div>
                    <img src="img9.jpg" alt=""/>
                </div>

                <div className='experience__card'>
                <img src="img10.jpg" alt=""/>
                    <div className='experience__card__content'>
                        <h1>Lorem Ipsum</h1>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel nobis distinctio minima ipsa! Vel nobis hic esse expedita nesciunt cupiditate rem quaerat ex! Ad hic quos tempore assumenda nesciunt officiis quas officia, sunt cupiditate architecto aliquid amet quia rem."</p>
                    </div>
                </div>

            
        </div>
    )
}

export default Experience
