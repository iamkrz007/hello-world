import { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';

function App() {
const [show, setShow] = useState(false);

const openHandler = () => {
  setShow(p=>!p)
}
  return (
    <div className="App">
      <h1 onClick={openHandler}>OPEN</h1>
      {show && <Modal openHandler={openHandler}/>}
    </div>
  );
}

export default App;
