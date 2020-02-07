import React, {useState} from 'react';
import api from '../../services/api';

function Cliente() {
    const [name, setName] = useState('');
    const [cpf_cnpj, setCpf_cnpj] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    async function handleAddClient(e) {
        e.preventDefault();
        
        await api.post('/clients', {
            name,
            cpf_cnpj,
            phone,
            email,
            address
        });
    };

    return (
        <>
            <strong>Cadastrar Cliente</strong>
            <form onSubmit={handleAddClient}>
                <div className="input-block">
                    <label htmlFor="nome_cli">Nome do Cliente:</label>
                    <input 
                        name="name"
                        id="nome_cli" 
                        value={name} onChange={e => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="cpf_cnpj_cli">CPF:</label>
                    <input 
                        name="cpf_cnpj"
                        id="cpf_cnpj_cli"
                        value={cpf_cnpj} onChange={e => setCpf_cnpj(e.target.value)}
                        required 
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="tel_cli">Telefone:</label>
                    <input 
                        name="phone" 
                        id="tel_cli" 
                        value={phone} onChange={e => setPhone(e.target.value)}
                        required
                    />
                </div>
                
                <div className="input-block">
                    <label htmlFor="email_cli">Email:</label>
                    <input 
                        name="email" 
                        id="email_cli" 
                        value={email} onChange={e => setEmail(e.target.value)}
                        required 
                    />
                </div>

                
                <div className="input-block">
                    <label htmlFor="end_cli">Endereço:</label>
                    <input 
                        name="address"
                        id="end_cli" 
                        value={address} onChange={e => setAddress(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">salvar</button>
            </form>
        </>
    )
}

export default Cliente;