import React from 'react';
import ColorSchemesExample from './Navbar';
import Home from '../pages/Home';

function Layout() {
    return (
        <React.Fragment>
            <ColorSchemesExample/>
            <Home/>
        </React.Fragment>
    );
}

export default Layout;