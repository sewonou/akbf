import React from 'react';

import "./Services.css";
import Data from "../../../Data";
import Item from "./Item";
import work_7 from "../../../assets/img/Work_7.svg";

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
                        <h2>Our Services</h2>
                        <p>
                            A&K Business Financial offers varieties of services within the scope of the tax preparation.
                            <br/>Our business offering are listed below;
                        </p>
                    </div>
                </div>
                <div className="row">
                    {item}
                </div>
                <div className="last row">
                    <div className="col-md-6">
                        <h3>Get help to improve your tax declaration</h3>
                        <p>
                            Our mission is to provide professional, reliable and trusted tax preparation services through listening  and counseling to our customers.
                        </p>
                        <ul>
                            <li>We put a lot of effort in tax declaration</li>
                            <li>The most imoprtant ingediant of successfull enterprise</li>
                            <li>Submit your organization</li>
                        </ul>
                        <a className="button">Subscribe</a>
                    </div>
                    <div className="col-md-6">
                        <img src={work_7} alt="AK Business Financial"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
