import React, {useState} from 'react';
import api from '../../services/api';


function Ferramenta(){
    const [description, setDescription] = useState('');
    // const [id, setId] = useState('');

    
    async function handleAddTool(e) {
        e.preventDefault();
        
        await api.post('/tools', {
            // id,
            description,
        });
    };


    return (
        <>
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