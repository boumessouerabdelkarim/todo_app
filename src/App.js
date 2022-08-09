
import './App.css';
import Addtask from './components/Addtask';
import Taskheader from './components/Taskheader';
import Tasklist from './components/Tasklist';

function App() {
  return (
    <div className="App">
     <div className="contanier">
        <Taskheader /> 
        <Tasklist  />
        
          <Addtask />
         
      </div>
    </div>
  );
}

export default App;
