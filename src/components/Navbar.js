import React, {Component} from 'react'
import {ThemeContext} from '../context/Theme-Context';
import { AuthContext } from '../context/AuthContext';

class Navbar extends Component {
    static contextType = ThemeContext;
    render(){
        return(
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth} = authContext;
                    const { isLightTheme, light, dark} = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return(
                        <nav style={{ background: theme.ui, color: theme.syntax,  }}>
                            <h2>Context App</h2>
                            <div onClick={toggleAuth}>
                                {isAuthenticated ? 'Logged In' : 'Logged Out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        );
    }
}

export default Navbar;