import css from './App.module.css';
import 'antd/dist/antd.min.css'
import Add from '../Add';
import List from '../List';
import React, { useState } from 'react'


function App() {
  const [posted, setPosted] = useState(0);
  return (
      <div className={css.App}>
          <div className={css.leftSection}>
              <h1 className={css.h1}>
                  <div>
                      <span>P</span>
                      <span>R</span>
                      <span>O</span>
                      <span>J</span>
                      <span>E</span>
                      <span>C</span>
                      <span>T</span>
                  </div>
                  <div>
                      <span>T</span>
                      <span>R</span>
                      <span>A</span>
                      <span>C</span>
                      <span>K</span>
                      <span>E</span>
                      <span>R</span>
                  </div>
              </h1>
              <Add className={css.add} posted={posted} setPosted={setPosted} />
          </div>
          <div className={css.rightSection}>
              <List className={css.list} posted={posted} />
          </div>
      </div>
  );
}

export default App;
