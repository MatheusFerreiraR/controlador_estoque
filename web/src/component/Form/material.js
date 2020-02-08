import React, {useState} from 'react';
import api from '../../services/api';

import './styleMenssage.css';

function Material(){
    const [classeMessage, setClasseMessage] = useState('');
    const [message, setMessage] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');

    async function handleAddProduct(e) {
        e.preventDefault();

        try{
            await api.post('/products', {
                description,
                quantity,
            });
            setClasseMessage('success-msg');
            setMessage('Ferramentas Cadastrado com Sucesso')
        }catch(error){
            setClasseMessage('error-msg');
            setMessage(error.response.data.error);
        }
    };
    
    return (
        <>
            <div className={classeMessage}>
                {message}
            </div>
            <strong>Cadastrar Material</strong>
            <form onSubmit={handleAddProduct}>
                <div className="input-block">
                    <label htmlFor="desc_material">Descrição do Material:</label>
                    <input 
                        name="description" 
                        id="desc_material" 
                        required 
                        value={description} onChange={e => setDescription(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="qtd_material">Quantidade:</label>
                    <input 
                        name="qtd_material"
                        id="qtd_material"
                        required 
                        value={quantity} onChange={e => setQuantity(e.target.value)}
                    />
                </div>

                <button type="submit">salvar</button>
            </form>
        </>
    )
}

export default Material;