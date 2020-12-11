import React from 'react';
import './App.scss';
import MainContent from './Components/MainContent/MainContent'
import Modal from './Components/Modal/Modal'

const App = () => {
  return (
    <React.Fragment>
      <Modal />
      <MainContent />
    </React.Fragment>
  );
}

export default App;
