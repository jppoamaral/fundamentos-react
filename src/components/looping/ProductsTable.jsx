//criar tablema mostrando os produtos
import './ProductsTable.css'
import React from "react";
import products from "../../data/products";

export default (props) => {
    function getProducts() {
        return products.map((product, i) => {
            return (
                <tr key={product.id} className={i % 2 === 0 ? 'Even' : 'Odd'}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>$ {product.price.toFixed(2)}</td>
                </tr>
            );
        });
    }


    return (
        <div className="ProductsTable">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{getProducts()}</tbody>
            </table>
        </div >
    );
};