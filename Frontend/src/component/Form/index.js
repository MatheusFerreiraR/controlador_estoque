import React, { useState} from 'react';
import Material from './material';
import Cliente from './cliente';
import Ferramenta from './ferramenta';
import Ordem from './ordem';

import './styles.css'


function Form () {
    const [state, setState] = useState({value: 'A'});
    
  
    function handleChange(e) {
        setState({value: e.target.value});
    };
      
    return(
        <>         
            <select className='listForm' value={state.value} onChange={handleChange} >
                <option value="A">Ordem</option>
                <option value="B">Cliente</option>
                <option value="C">Ferramenta</option>
                <option value="D">Material</option>
            </select>
            
            <br/>
            <br/>

            {state.value === 'A' &&
                <Ordem />
            }
            {state.value === 'B' &&
                <Cliente />
            }
            {state.value === 'C' &&
                <Ferramenta />
            }
            {state.value === 'D' && 
                <Material />           
            }
        </>
    )
}

export default Form;