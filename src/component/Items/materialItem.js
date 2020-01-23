import React from 'react';

import './stylesMaterial.css'

function MaterialItem() {
    return (
        <>
            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Martelo</strong>
                        <span>Alugado</span>
                    </div>
                </header>
                <p>Oba</p>
            </li>

            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Alicate</strong>
                        <span>Alugado</span>
                    </div>
                </header>
                <p>Oba</p>
            </li>

            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Alicate</strong>
                        <span>Alugado</span>
                    </div>
                </header>
                <p>Oba</p>
            </li>
        </>
    )

}
export default MaterialItem;