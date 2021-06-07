import React from 'react';
import {Link} from 'react-router-dom'
export class NavBaby extends React.Component{
    render(){
        return (
            <nav>
                <ul className="navItems">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/list'>
                        <li>ToDo List</li>
                    </Link>
                    <Link to='/about'>
                        <li>About Us</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default NavBaby;