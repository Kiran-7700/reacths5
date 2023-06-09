import './App.css';
import Counter from './Component/Counter';
import HocRed from './Component/Hoc';
import HocGreen from './Component/Hoc2';
import Pure from './Component/pure';

function App() {
  return (
    <div className="App">
     <Pure/>
     <hr/>
     <h1>Higher Order</h1>
    <HocRed cmp={Counter}/>
    <HocGreen cmp={Counter}/>
     
    </div>
  );
}

export default App;
