import React, {useEffect, useState} from 'react';
import api from '../../services/api';


import './styles.css'

function Cliente() {
    const [client, setClient] = useState([]);


    useEffect(() => { 
        async function loadClients(e){
            const response =  await api.get('/clients');

            setClient(response.data.clients); 
        }

        loadClients();
    }, []);

    return (
        <ul>
            {client.map(clients => (
                <li key={clients.id} className="dev-item">
                    <header>
                        <div className="user-info">
                            <strong>{clients.name}</strong>
                            <span>Cod: {clients.id}</span>
                        </div>
                    </header>
                    <p> <strong>Tel: </strong>{clients.phone}</p>
                    <p> <strong>CPF: </strong>{clients.cpf_cnpj}</p>
                    <p> <strong>Email: </strong>{clients.email}</p>
                    <p> <strong>Endereço: </strong>{clients.address}</p>
                </li>
            ))}
        </ul>
    )

}
export default Cliente;