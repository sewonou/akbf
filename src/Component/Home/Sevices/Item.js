import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond, faCreditCard, faMoneyCheckDollar, faMoneyBill, faMoneyCheck, faCashRegister, faChartBar, faChartArea, faChartLine, faChartSimple, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
    return (
        <div className="box">
            <FontAwesomeIcon icon={props.icons}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
};

export default Item;
