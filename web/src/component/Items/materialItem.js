import React from 'react';

import './styles.css'

function MaterialItem() {
    return (
        <>
            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Camera</strong>
                        <span>Cod: 1</span> <br/>
                    </div>
                </header>
                <p><strong>Qtd em estoque: </strong>13</p>
                <p><strong>Descrição: </strong>HD 720p</p>
            </li>

            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Cabo</strong>
                        <span>Cod: 4</span>
                    </div>
                </header>
                <p><strong>Qtd em estoque: </strong>9</p>
                <p><strong>Descrição: </strong>Cabo coaxial</p>
            </li>

            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>Alarme</strong>
                        <span>Cod: 5</span>
                    </div>
                </header>
                <p><strong>Qtd em estoque: </strong>17</p>
                <p><strong>Descrição: </strong>Alarme Positron</p>
            </li>
        </>
    )

}
export default MaterialItem;