import './App.css';
import 'antd/dist/antd.min.css'
import Add from '../Add';
import List from '../List';


function App() {

  return (
      <div className="App">
          <h1>PROJECT TRACKER</h1>
          <Add />
          <List/>
      </div>
  );
}

export default App;
