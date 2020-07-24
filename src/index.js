import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import theme from "./components/QuizTheme";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter} from "react-router-dom";
import Router from "./router";

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className={App}>
                    <BrowserRouter>
                        <Router/>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
