import React from 'react'
import {
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar


