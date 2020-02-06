import React, {useState} from 'react';
import ProductsItem from './productsItem';
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
                
                <Cliente />
                
            }
            {state.value === 'C' &&
                
                    <Funcionario />

            }

            {state.value === 'D' &&
                
                <Ferramenta />
                
            }
            {state.value === 'E' &&
                
                <ProductsItem />
                
            }
        </div>
    )

}
export default DevItem;