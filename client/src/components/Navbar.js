import React, {useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from '../App';

const NavBar = () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = () => {
        if(state){
            return [
                <li>< Link to="/info">Company Info</ Link></li>,
                <li>
                    <button className="btn #ff6d00 orange accent-4" onClick={() =>{
                        localStorage.clear()
                        dispatch({type: "CLEAR"})
                        history.push('/signin')
                    }}>
                    Logout
                    </button>
                </li>
            ]
        }else{
            return [
                <li>< Link to="/signin">SignIn</ Link></li>,
                <li>< Link to="/signup">SignUp</ Link></li>
            ]
        }
    }
    return(
        <nav>
            <div className="nav-wrapper white">
            <Link to={state? "/" : "/signin"} className="brand-logo left">Movie List</Link>
            <ul id="nav-mobile" className="right">
               {renderList()}
            </ul>
            </div>
        </nav>
    )
}


export default NavBar