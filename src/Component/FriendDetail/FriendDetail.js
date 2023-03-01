import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend= useLoaderData()
    console.log(friend);
    return (
        <div>
            <h1>Name {friend.name}</h1>
            <h1>Eeverything about need to know aboutr this perrson</h1>
        </div>
    );
};

export default FriendDetail;