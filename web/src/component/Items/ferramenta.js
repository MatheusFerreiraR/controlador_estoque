import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {FaRegCheckCircle, FaRegTimesCircle} from 'react-icons/fa';

import './styles.css';

function FerramentaItem() {
    const [tool, setTool] = useState([]);


    useEffect(() => { 
        async function loadTools(e){
            const response =  await api.get('/tools');
            
            setTool(response.data); 
        }

        loadTools();
    }, []);

    return (
        <ul>
        {tool.map(tools => ( /* FALTA TERMINAR, PRECISA DA FOTO */
            <li key={tools.id} className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>
                            {
                                tools.status === "Disponível" ?
                                    <FaRegCheckCircle size={15} color="#32CD32" style={{ marginRight: 5}}/>
                                :
                                    <FaRegTimesCircle size={15} color="red" style={{ marginRight: 5}}/>
                            }
                            {tools.description}
                        </strong> 
                        <span 
                            style={{color: tools.status === "Disponível" ? "#32CD32":'red'}} 
                        >{tools.status}</span><br></br>
                        <span>
                        {
                            tools.status === "Disponível" ? null :
                            " Ferramenta com " +
                            tools.Locations[tools.Locations.length - 1].Employee.name
                        }
                        </span>
                    </div>
                </header>
                <p><strong>Código: </strong>{tools.id}</p>
            </li>
        ))}
        </ul>
    )

}
export default FerramentaItem;