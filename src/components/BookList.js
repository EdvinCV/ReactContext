import React, {Component} from 'react'
import {ThemeContext} from '../context/Theme-Context';
import { AuthContext } from '../context/AuthContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        return(
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark} = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div className="book-list" style={{ background: theme.bg, color: theme.syntax}}>
                        <ul>
                            <li style={{background: theme.ui}}>The way of kings</li>
                            <li style={{background: theme.ui}}>The name of the wind</li>
                            <li style={{background: theme.ui}}>The final empire</li>
                        </ul>
                    </div>
                );
            }}</ThemeContext.Consumer>
        );
    }
}
 
export default BookList;
