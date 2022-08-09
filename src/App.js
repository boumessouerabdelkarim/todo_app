
import { useState } from 'react';
import './App.css';
import Addtask from './components/Addtask';
import Taskheader from './components/Taskheader';
import Tasklist from './components/Tasklist';

function App() {
  const [fil, setFil] = useState("")

  return (
    <div className="App">
     <div className="contanier">
        <Taskheader setFil={setFil} /> 
        <Tasklist fil={fil} />
        
          <Addtask />
         
      </div>
    </div>
  );
}

export default App;
