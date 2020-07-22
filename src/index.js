import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NavTab from "./components/NavTab";
import theme from "./components/QuizTheme";
import { ThemeProvider } from '@material-ui/styles';

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className={App}>
                    <NavTab />
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
