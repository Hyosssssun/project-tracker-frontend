import css from './App.module.css';
import 'antd/dist/antd.min.css'
import Add from '../Add';
import List from '../List';
import React, { useState } from 'react'


function App() {
  const [posted, setPosted] = useState(0);
  return (
      <div className={css.App}>
          <h1>PROJECT TRACKER</h1>
          <Add posted={posted} setPosted={setPosted}/>
          <List posted={posted}/>
      </div>
  );
}

export default App;
