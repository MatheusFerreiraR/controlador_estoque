import React, {useState, useEffect} from 'react';
import moment from 'moment';
import api from '../../services/api';

import './styles.css'

function Ordem() {
    const [orders, setOrders] = useState([]);


    useEffect(() => { 
        async function loadOrders(e){
            const response =  await api.get('/servicesorder');

            setOrders(response.data.serviceOrders); 
        }

        loadOrders();
    }, []);

    return (
        <>
            {orders.map(order => (
                <li key={order.id} className="dev-item">
                    <header>
                        <div className="user-info">
                            <strong>Nº {order.id}</strong>
                            <span>Data {String(moment(order.createdAt).format('DD/MM/YYYY'))}</span>
                        </div>
                    </header>
                    <p> <strong>Cli nome: </strong>{order.Client.name}</p>
                    <p> <strong>Func nome: </strong>{order.Employee.name}</p>
                    {/* <p> <strong>Endereço: </strong>Rua Maria Grassi Sinigaglia, 128 Recanto da Fortuna, Campinas-SP </p> */}

                    <p><strong>Produtos:</strong></p>

                    <ul className='produtos'>
                        
                        {order.Product.map(product => (
                            <>
                                <li key={product.id} className='produto'>
                                    <p>{product.description}</p>
                                    <p>Qtd: 3</p>
                                </li>
                                <hr className="separadorProduto"/>
                            </>
                        ))}
                        {order.Product.map(product => (
                            <>
                                <li key={product.id} className='produto'>
                                    <p>{product.description}</p>
                                    <p>Qtd: 3</p>
                                </li>
                                <hr className="separadorProduto"/>
                            </>
                        ))}
                        {order.Product.map(product => (
                            <>
                                <li key={product.id} className='produto'>
                                    <p>{product.description}</p>
                                    <p>Qtd: 3</p>
                                </li>
                                <hr className="separadorProduto"/>
                            </>
                        ))}
                        {order.Product.map(product => (
                            <>
                                <li key={product.id} className='produto'>
                                    <p>{product.description}</p>
                                    <p>Qtd: 3</p>
                                </li>
                                <hr className="separadorProduto"/>
                            </>
                        ))}
                        {order.Product.map(product => (
                            <>
                                <li key={product.id} className='produto'>
                                    <p>{product.description}</p>
                                    <p>Qtd: 3</p>
                                </li>
                                <hr className="separadorProduto"/>
                            </>
                        ))}
                        {order.Product.map(product => (
                            <>
                                <li key={product.id} className='produto'>
                                    <p>{product.description}</p>
                                    <p>Qtd: 3</p>
                                </li>
                                <hr className="separadorProduto"/>
                            </>
                        ))}
                    </ul>
                </li>
            ))}            
        </>
    )

}
export default Ordem;