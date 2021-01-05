import React, {useEffect} from 'react'
import './stylesheet/Sections.css'
import 'boxicons';
import ScrollReveal from 'scrollreveal'



function Sections() {
    
    useEffect(() => {

        ScrollReveal().reveal('.section__card', {
            origin:'top',
            easing: 'ease-in',
            distance: '80px',
            interval:100,
            duration: 400,
            reset:true
        })
    },[])


    return (
        <div className='section'>
            <h1>Top Travel Destination</h1>

            <div className='section__cards'>

                <div className='section__card'>
                    <img src="img2.jpg" alt="gg" />

                    <div className='section__card__content'>
                        
                    <h4><box-icon color='white' animation='tada' type='solid' name='map-pin'></box-icon> lorem ipsum</h4>

                    <button>View Destination</button>
                    </div>
                </div>

                <div className='section__card'>
                    <img src="img3.jpg" alt="gg" />

                    <div className='section__card__content'>
                        
                    <h4><box-icon color='white' animation='tada' type='solid' name='map-pin'></box-icon> lorem ipsum</h4>

                    <button>View Destination</button>
                    </div>
                </div>

                <div className='section__card'>
                    <img src="img4.jpg" alt="gg" />

                    <div className='section__card__content'>
                        
                    <h4><box-icon color='white' animation='tada' type='solid' name='map-pin'></box-icon> lorem ipsum</h4>

                    <button>View Destination</button>
                    </div>
                </div>

                <div className='section__card'>
                    <img src="img5.jpg" alt="gg" />

                    <div className='section__card__content'>
                        
                    <h4><box-icon color='white' animation='tada' type='solid' name='map-pin'></box-icon> lorem ipsum</h4>

                    <button>View Destination</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Sections
