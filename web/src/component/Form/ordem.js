import React, {useState, useEffect} from 'react';
import api from '../../services/api';

function Ordem(){
    // const [date, setDate] = useState('');
    // const [products, setProducts] = useState('');
    const [employees, setEmployees] = useState([]);
    const [clients, setClients] = useState([]);
    const [clientResponsible, setClientResponsible] = useState('');  
    const [employeeResponsible, setEmployeeResponsible] = useState('');

    async function handleAddServiceOrder(e) {
        e.preventDefault();
        
        if((clientResponsible.value !== -1) && (employeeResponsible.value !== -1)){
            await api.post(`/employees/${employeeResponsible.value}/servicesorder`, {
                client_id: clientResponsible.value
            });
        }

        
    };

    useEffect(() => { 
        async function loadEmployees(e){
            const response =  await api.get('/employees');
            
            setEmployees(response.data); 
            // console.log(response.data);
        }
        
        // populaceSelectBox
        loadEmployees();
        
    }, []);
    // setEmployeeResponsible(employees[0].id);
    
    useEffect(() => { 
        async function loadClients(e){
            const response =  await api.get('/clients');

            setClients(response.data.clients); 
        }

        loadClients();
    }, []);

        
    /*--------------------*/

    function handleChangeClient(e) {
        setClientResponsible({value: e.target.value});
    };

    function handleChangeEmployee(e) {
        setEmployeeResponsible({value: e.target.value});
        
    };

    return (
        <>
            <strong>Cadastrar Ordem de Serviço</strong>
            <form onSubmit={handleAddServiceOrder}>
                <div className="input-block">
                    <label htmlFor="n_ordem">Nº da Ordem de Serviço:</label>
                    <input 
                        name="n_ordem" 
                        id="n_ordem" 
                        disabled ="disabled" 
                    />
                </div>

                {/* <div className="input-block">
                    <label htmlFor="data_ordem">Data:</label>
                    <input type="date" name="data_ordem" id="data_ordem" required />
                </div> */}

                <div className="input-block">
                    <label htmlFor="cli_ordem">Nome do Cliente:</label>
                    <select 
                        className='listForm' 
                        value={clientResponsible.value} onChange={handleChangeClient} 
                    >
                    <option value={-1}> Selecione um Cliente</option>
                    {clients.map(client => (
                        <option 
                            key={client.id} 
                            value={client.id}
                        >
                            {client.name}
                        </option>
                    ))}
                    </select>
                </div>

                <div className="input-block">
                    <label htmlFor="func_ordem">Nome do Funcionário:</label>
                    <select 
                        className='listForm'  onLoad={handleChangeEmployee} 
                        value={employeeResponsible.value} onChange={handleChangeEmployee} 
                    >
                        <option value={-1}> Selecione um Funcionario</option>
                        {employees.map(employee => (
                            <option 
                                key={employee.id} 
                                value={employee.id}
                            >
                                {employee.name}
                            </option>
                        ))}
                    </select>
                    {/* <input name="func_ordem" id="func_ordem" required /> */}
                </div>

                {/* <div className="input-block">
                    <label htmlFor="endereco_ordem">Endereço:</label>
                    <input name="endereco_ordem" id="endereco_ordem" required />
                </div> */}

                {/* <div className="input-block">
                    <label htmlFor="produtos_ordem">Produtos:</label>
                    <input name="produtos_ordem" id="produtos_ordem" required />
                </div> */}

                

                <button type="submit">salvar</button>
            </form>
        </>
    )
}

export default Ordem;