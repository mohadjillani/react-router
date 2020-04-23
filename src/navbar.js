import React from 'react'
import { withRouter,NavLink } from 'react-router-dom'

export default withRouter( function Navbar(props) {
//    if(props.location.pathname!=="/about"){
//     setTimeout(()=>{
//         props.history.push('/about');
//     },2000 )
//    }
    
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo left">React Router</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contect">Contect</NavLink></li>
                    <li><NavLink to="/faq">FAQ</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
)