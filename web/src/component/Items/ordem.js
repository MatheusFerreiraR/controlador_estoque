import React from 'react';

import './styles.css'

function Ordem() {
    return (
        <>
            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Nº 120</strong>
                        <span>Data 12/02/20</span>
                    </div>
                </header>
                <p> <strong>Cli nome: </strong>Jecé Xavier</p>
                <p> <strong>Func nome: </strong>Matheus Ferreira </p>
                <p> <strong>Endereço: </strong>Rua Maria Grassi Sinigaglia, 128 Recanto da Fortuna, Campinas-SP </p>
                <li>
                    
                    <p><strong>Produtos:</strong></p>
                    
                    <ul className='produtos'>
                        <p>Camera</p>
                        <p>Qtd: 3</p>
                    </ul>
                    <ul  className='produtos'>
                        <p>Cabo</p>
                        <p>Qtd: 6</p>

                    </ul>
                </li>
            </li>

            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Nº 123</strong>
                        <span>Data 22/04/20</span>
                    </div>
                </header>
                <p> <strong>Cli nome: </strong>Matheus Ferreira</p>
                <p> <strong>Func nome: </strong>Jecé Xavier </p>
                <p> <strong>Endereço: </strong>Rua Maria Grassi Sinigaglia, 128 Recanto da Fortuna, Campinas-SP </p>
                <li>
                    <p><strong>Produtos:</strong></p>
                    <ul className='produtos'>
                        <p>Alarme</p>
                        <p>Qtd: 2</p>
                    </ul>
                    <ul  className='produtos'>
                        <p>Camera</p>
                        <p>Qtd: 5</p>
                    </ul>
                </li>
            </li>

            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Nº 127</strong>
                        <span>Data 14/06/20</span>
                    </div>
                </header>
                <p> <strong>Cli nome: </strong>Ana Paula</p>
                <p> <strong>Func nome: </strong>Jecé Xavier </p>
                <p> <strong>Endereço: </strong>Rua Maria Grassi Sinigaglia, 128 Recanto da Fortuna, Campinas-SP </p>
                <li>
                    <p><strong>Produtos:</strong></p>
                    <ul className='produtos'>
                        <p>Alarme</p>
                        <p>Qtd: 2</p>
                    </ul>
                    <ul  className='produtos'>
                        <p>Camera</p>
                        <p>Qtd: 5</p>
                    </ul>
                </li>
            </li>            
        </>
    )

}
export default Ordem;