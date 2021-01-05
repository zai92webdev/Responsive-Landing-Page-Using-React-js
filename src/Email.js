import React from 'react'
import './stylesheet/Email.css'

function Email() {
    return (
        <div className='email'>
            <div className='email__container'>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque</p>
                <div className='email__button'>
                    <input placeholder='Enter Your Email' type="text" />
                    <button>Sign up</button>
                </div>
                
            </div>
        </div>
    )
}

export default Email
