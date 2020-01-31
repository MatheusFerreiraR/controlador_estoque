import React from 'react';

function Ordem(){
    return (
        <>
            <strong>Cadastrar Ordem de Serviço</strong>
            <form>
                <div className="input-block">
                    <label htmlFor="n_ordem">Nº da Ordem de Serviço:</label>
                    <input name="n_ordem" id="n_ordem" required />
                </div>

                <div className="input-block">
                    <label htmlFor="data_ordem">Data:</label>
                    <input name="data_ordem" id="data_ordem" required />
                </div>

                <div className="input-block">
                    <label htmlFor="cli_ordem">Nome do Cliente:</label>
                    <input name="cli_ordem" id="cli_ordem" required />
                </div>

                <div className="input-block">
                    <label htmlFor="func_ordem">Nome do Funcionário:</label>
                    <input name="func_ordem" id="func_ordem" required />
                </div>

                <div className="input-block">
                    <label htmlFor="endereco_ordem">Endereço:</label>
                    <input name="endereco_ordem" id="endereco_ordem" required />
                </div>

                <div className="input-block">
                    <label htmlFor="produtos_ordem">Produtos:</label>
                    <input name="produtos_ordem" id="produtos_ordem" required />
                </div>

                

                <button type="submit">salvar</button>
            </form>
        </>
    )
}

export default Ordem;