import React, {Component} from 'react';
import './App.css';

// import child containers for user form and hcard preview.
import FormContainer from '../../containers/UserForm/UserFormContainer'
import HcardContainer from '../../containers/Hcard/HcardContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-container">
          <div className="app-container-left ">
            <div className="app-container-left-inset">
              <h1 className="app-title">hCard Builder</h1>
              {/* User hcard input form container */}
              <FormContainer />
            </div>
          </div>
          <div className="app-container-right">
            <div className="app-container-right-inset">
              {/* User hcard display container */}
              <HcardContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App