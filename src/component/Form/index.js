import React, { useState} from 'react';
import Material from './material';
import Cliente from './cliente';

import './styles.css'


function Form () {
    const [state, setState] = useState({value: 'A'});
    
  
    function handleChange(e) {
        setState({value: e.target.value});
    };
      
    return(
        <>         
            <select className='listForm' value={state.value} onChange={handleChange} >
                <option value="A">Material</option>
                <option value="B">Ferramenta</option>
                <option value="C">Cliente</option>  
                <option value="D">Funcionário</option>
            </select>
            
            <br/>
            <br/>

            {state.value === 'A' && 
                <Material />           
            }
            {state.value === 'C' &&
                <Cliente />
            }
        </>
    )
}

export default Form;