import React from 'react';

import './SideBar.css'
import './App.css';
import './Global.css'
import './Main.css'

import Form from './component/Form';
import Items from './component/Items'

function App() {
  return (
    <div id='app'>
      <aside>
        <Form />
      </aside>

      <main>
          <Items />
      </main>
    </div>
  );
}

export default App;
