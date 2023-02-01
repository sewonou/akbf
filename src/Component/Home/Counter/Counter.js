import React, {use} from 'react';
import './Counter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
    return (
        <section className="counters">
            <div className="container">
                <div>
                    <FontAwesomeIcon icons={faUsers}/>
                    <div className="counter" data-target="78">0</div>
                    <h3>Commanderie</h3>
                </div>
                <div>
                    <FontAwesomeIcon icons={faFileAlt}/>
                    <div className="counter" data-target="71">0</div>
                    <h3>Auxiliarie</h3>
                </div>
                <div>
                    <i className="fab fa-facebook fa-4x"></i>
                    <div className="counter" data-target="18562">0</div>
                    <h3>Membres</h3>
                </div>
            </div>
        </section>
    );
};

export default Counter;
