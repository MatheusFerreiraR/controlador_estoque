import React, {useState} from 'react';
import MaterialItem from './materialItem'

import './styles.css'

function DevItem() {
    const [state, setState] = useState({value: 'A'});
    
  
    function handleChange(e) {
        setState({value: e.target.value});
    };

    return (
        <div className='lista'>
            <select className='list' value={state.value} onChange={handleChange} >
                <option value="A">Material</option>
                <option value="B">Ferramenta</option>
                <option value="C">Cliente</option>  
                <option value="D">Funcionário</option>
            </select>
            
            <br/><br/>

            {state.value === 'A' && 
                
                <ul>
                    <MaterialItem />
                </ul>           
            }
            {state.value === 'C' &&
                <p>Opa</p>
            }
        </div>
    )

}
export default DevItem;