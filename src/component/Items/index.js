import React, {useState} from 'react';
import MaterialItem from './materialItem';
import Ferramenta from './ferramenta';
import Cliente from './cliente';
import Ordem from './ordem';
import Funcionario from './funcionario';

import './styles.css'

function DevItem() {
    const [state, setState] = useState({value: 'A'});
    
  
    function handleChange(e) {
        setState({value: e.target.value});
    };

    return (
        <div className='lista'>
            <select className='list' value={state.value} onChange={handleChange} >
                <option value="A">Ordem</option>
                <option value="B">Cliente</option>  
                <option value="C">Funcionário</option>
                <option value="D">Ferramenta</option>
                <option value="E">Material</option>
            </select>
            
            <br/><br/>

            {state.value === 'A' && 
                <ul>
                    <Ordem />
                </ul>
                           
            }
            {state.value === 'B' &&
                <ul>
                    <Cliente />
                </ul>
            }
            {state.value === 'C' &&
                <ul>
                    <Funcionario />
            </ul>
            }

            {state.value === 'D' &&
                <ul>
                    <Ferramenta />
                </ul>
            }
            {state.value === 'E' &&
                <ul>
                    <MaterialItem />
                </ul>
            }
        </div>
    )

}
export default DevItem;