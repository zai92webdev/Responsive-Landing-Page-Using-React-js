import React, {useState, useEffect} from 'react'
import './stylesheet/Navbar.css'
import 'boxicons'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const [show, setHandleShow] = useState(false);


    const handler = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setHandleShow(true);
            } else setHandleShow(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])


    return (
        <div className={`navbar ${show && 'navbar__black'}`}>

            <div className='navbar__container'>
            <div className='navbar__logo'>
                Travel<span>X</span>
            </div>

            <ul className={!toggle ?  'navbar__right' : `navbar__rightToggle ${show && 'navbar__rightToggle__black'} `}>
                <li>About</li>
                <li>Trips</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>

            <div className='navbar__icon'>
                <button onClick={handler}>
                    {!toggle ? <box-icon color='white' size='md' name='menu-alt-right'></box-icon>
                    : <box-icon color='white' size='md'  name='x'></box-icon>
                }
                </button>
            </div>
            </div>

        </div>
    )
}

export default Navbar
