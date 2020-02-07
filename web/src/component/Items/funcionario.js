import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import './styles.css'

function Funcionario() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => { 
        async function loadEmployees(e){
            const response =  await api.get('/employees');

            setEmployees(response.data); 
        }

        loadEmployees();
    }, []);

    return (
        <ul>
            {employees.map(employee => (
                <li key={employee.id} className="dev-item">
                    <header>
                        <div className="user-info">
                            <strong>{employee.name}</strong>
                            <span>Cod: {employee.id}</span>
                        </div>
                    </header>
                    {/* <p> <strong>Cargo: </strong> Ze bosta</p> */}
                    <p> <strong>Tel: </strong>{employee.phone}</p>
                    {/* <p> <strong>CPF: </strong>399910976803 </p> */}
                    <p> <strong>Email: </strong>{employee.email}</p>
                </li>
            ))}
        </ul>
    )

}
export default Funcionario;