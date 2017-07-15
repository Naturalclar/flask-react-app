import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App.jsx';
import './styles/main.styl';

injectTapEventPlugin();

class Main extends React.Component {
  render(){
    return (
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);