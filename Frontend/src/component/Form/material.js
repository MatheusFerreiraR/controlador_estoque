import React from 'react';

function Material(){
    return (
        <>
            <strong>Cadastrar Material</strong>
            <form>
                <div className="input-block">
                <label htmlFor="desc_material">Descrição do Material:</label>
                <input name="desc_material" id="desc_material" required />
                </div>

                <div className="input-block">
                <label htmlFor="qtd_material">Quantidade:</label>
                <input name="qtd_material" id="qtd_material" required />
                </div>

                <button type="submit">salvar</button>
            </form>
        </>
    )
}

export default Material;