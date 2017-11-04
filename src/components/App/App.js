import React, { Component } from 'react';
import {
  Wrapper,
  WrapperInner,
  WrapperLeft,
  WrapperRight,
  LeftInset,
  RightInset,
  Title
} from './styles';

// import child containers for user form and hcard preview.
import FormContainer from '../../containers/UserForm/UserFormContainer';
import HcardContainer from '../../containers/Hcard/HcardContainer';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <WrapperInner>
          <WrapperLeft>
            <LeftInset>
              <Title>hCard Builder</Title>
              {/* User hcard input form container */}
              <FormContainer />
            </LeftInset>
          </WrapperLeft>
          <WrapperRight>
            <RightInset>
              {/* User hcard display container */}
              <HcardContainer />
            </RightInset>
          </WrapperRight>
        </WrapperInner>
      </Wrapper>
    );
  }
}

export default App;
