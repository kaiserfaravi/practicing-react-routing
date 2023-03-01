import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Friends from '../Friends/Friends';
import Header from '../Header/Header';

const Products = () => {
    const productsUser = useLoaderData();
    return (
        <div>
            
            <h2>Products here {productsUser.length} </h2>
            {
                productsUser.map(friend=><Friends 
                key ={friend.id}
                friend ={friend}
                ></Friends>)
            }
        </div>
    );
};

export default Products;