import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import './styles.css';

function ProductsItem() {
    const [product, setProduct] = useState([]);


    useEffect(() => { 
        async function loadProducts(e){
            const response =  await api.get('/products');
            
            setProduct(response.data.products); 
        }

        loadProducts();
    }, []);

    return (
        <ul>
            {product.map(products => (
                <li key={products.id} className="dev-item">
                    <header>
                        <div className="user-info">
                            <strong>{products.description}</strong> 
                            <span>Cod: {products.id}</span> <br/>
                        </div>
                    </header>
                    <p style={{color: products.quantity <= 10 ? "red":'#666'}}><strong>Qtd em estoque: </strong>{products.quantity}</p>
                </li>
            ))};
            
        </ul>
    )

}
export default ProductsItem;