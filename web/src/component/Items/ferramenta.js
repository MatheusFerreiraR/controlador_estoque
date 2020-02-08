import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import './styles.css';

function FerramentaItem() {
    const [tool, setTool] = useState([]);


    useEffect(() => { 
        async function loadTools(e){
            const response =  await api.get('/tools');
            
            setTool(response.data.tools); 
        }

        loadTools();
    }, []);

    return (
        <ul>
        {tool.map(tools => ( /* FALTA TERMINAR, PRECISA DA FOTO */
            <li key={tools.id} className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>{tools.description}</strong> 
                        <span style={{color: tools.status === "Disponível" ? "green":'red'}} >{tools.status}</span>
                    </div>
                </header>
                <p><strong>Código: </strong>{tools.id}</p>
            </li>
        ))}
        </ul>
    )

}
export default FerramentaItem;