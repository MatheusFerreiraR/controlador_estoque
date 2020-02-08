import React, {useState} from 'react';
import api from '../../services/api';

import './styleMenssage.css';

function Ferramenta(){
    const [classeMessage, setClasseMessage] = useState('');
    const [message, setMessage] = useState('');
    const [description, setDescription] = useState('');
    
    async function handleAddTool(e) {
        e.preventDefault();
        try{
            await api.post('/tools', {
                // id,
                description,
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
            <strong>Cadastrar Ferramenta</strong>
            <form onSubmit={handleAddTool}>
                <div className="input-block">
                <label htmlFor="desc_ferramenta">Descrição da Ferramenta:</label>
                <input name="desc_ferramenta" id="desc_ferramenta"
                    value={description} onChange={e => setDescription(e.target.value)}
                    required />
                </div>

                {/* <div className="input-block">
                <label htmlFor="cod_ferramenta">Código:</label>
                <input name="cod_ferramenta" id="cod_ferramenta"
                    value={id} onChange={e => setId(e.target.value)}
                 
                 required />
                </div> */}


                <button type="submit">salvar</button>
            </form>
        </>
    )
}

export default Ferramenta;