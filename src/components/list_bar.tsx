import React from 'react';
import './list_bar.css';
const ListBar:React.FC = () => {

    /*TODO: Implement item toggle behavior*/

    // const toggle = (e:DocumentEventMap)=>{
    //
    // }
    return (
        <ul className="listbar__list">
            <li className="listbar__list_item">site name</li>
            <li className="listbar__list_item">site_url.com</li>
            <li className="listbar__list_item">last accessed date</li>
            <li className="listbar__list_item">last transaction</li>
            <li className="listbar__list_item">transaction type</li>
        </ul>
    );
};

export default ListBar;
