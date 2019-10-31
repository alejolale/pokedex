import React from 'react';
import './App.css';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    };
  }

  /**Funtion that shows the modal */
  /**toogle to hide & unhide */
  showModal = e => {
    console.log('enter')
    this.setState({
      show: !this.state.show
    });
  };

 
  /**Render all document */
  render() {

    return (
      <div className="App">
        <button onClick={e => {
          this.showModal();
        }}
        > show Modal </button>
        
        <Modal onClose={this.showModal} show={this.state.show}>Message in modal</Modal>
      </div>
    );
  }
}

export default App;
