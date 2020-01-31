import React from 'react';

function Ferramenta(){
    return (
        <>
            <strong>Cadastrar Ferramenta</strong>
            <form>
                <div className="input-block">
                <label htmlFor="desc_ferramenta">Descrição da Ferramenta:</label>
                <input name="desc_ferramenta" id="desc_ferramenta" required />
                </div>

                <div className="input-block">
                <label htmlFor="cod_ferramenta">Código:</label>
                <input name="cod_ferramenta" id="cod_ferramenta" required />
                </div>

                <button type="submit">salvar</button>
            </form>
        </>
    )
}

export default Ferramenta;