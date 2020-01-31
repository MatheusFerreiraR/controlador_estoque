import React from 'react';

import './styles.css'

function Cliente() {
    return (
        <>
            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Matheus</strong>
                        <span>Cod: 01</span>
                    </div>
                </header>
                <p> <strong>Tel: </strong>19 9 88705030 </p>
                <p> <strong>CPF: </strong>33115132 </p>
                <p> <strong>Email: </strong>matheus@gmail.com </p>
                <p> <strong>Endereço: </strong>Rua Maria Grassi Sinigaglia, 128 Recanto da Fortuna, Campinas-SP </p>
                
            </li>

            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Ana Paula</strong>
                        <span>Cod: 02</span>
                    </div>
                </header>
                <p> <strong>Tel: </strong>45 9 84317537 </p>
                <p> <strong>CPF: </strong>4513355646 </p>
                <p> <strong>Email: </strong>ana@gmail.com </p>
                <p> <strong>Endereço: </strong>Rua Maria Grassi Sinigaglia, 128 Recanto da Fortuna, Campinas-SP </p>
                
            </li>
            
            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Jecé Xavier</strong>
                        <span>Cod: 03</span>
                    </div>
                </header>
                <p> <strong>Tel: </strong>19 9 88705030 </p>
                <p> <strong>CPF: </strong>394923921834 </p>
                <p> <strong>Email: </strong>jece@gmail.com </p>
                <p> <strong>Endereço: </strong>Rua Maria Grassi Sinigaglia, 128 Recanto da Fortuna, Campinas-SP </p>
                
            </li>
        </>
    )

}
export default Cliente;