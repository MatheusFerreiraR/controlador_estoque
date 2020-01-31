import React from 'react';

function Cliente() {
    return (
        <>
            <strong>Cadastrar Cliente</strong>
            <form>
                <div className="input-block">
                    <label htmlFor="nome_cli">Nome do Cliente:</label>
                    <input name="nome_cli" id="nome_cli" required />
                </div>

                <div className="input-block">
                    <label htmlFor="nome_cli">CPF:</label>
                    <input name="nome_cli" id="nome_cli" required />
                </div>

                <div className="input-block">
                    <label htmlFor="tel_cli">Telefone:</label>
                    <input name="tel_cli" id="tel_cli" required />
                </div>
                
                <div className="input-block">
                    <label htmlFor="email_cli">Email:</label>
                    <input name="email_cli" id="email_cli" required />
                </div>

                
                <div className="input-block">
                    <label htmlFor="end_cli">Endereço:</label>
                    <input name="end_cli" id="end_cli" required />
                </div>

                <button type="submit">salvar</button>
            </form>
        </>
    )
}

export default Cliente;