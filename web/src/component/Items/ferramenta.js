import React from 'react';

import './styles.css'

function MaterialItem() {
    return (
        <>
            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Martelo</strong>
                        <span>Disponível</span>
                    </div>
                </header>
                <p><strong>Código: </strong>01</p>
            </li>

            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Alicate</strong>
                        <span>Alugado</span>
                    </div>
                </header>
                <p><strong>Código: </strong>02</p>
                <p><strong>Func nome: </strong>Matheus</p>
                <p><strong>Data: </strong>12/03/19</p>
            </li>

            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Alicate</strong>
                        <span>Alugado</span>
                    </div>
                </header>
                <p><strong>Código: </strong>03</p>
                <p><strong>Func nome: </strong>Ana</p>
                <p><strong>Data: </strong>12/03/19</p>
            </li>
        </>
    )

}
export default MaterialItem;