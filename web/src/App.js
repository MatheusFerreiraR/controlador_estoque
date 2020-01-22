import React from 'react';

import './SideBar.css'
import './App.css';
import './Global.css'

function App() {
  return (
    <div id='app'>
      <aside>
        <label>
          O que deseja Cadastrar? <tab/>       
          <select display="bubble">
            <option value="A">Material</option>
            <option value="B">Ferramenta</option>
            <option value="C">Cliente</option>
            <option value="D">Funcionário</option>
          </select>
        </label>
        
        <br/>
        <br/>

        <strong>Cadastrar Material</strong>
    
        <form>
            <div className="input-block">
              <label htmlFor="desc_material">Descrição do Material:</label>
              <input name="desc_material" id="desc_material" required />
            </div>

            <div className="input-block">
              <label htmlFor="qtd_material">Quantidade:</label>
              <input name="qtd_material" id="qtd_material" required />
            </div>

            <button type="submit">salvar</button>
          </form>
        </aside>
      </div>
  );
}

export default App;
