import React from 'react';

import "./Services.css";
import Data from "../../../Data";
import Item from "./Item";

const Services = () => {
    const item = Data.serv.map((itembox) => {
        return(
            <div className="col-md-3">
               <Item title={itembox.title} text={itembox.text} icons={itembox.icons} />
            </div>
        )
    });
    return (
        <section  className='services'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Ou Services</h2>
                        <p>
                            A&K Business Financial offers varieties of services within the scope of the tax preparation.
                            <br/>Our business offering are listed below;
                        </p>
                    </div>
                </div>
                <div className="row">
                    {item}
                </div>
            </div>
        </section>
    );
};

export default Services;
